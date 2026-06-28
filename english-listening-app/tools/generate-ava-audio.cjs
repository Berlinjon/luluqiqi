const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

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
const outDir = path.join(appDir, 'audio', 'sentences');

function slugSentence(sentence) {
  return sentence.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

fs.mkdirSync(outDir, { recursive: true });

sentences.forEach((sentence, index) => {
  const outFile = path.join(outDir, `${slugSentence(sentence)}.wav`);
  const result = spawnSync('say', [
    '-v', 'Ava',
    '-r', '145',
    '-o', outFile,
    '--data-format=LEI16@22050',
    sentence
  ], { encoding: 'utf8' });

  if (result.status !== 0) {
    process.stderr.write(result.stderr || `say failed for: ${sentence}\n`);
    process.exit(result.status || 1);
  }

  const size = fs.statSync(outFile).size;
  if (size < 5000) {
    process.stderr.write(`Generated audio is too small: ${outFile} (${size} bytes)\n`);
    process.exit(1);
  }

  process.stdout.write(`${String(index + 1).padStart(2, '0')}/${sentences.length} ${path.basename(outFile)}\n`);
});
