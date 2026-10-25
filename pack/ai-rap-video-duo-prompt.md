# AI Rap Video Duo Prompt (Two Photos)

Intent: core duo
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-duo-prompt/

## When to use

Two people, two clear portrait photos, permission from both. The flagship left/right duo render — every other template in the pack is a variation of this structure.

## Hook & verse structure

Call-and-response: left performer owns lines 1 and 3 (setup), right performer owns lines 2 and 4 (answer). Keep each line under 10 syllables. Generate the bars with `ai-rap-video-original-lyrics-prompt.md`.

## Main prompt

```text
Create an AI rap video duo performance from two separate portrait references.
Left performer = photo 1, right performer = photo 2.
Keep both faces recognizable, front-lit, and assigned to fixed sides for the whole clip — the left performer never crosses to the right, and vice versa.
Stage: original studio booth, warm orange key light, a single hanging microphone centered between them, dark background with soft rim light.
Wardrobe: keep each performer's outfit exactly as shown in their reference photo.
Action: energetic head nods on the beat, traded bars with clear mouth movement per line, confident posture, occasional shoulder lean toward the mic.
Camera: locked medium two-shot framing both from the waist up, slow push-in during the final two seconds.
Audio: original upbeat rap cadence, call-and-response — left performer leads, right performer answers. Write NEW original lyrics; never quote commercial songs.
Duration: 8-12 seconds, ending on a clean two-shot hold.
```

## Beat & camera notes

1. 0-2s — locked two-shot establish, shared head nod on beat one.
2. 2-5s — left leads, right nods silently.
3. 5-9s — right answers, left drops back.
4. 9-12s — slow push-in to the mic, shared pose hold (loop point).

## Negative prompt

```text
identity swap, faces changing sides, merged faces, third person appearing, extra limbs, deformed hands, blurry faces, sunglasses, masks, group photo input, on-screen lyrics or karaoke text, watermarks, brand logos, celebrity lookalike, NSFW, camera shake, scene changes
```

## Photo prep

One face per photo; similar angle and distance across both photos; distinct outfits; sharp, front-lit faces (see the photo-prep checklist in the pack).

## Render steps (any model)

1. Upload photo 1 then photo 2 — slot order sets left/right.
2. Paste the main prompt; negative block goes in the negative field, or after "Avoid:".
3. Render 8-12s at 9:16 or 16:9.
4. Review full clip for side drift; apply the troubleshooting one-layer fix, not a rewrite.

## Failure modes

- Faces swap sides → restate "fixed sides", raise outfit contrast.
- One face soft → re-crop that reference sharper and brighter.
- Both mouths move on every line → label which performer owns which lines.

## Compliance

Original staging and lyrics only. Do not commercially bind protected recordings (including the Hotel Lobby trend audio) or celebrity likenesses. Consent from everyone in the photos.

MIT License · https://ai-rap-video.wiki
