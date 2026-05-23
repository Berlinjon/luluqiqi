import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const indexPath = path.join(root, "index.html");
const outDir = path.join(root, "recording");
const csvPath = path.join(outDir, "recording-list.csv");
const guidePath = path.join(outDir, "recording-guide.md");

const html = fs.readFileSync(indexPath, "utf8");
const start = html.indexOf("const units =");
const end = html.indexOf("const storeKey =", start);

if (start < 0 || end < 0) {
  throw new Error("Cannot find lesson data in index.html");
}

const lessonCode = `${html.slice(start, end)}\nglobalThis.__units = units;`;
const sandbox = {};
vm.runInNewContext(lessonCode, sandbox);

const units = sandbox.__units;
const strokeNames = [
  "横", "竖", "撇", "捺", "点", "提", "撇点", "横折", "横钩", "横撇", "竖钩",
  "横折钩", "竖提", "撇折", "横折折撇", "横折提", "竖折", "竖弯", "竖弯钩",
  "弯钩", "斜钩", "卧钩", "横折弯钩", "横撇弯钩", "竖折折钩", "横折折折钩"
];

const strokeKeys = {
  "横": "heng",
  "竖": "shu",
  "撇": "pie",
  "捺": "na",
  "点": "dian",
  "提": "ti",
  "撇点": "piedian",
  "横折": "hengzhe",
  "横钩": "henggou",
  "横撇": "hengpie",
  "竖钩": "shugou",
  "横折钩": "hengzhegou",
  "竖提": "shuti",
  "撇折": "piezhe",
  "横折折撇": "hengzhezhepie",
  "横折提": "hengzheti",
  "竖折": "shuzhe",
  "竖弯": "shuwan",
  "竖弯钩": "shuwangou",
  "弯钩": "wangou",
  "斜钩": "xiegou",
  "卧钩": "wogou",
  "横折弯钩": "hengzhewangou",
  "横撇弯钩": "hengpiewangou",
  "竖折折钩": "shuzhezhegou",
  "横折折折钩": "hengzhezhezhegou"
};

const rows = [];

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function add(row) {
  rows.push({
    category: "",
    unit: "",
    lesson: "",
    lesson_type: "",
    item_id: "",
    text: "",
    pinyin: "",
    target_file: "",
    recording_note: "",
    ...row
  });
}

units.forEach((unit, unitIndex) => {
  unit.lessons.forEach((lesson, lessonIndex) => {
    lesson.words.forEach((word, wordIndex) => {
      add({
        category: "生字单字",
        unit: `${unitIndex + 1}.${unit.name}`,
        lesson: `${lessonIndex + 1}.${lesson.title}`,
        lesson_type: lesson.type,
        item_id: `${lesson.id}-word-${wordIndex}`,
        text: word,
        pinyin: lesson.tonePinyin[wordIndex] || "",
        target_file: `audio/words/${lesson.id}-${wordIndex}.mp3`,
        recording_note: "单字清晰读一遍，发音后留 0.2 秒空白，不要读解释。"
      });
    });

    add({
      category: "课文朗读",
      unit: `${unitIndex + 1}.${unit.name}`,
      lesson: `${lessonIndex + 1}.${lesson.title}`,
      lesson_type: lesson.type,
      item_id: `${lesson.id}-lesson`,
      text: lesson.read.join(" "),
      pinyin: "",
      target_file: `audio/lessons/${lesson.id}.mp3`,
      recording_note: "按一年级学生听感慢速朗读，语气自然亲切，句间停顿明显。"
    });

    add({
      category: "句子练习",
      unit: `${unitIndex + 1}.${unit.name}`,
      lesson: `${lessonIndex + 1}.${lesson.title}`,
      lesson_type: lesson.type,
      item_id: `${lesson.id}-sentence`,
      text: lesson.sentence,
      pinyin: "",
      target_file: `audio/sentences/${lesson.id}.mp3`,
      recording_note: "完整句子朗读一遍，可作为后续句子补空和跟读素材。"
    });
  });
});

strokeNames.forEach(name => {
  add({
    category: "笔画名称",
    item_id: `stroke-${strokeKeys[name]}`,
    text: name,
    target_file: `audio/strokes/${strokeKeys[name]}.mp3`,
    recording_note: "只读笔画名称一遍，短促清楚，适合跟笔顺动画同步。"
  });
});

[
  ["try-again", "再试一次"],
  ["complete", "任务完成，太棒了！"],
  ["correct", "答对了"],
  ["wrong", "再想一想"],
  ["next", "进入下一关"],
  ["review-complete", "复习完成啦"]
].forEach(([key, text]) => {
  add({
    category: "反馈提示",
    item_id: `feedback-${key}`,
    text,
    target_file: `audio/feedback/${key}.mp3`,
    recording_note: "亲切、鼓励、儿童 App 风格，避免夸张尖锐。"
  });
});

fs.mkdirSync(outDir, { recursive: true });
const headers = ["category", "unit", "lesson", "lesson_type", "item_id", "text", "pinyin", "target_file", "recording_note"];
fs.writeFileSync(csvPath, `${headers.join(",")}\n${rows.map(row => headers.map(key => csvEscape(row[key])).join(",")).join("\n")}\n`);

const wordCount = units.reduce((sum, unit) => sum + unit.lessons.reduce((lessonSum, lesson) => lessonSum + lesson.words.length, 0), 0);
const lessonCount = units.reduce((sum, unit) => sum + unit.lessons.length, 0);

fs.writeFileSync(guidePath, `# 语文 App 真人录音清单说明

## 录音范围

- 单元数：${units.length}
- 课程关卡：${lessonCount}
- 生字单字：${wordCount}
- 课文/朗读段落：${lessonCount}
- 句子练习：${lessonCount}
- 笔画名称：${strokeNames.length}
- 反馈提示：6

## 配音要求

- 声音：普通话标准，亲切、清晰，适合一年级小朋友。
- 速度：比正常成人朗读略慢，尤其课文朗读要留出理解时间。
- 格式：建议交付 MP3，44.1kHz，单声道或双声道均可。
- 文件名：请严格按 \`recording-list.csv\` 的 \`target_file\` 命名和分目录交付。
- 单字：只读汉字本身，不读“春，chun”之类说明。
- 笔画：只读笔画名称，例如“横”“撇点”。
- 课文朗读：整段录制，不要逐字拼接，保持自然节奏。

## 文件说明

- \`recording-list.csv\`：发给配音平台报价和录制使用。
- \`recording-guide.md\`：给配音老师或项目负责人看的说明。

## 建议录制顺序

1. 先录 \`反馈提示\` 和 \`笔画名称\`，数量少，能最快替换当前机器感声音。
2. 再录 \`生字单字\`，这是识字挑战和复习闯关最常用的声音。
3. 最后录 \`课文朗读\` 和 \`句子练习\`，提升整体自然度。
`);

console.log(`Generated ${rows.length} recording rows`);
console.log(csvPath);
console.log(guidePath);
