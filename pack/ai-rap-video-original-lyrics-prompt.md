# Original Lyrics Prompt for AI Rap Video

Intent: lyrics
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-original-lyrics-prompt/

## When to use

Before any duo render: this generates the original bars the Audio block performs. Original lyrics carry zero claim risk and lip-sync better than famous lines the model half-recognizes.

## The structure an 8-12s clip needs

1. **4-line hook** — 6-10 syllables per line, AABB rhyme. Left performer owns lines 1 and 3, right owns 2 and 4. Name the occasion.
2. **8-bar verse** (optional, longer cuts) — concrete nouns and places, alternating speakers every two bars.
3. **Roles, not just lines** — write output as a LEFT:/RIGHT: script; that format is what you paste into the video prompt's Audio section.

## Lyrics generation prompt

```text
Write ORIGINAL rap lyrics for a short AI-generated duo performance video.
Subject: [the occasion — e.g. "our 5-year anniversary", "reunion after 10 years", "winning the league"]
Tone: [hype / warm / playful — pick one]
Requirements:
1. A 4-line hook, 6-10 syllables per line, AABB rhyme scheme.
2. An 8-bar verse, concrete nouns and places, alternating speakers every two bars.
3. Format the output as a script with LEFT: and RIGHT: role labels on every line.
4. Keep it PG: no profanity, no brand names, no celebrity or artist names.
5. Everything must be original — do not quote, reference, or paraphrase any existing commercial song, and do not imitate any specific artist's signature phrases.
Output only the script, nothing else.
```

## Worked example (reunion after ten years)

```text
LEFT:  Ten years gone, still the same two names (8 syllables)
RIGHT: Same two names, but the game has changed (8 syllables)
LEFT:  We made it out, now we run the town (8 syllables)
RIGHT: Run the town, and we're not coming down (9 syllables)
```

AABB rhyme, an internal echo, the occasion named in line one — that's the whole craft at clip length.

## Feeding lyrics into the video prompt

In the duo template's Audio block: `original upbeat rap cadence performing this script — LEFT: [lines] RIGHT: [lines]`. Keep the "write NEW lyrics, never quote commercial tracks" guardrail line even when pasting your own words.

## Failure modes

- Lines too long → mouth movement smears; cut to 10 syllables max.
- Both performers rap everything → roles weren't labeled; use the LEFT/RIGHT script format.
- Output drifts toward a famous song → rename the subject with specifics only your clip would have.
- Model sings instead of raps → "rap cadence, conversational rhythm" beats "song".

## Compliance

Generated lyrics must be original. Never quote or paraphrase commercial recordings — including the Hotel Lobby trend audio — and never imitate a specific artist's signature style or name.

MIT License · https://ai-rap-video.wiki
