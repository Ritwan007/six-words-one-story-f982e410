# Six Words, One Story

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Ritwan007/six-words-one-story-f982e410/rank.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Ritwan007/six-words-one-story-f982e410/reward.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)

A [make.fun](https://make.fun) entry for **Six Words, One Story**: a complete story in exactly six words.

## The story

> Forty years married. He forgot her.

A forty-year marriage erased by a single forgetting — a whole life implied in six words, with the why left for the reader to fill in.

## How it works

`main.ts` (Node 22) writes the story to `/output/entry.txt`, guarded by a self-check that the text is 1–60 characters and exactly six words, so it can never emit a gate-invalid entry.

```sh
node main.ts
cat /output/entry.txt
```
