const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');

const appDir = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(appDir, 'index.html'), 'utf8');
const script = html.slice(
  html.indexOf('<script>') + '<script>'.length,
  html.lastIndexOf('</script>')
);
const start = script.indexOf('const LESSONS = ');
const end = script.indexOf('const state = ', start);
const lessons = vm.runInNewContext(`${script.slice(start, end)}; LESSONS;`, {});
const sentences = [...new Set(lessons.flatMap(lesson => lesson.items.map(item => item[0])))];

const profileId = '865a3b6e-8220-4e04-98f8-2b5f11ca50fe';
const baseUrl = process.env.VOICEBOX_URL || 'http://127.0.0.1:17494';
const outDir = path.join(appDir, 'audio', 'sentences');
const backupDir = path.join(appDir, 'audio', `sentences-backup-${new Date().toISOString().replace(/[:.]/g, '-')}`);
const force = process.argv.includes('--force');

function slugSentence(sentence) {
  return sentence.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function request(method, urlPath, body) {
  const url = new URL(urlPath, baseUrl);
  const payload = body ? Buffer.from(JSON.stringify(body)) : null;
  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      method,
      headers: payload ? {
        'content-type': 'application/json',
        'content-length': payload.length
      } : {}
    }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const data = Buffer.concat(chunks);
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`${method} ${urlPath} failed ${res.statusCode}: ${data.toString('utf8')}`));
          return;
        }
        resolve(data);
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function requestJSON(method, urlPath, body) {
  const data = await request(method, urlPath, body);
  return JSON.parse(data.toString('utf8'));
}

async function waitForGeneration(id) {
  const started = Date.now();
  while (Date.now() - started < 180000) {
    const generation = await requestJSON('GET', `/history/${id}`);
    if (generation.status === 'completed') return generation;
    if (generation.status === 'failed' || generation.status === 'cancelled') {
      throw new Error(`Generation ${id} ${generation.status}: ${generation.error || 'no error'}`);
    }
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  throw new Error(`Generation ${id} timed out`);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  if (force && fs.existsSync(outDir) && fs.readdirSync(outDir).some(name => name.endsWith('.wav'))) {
    fs.mkdirSync(backupDir, { recursive: true });
    for (const name of fs.readdirSync(outDir)) {
      if (name.endsWith('.wav')) {
        fs.copyFileSync(path.join(outDir, name), path.join(backupDir, name));
      }
    }
    process.stdout.write(`Backed up existing WAV files to ${path.relative(appDir, backupDir)}\n`);
  }

  for (const [index, sentence] of sentences.entries()) {
    const outFile = path.join(outDir, `${slugSentence(sentence)}.wav`);
    if (!force && fs.existsSync(outFile) && fs.statSync(outFile).size >= 5000) {
      process.stdout.write(`${String(index + 1).padStart(2, '0')}/${sentences.length} skip ${path.basename(outFile)}\n`);
      continue;
    }
    const response = await requestJSON('POST', '/generate', {
      profile_id: profileId,
      text: sentence,
      language: 'en',
      engine: 'kokoro',
      normalize: true
    });
    const generation = await waitForGeneration(response.id);
    const audio = await request('GET', `/audio/${generation.id}`);
    fs.writeFileSync(outFile, audio);
    if (audio.length < 5000) {
      throw new Error(`Generated audio is too small: ${outFile} (${audio.length} bytes)`);
    }
    process.stdout.write(`${String(index + 1).padStart(2, '0')}/${sentences.length} ${path.basename(outFile)} ${generation.duration}s\n`);
  }
}

main().catch(error => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
