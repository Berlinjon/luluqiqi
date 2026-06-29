import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = resolve(appDir, "src/course-data.js");
const source = readFileSync(dataPath, "utf8");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(source, context, { filename: dataPath });

const data = context.window.ENGLISH_LISTENING_DATA;
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function slugSentence(sentence) {
  return sentence
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toAppPath(browserPath) {
  return resolve(appDir, browserPath.replace(/^\.\//, ""));
}

if (!data || typeof data !== "object") {
  fail("Missing window.ENGLISH_LISTENING_DATA export.");
} else {
  const {
    KIDS,
    GENERATED_IMAGES,
    VISUALS,
    LESSONS
  } = data;

  if (!Array.isArray(KIDS) || KIDS.length === 0) {
    fail("KIDS must be a non-empty array.");
  }

  if (!GENERATED_IMAGES || typeof GENERATED_IMAGES !== "object") {
    fail("GENERATED_IMAGES must be an object.");
  }

  if (!VISUALS || typeof VISUALS !== "object") {
    fail("VISUALS must be an object.");
  }

  if (!Array.isArray(LESSONS) || LESSONS.length === 0) {
    fail("LESSONS must be a non-empty array.");
  } else {
    const lessonIds = new Set();
    const itemIds = new Set();
    const visualKeys = new Set([
      ...Object.keys(GENERATED_IMAGES ?? {}),
      ...Object.keys(VISUALS ?? {})
    ]);

    for (const [lessonIndex, lesson] of LESSONS.entries()) {
      const label = lesson?.id ?? `lesson-${lessonIndex + 1}`;

      if (!lesson?.id) fail(`Lesson ${lessonIndex + 1} is missing id.`);
      if (lessonIds.has(lesson?.id)) fail(`Duplicate lesson id: ${lesson.id}`);
      lessonIds.add(lesson?.id);

      if (!lesson?.name) fail(`${label} is missing name.`);
      if (!lesson?.level) fail(`${label} is missing level.`);
      if (![2, 4].includes(lesson?.choiceCount)) {
        fail(`${label} choiceCount must be 2 or 4.`);
      }
      if (!Array.isArray(lesson?.items) || lesson.items.length === 0) {
        fail(`${label} must contain at least one item.`);
        continue;
      }

      for (const [itemIndex, item] of lesson.items.entries()) {
        const itemLabel = `${label} item ${itemIndex + 1}`;
        if (!item || typeof item !== "object" || Array.isArray(item)) {
          fail(`${itemLabel} must be an object with sentence, zh, correct, and choices.`);
          continue;
        }

        const {
          id,
          sentence,
          zh,
          correct: correctKey,
          choices: choiceKeys
        } = item;

        if (!id || typeof id !== "string") {
          fail(`${itemLabel} is missing id.`);
        } else if (itemIds.has(id)) {
          fail(`Duplicate item id: ${id}`);
        } else {
          itemIds.add(id);
        }

        if (!sentence || typeof sentence !== "string") {
          fail(`${itemLabel} has invalid sentence.`);
          continue;
        }

        if (!zh || typeof zh !== "string") {
          fail(`${itemLabel} is missing Chinese hint for: ${sentence}`);
        }

        if (!visualKeys.has(correctKey)) {
          fail(`${itemLabel} correct visual is missing: ${correctKey}`);
        }

        if (!Array.isArray(choiceKeys) || choiceKeys.length !== 4) {
          fail(`${itemLabel} must have exactly 4 choice keys.`);
        } else {
          if (!choiceKeys.includes(correctKey)) {
            fail(`${itemLabel} choices do not include correct key: ${correctKey}`);
          }
          for (const key of choiceKeys) {
            if (!visualKeys.has(key)) fail(`${itemLabel} choice visual is missing: ${key}`);
          }
        }

        const audioPath = resolve(appDir, "audio/sentences", `${slugSentence(sentence)}.wav`);
        if (!existsSync(audioPath)) {
          fail(`${itemLabel} is missing local audio: ${audioPath}`);
        }
      }
    }

    for (const [key, browserPath] of Object.entries(GENERATED_IMAGES ?? {})) {
      if (!existsSync(toAppPath(browserPath))) {
        fail(`Generated image is missing for ${key}: ${browserPath}`);
      }
    }
  }
}

if (warnings.length) {
  console.warn(`Warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error(`Course data validation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Course data validation passed.");
