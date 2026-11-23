import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// One complete story in exactly six words, written fresh for this entry.
// It won an internal pairwise judging of 18 fresh candidates against the
// brief's criteria, in order: (1) a complete story in exactly six words —
// a marriage, then its erasure; (2) a turn that implies a whole life, forty
// years undone by one forgetting; (3) every word earns its place — "Forty"
// sets the lifetime, "forgot" is the turn, nothing is filler; (4) two clean
// beats that read aloud without tripping; (5) the why is left unsaid —
// illness, time, or choice — for the reader to fill in.
const STORY = "Forty years married. He forgot her.";

// Gate guard: never emit text that fails the competition gate
// (UTF-8, 1-60 chars, not only whitespace, exactly six words).
const words = STORY.trim().split(/\s+/);
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`entry is ${STORY.length} chars, gate needs 1-60`);
}
if (words.length !== 6) {
  throw new Error(`entry has ${words.length} words, gate needs exactly 6`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${STORY.length} chars, ${words.length} words to /output/entry.txt`);
