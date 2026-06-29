import { readFileSync } from "node:fs";
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
const notes = [];

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "has",
  "he",
  "her",
  "his",
  "in",
  "is",
  "it",
  "on",
  "she",
  "the",
  "to"
]);

const UNSUITABLE_PATTERNS = [
  /\bfight(?:ing)?\b/i,
  /\bcry(?:ing)?\b/i,
  /\bhurt\b/i,
  /\bpush(?:ing)?\b/i,
  /\bunsafe\b/i,
  /\bsock/i,
  /打架|哭|受伤|危险|袜子/
];

const TOKEN_SYNONYMS = new Map([
  ["animal", ["cat", "dog", "bird", "fish", "rabbit"]],
  ["animals", ["cat", "dog", "bird", "fish", "rabbit"]],
  ["bag", ["bag", "schoolbag"]],
  ["bed", ["bed"]],
  ["beside", ["beside", "next", "near"]],
  ["below", ["below", "under"]],
  ["big", ["big"]],
  ["blue", ["blue"]],
  ["boy", ["boy", "child", "person"]],
  ["bright", ["bright"]],
  ["brushing", ["brush", "teeth", "daily"]],
  ["cake", ["cake", "food"]],
  ["cat", ["cat", "animal"]],
  ["chair", ["chair"]],
  ["child", ["child", "person"]],
  ["cloud", ["cloud", "weather"]],
  ["cold", ["cold"]],
  ["cooks", ["cook", "food"]],
  ["cooking", ["cook", "food"]],
  ["count", ["count", "star"]],
  ["dad", ["dad", "person"]],
  ["dog", ["dog", "animal"]],
  ["door", ["door"]],
  ["drinks", ["drink", "milk", "daily"]],
  ["eats", ["eat", "food"]],
  ["family", ["family", "person"]],
  ["fish", ["fish", "animal", "water"]],
  ["flies", ["fly"]],
  ["flying", ["fly"]],
  ["food", ["food"]],
  ["fruit", ["fruit", "food"]],
  ["girl", ["girl", "child", "person"]],
  ["green", ["green"]],
  ["hands", ["hands", "wash", "daily"]],
  ["hat", ["hat", "wear"]],
  ["high", ["high"]],
  ["hot", ["hot"]],
  ["kite", ["kite", "wind"]],
  ["long", ["long"]],
  ["milk", ["milk", "drink", "food"]],
  ["near", ["near", "beside", "next"]],
  ["next", ["next", "near", "beside"]],
  ["open", ["open", "door"]],
  ["outside", ["outside"]],
  ["plate", ["plate", "food"]],
  ["quiet", ["quiet"]],
  ["rabbit", ["rabbit", "animal"]],
  ["rain", ["rain", "weather"]],
  ["raining", ["rain", "weather"]],
  ["reading", ["read", "book", "daily"]],
  ["red", ["red"]],
  ["round", ["round"]],
  ["running", ["run", "action"]],
  ["sits", ["sit"]],
  ["sky", ["sky", "weather"]],
  ["sleeping", ["sleep", "rest"]],
  ["small", ["small"]],
  ["snow", ["snow", "weather"]],
  ["snowing", ["snow", "weather"]],
  ["star", ["star", "sky"]],
  ["stars", ["star", "sky"]],
  ["sun", ["sun", "weather"]],
  ["sweet", ["sweet"]],
  ["swimming", ["swim", "water"]],
  ["table", ["table"]],
  ["tall", ["tall"]],
  ["teeth", ["teeth", "brush", "daily"]],
  ["touches", ["touch"]],
  ["tree", ["tree", "nature"]],
  ["umbrella", ["umbrella", "rain"]],
  ["under", ["under", "below"]],
  ["washing", ["wash", "hands", "daily"]],
  ["water", ["water"]],
  ["wearing", ["wear", "hat"]],
  ["wet", ["wet", "rain"]],
  ["white", ["white"]],
  ["wind", ["wind", "weather"]],
  ["windy", ["wind", "weather"]],
  ["window", ["window"]],
  ["yellow", ["yellow"]]
]);

const KEY_TAGS = new Map([
  ["boy_run", ["boy", "child", "person", "run", "action", "daily"]],
  ["girl_read", ["girl", "child", "person", "read", "book", "daily"]],
  ["brush_teeth", ["brush", "teeth", "daily"]],
  ["wash_hands", ["wash", "hands", "daily"]],
  ["cook_food", ["cook", "food", "daily"]],
  ["milk_drink", ["milk", "drink", "food", "daily"]],
  ["cake_eat", ["cake", "eat", "food"]],
  ["open_door", ["open", "door", "daily"]],
  ["close_window", ["close", "window", "daily"]],
  ["wear_hat", ["wear", "hat", "daily"]],
  ["windy_kite", ["wind", "kite", "weather"]],
  ["star_count", ["count", "star", "sky"]]
]);

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

function addNote(message) {
  notes.push(message);
}

function splitWords(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/[^a-z0-9\s]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter(word => !STOP_WORDS.has(word));
}

function expandToken(token) {
  return TOKEN_SYNONYMS.get(token) ?? [token];
}

function sentenceTags(sentence) {
  const tags = new Set();
  for (const word of splitWords(sentence)) {
    for (const tag of expandToken(word)) tags.add(tag);
  }
  return tags;
}

function keyTags(key) {
  const tags = new Set();
  for (const word of splitWords(key.replace(/_new$/, ""))) {
    for (const tag of expandToken(word)) tags.add(tag);
  }
  for (const tag of KEY_TAGS.get(key) ?? []) tags.add(tag);
  for (const domain of domainsForTags(tags)) tags.add(domain);
  return tags;
}

function domainsForTags(tags) {
  const domains = new Set();
  const values = new Set(tags);
  if (hasAny(values, ["cat", "dog", "bird", "fish", "rabbit", "animal"])) domains.add("domain:animal");
  if (hasAny(values, ["apple", "banana", "milk", "cake", "food", "fruit", "sweet", "plate"])) domains.add("domain:food");
  if (hasAny(values, ["boy", "girl", "child", "person", "brush", "wash", "run", "read", "cook", "door", "window", "hat", "daily"])) domains.add("domain:daily");
  if (hasAny(values, ["red", "blue", "green", "yellow", "white", "small", "big", "tall", "long", "round"])) domains.add("domain:attribute");
  if (hasAny(values, ["on", "under", "below", "in", "next", "near", "beside", "outside", "table", "chair", "bed", "box"])) domains.add("domain:position");
  if (hasAny(values, ["rain", "snow", "sun", "wind", "sky", "star", "cloud", "weather", "tree", "nature", "umbrella", "kite"])) domains.add("domain:weather");
  return domains;
}

function hasAny(values, candidates) {
  return candidates.some(candidate => values.has(candidate));
}

function intersect(a, b) {
  return [...a].filter(value => b.has(value));
}

function meaningfulOverlap(a, b) {
  return intersect(a, b).filter(tag => !tag.startsWith("domain:"));
}

function domainOverlap(a, b) {
  return intersect(a, b).filter(tag => tag.startsWith("domain:"));
}

function hasUnsuitableContent(...values) {
  const text = values.filter(Boolean).join(" ");
  return UNSUITABLE_PATTERNS.some(pattern => pattern.test(text));
}

function auditItem(lesson, item, itemIndex) {
  const label = `${lesson.id} item ${itemIndex + 1} (${item.id})`;
  const choiceKeys = item.choices ?? [];
  const uniqueChoices = new Set(choiceKeys);

  if (choiceKeys.length !== uniqueChoices.size) {
    addError(`${label}: choices contain duplicate visual keys.`);
  }

  if (!uniqueChoices.has(item.correct)) {
    addError(`${label}: choices do not include correct visual key ${item.correct}.`);
  }

  if (hasUnsuitableContent(item.sentence, item.zh, item.correct, ...choiceKeys)) {
    addWarning(`${label}: contains wording or visual keys that need a child-safety review.`);
  }

  const correctTags = keyTags(item.correct);
  const sentenceConcepts = sentenceTags(item.sentence);
  const sentenceOverlap = meaningfulOverlap(sentenceConcepts, correctTags);

  if (!sentenceOverlap.length) {
    addWarning(`${label}: correct visual ${item.correct} has weak semantic overlap with sentence "${item.sentence}".`);
  }

  const distractors = choiceKeys.filter(key => key !== item.correct);
  const closeDistractors = [];
  const remoteDistractors = [];

  for (const distractor of distractors) {
    const distractorTags = keyTags(distractor);
    const direct = meaningfulOverlap(correctTags, distractorTags);
    const domains = domainOverlap(correctTags, distractorTags);

    if (direct.length || domains.length) {
      closeDistractors.push({ key: distractor, direct, domains });
    } else {
      remoteDistractors.push(distractor);
    }
  }

  const requiredClose = lesson.choiceCount === 4 ? 2 : 1;
  if (closeDistractors.length < requiredClose) {
    const remoteText = remoteDistractors.length ? ` Remote choices: ${remoteDistractors.join(", ")}.` : "";
    addWarning(`${label}: only ${closeDistractors.length}/${distractors.length} distractors are semantically close to ${item.correct}; review for random-looking choices.${remoteText}`);
  } else if (remoteDistractors.length >= Math.max(2, distractors.length - 1)) {
    addWarning(`${label}: most distractors look remote from the correct visual: ${remoteDistractors.join(", ")}.`);
  }

  const exactSemanticDuplicates = distractors.filter(distractor => {
    const direct = meaningfulOverlap(correctTags, keyTags(distractor));
    return direct.length >= 3;
  });

  if (exactSemanticDuplicates.length) {
    addNote(`${label}: close distractor(s) ${exactSemanticDuplicates.join(", ")} may be useful, but confirm they do not make the answer ambiguous.`);
  }
}

if (!data || typeof data !== "object" || !Array.isArray(data.LESSONS)) {
  addError("Missing window.ENGLISH_LISTENING_DATA.LESSONS.");
} else {
  for (const lesson of data.LESSONS) {
    if (!Array.isArray(lesson.items)) continue;
    lesson.items.forEach((item, index) => auditItem(lesson, item, index));
  }
}

if (errors.length) {
  console.error(`Distractor audit failed (${errors.length} structural issue${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length) {
  console.warn(`Distractor audit warnings (${warnings.length} review item${warnings.length === 1 ? "" : "s"}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (notes.length) {
  console.log(`Distractor audit notes (${notes.length}):`);
  for (const note of notes) console.log(`- ${note}`);
}

if (errors.length) {
  process.exit(1);
}

console.log(`Distractor audit completed: ${warnings.length} warning${warnings.length === 1 ? "" : "s"}, ${notes.length} note${notes.length === 1 ? "" : "s"}.`);
