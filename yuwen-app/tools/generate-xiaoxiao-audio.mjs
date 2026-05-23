import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const listPath = path.join(root, "recording", "recording-list.csv");
const voiceboxDataDir = path.join(process.env.HOME, "Library/Application Support/sh.voicebox.app");
const profileId = "57462627-7cc4-401e-b0df-e114b5a94fef";
const baseUrl = "http://127.0.0.1:17493";

const args = process.argv.slice(2);
const categories = args.filter(arg => arg.startsWith("--category=")).map(arg => arg.slice("--category=".length));
const limitArg = args.find(arg => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.slice("--limit=".length)) : Infinity;

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (quoted && char === '"' && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

function readRows() {
  const lines = fs.readFileSync(listPath, "utf8").trim().split(/\r?\n/);
  const headers = parseCsvLine(lines.shift());
  return lines.map(line => {
    const cells = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""]));
  });
}

function xiaoxiaoTarget(targetFile) {
  return path.join(root, targetFile.replace(/^audio\//, "audio/xiaoxiao/").replace(/\.mp3$/, ".wav"));
}

function spokenText(row) {
  if (row.category === "生字单字" || row.category === "笔画名称") return `${row.text}。`;
  return row.text;
}

async function waitForGeneration(id) {
  for (let attempt = 0; attempt < 180; attempt += 1) {
    const res = await fetch(`${baseUrl}/history/${id}`);
    if (!res.ok) throw new Error(`Cannot read generation ${id}: ${res.status}`);
    const item = await res.json();
    if (item.status === "completed" && item.audio_path) return item;
    if (item.status === "failed") throw new Error(`Generation failed for ${id}: ${item.error || "unknown error"}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  throw new Error(`Generation timed out: ${id}`);
}

async function generate(row) {
  const target = xiaoxiaoTarget(row.target_file);
  if (fs.existsSync(target)) {
    console.log(`skip existing ${target}`);
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const res = await fetch(`${baseUrl}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      profile_id: profileId,
      text: spokenText(row),
      language: "zh",
      engine: "kokoro",
      normalize: true
    })
  });
  if (!res.ok) throw new Error(`Generate failed ${res.status}: ${await res.text()}`);
  const pending = await res.json();
  const completed = await waitForGeneration(pending.id);
  const source = path.join(voiceboxDataDir, completed.audio_path);
  fs.copyFileSync(source, target);
  console.log(`${row.category} ${row.item_id} -> ${path.relative(root, target)}`);
}

const rows = readRows()
  .filter(row => !categories.length || categories.includes(row.category))
  .slice(0, Number.isFinite(limit) ? limit : undefined);

console.log(`Using Xiaoxiao profile ${profileId}`);
console.log(`Generating ${rows.length} rows`);

for (const row of rows) {
  await generate(row);
}
