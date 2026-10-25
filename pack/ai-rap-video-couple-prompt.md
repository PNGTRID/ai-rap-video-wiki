# Couple AI Rap Video Prompt

Intent: couple
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-couple-prompt/

## When to use

Anniversaries, date-night posts, "first dance, but a rap" moments. Same core duo workflow, re-tuned: amber light, mellow cadence, one shoulder lean, a shared hook line.

## Hook & verse structure

Setup-and-harmony: left carries the setup lines (how you met, small details), right carries the answers (what it became), both share the final hook line — the only line where both mouths move together. Lyrics template at tone `warm`; one concrete shared memory in the hook.

## Main prompt

```text
Create an AI rap video duo performance with a warm couple dynamic from two separate portrait references.
Left performer = photo 1, right performer = photo 2, fixed sides for the whole clip.
Stage: original intimate studio set, amber and rose-toned key light, soft falloff, one hanging microphone centered between them, dark backdrop with a faint warm glow behind each performer.
Wardrobe: keep each performer's outfit from their reference photo; coordinated warm tones preferred.
Action: relaxed confident performance — traded verses with clear, gentle mouth movement, soft head nods slightly behind the beat, one brief shoulder-to-shoulder lean at the midpoint, warm eye contact toward the camera between lines.
Choreography rule: the lean happens exactly once; no hand-holding, no embrace — keep both faces fully visible for the entire clip.
Camera: locked medium two-shot, very slow push-in across the final three seconds, no cuts.
Audio: original mellow rap cadence, setup-and-answer roles, one shared hook line performed together at the end — write NEW original lyrics; never quote commercial songs.
Duration: 9-12 seconds, ending on the shared hook pose as the loop hold.
```

## Beat & camera notes

1. 0-2s — warm establish, left opens the setup line.
2. 2-6s — traded verses at half the duo template's energy.
3. 6-8s — the single shoulder-to-shoulder lean.
4. 8-12s — shared hook into the mic while the camera pushes in (poster frame + loop point).

## Negative prompt

```text
identity swap, merged faces, faces fusing during the lean, third person, extra limbs, blurry faces, closed eyes for more than one beat, harsh shadows, cold blue lighting, on-screen lyrics or captions, watermarks, brand logos, celebrity lookalike, NSFW, scene changes, fast cuts
```

## Photo prep

Warm-toned or neutral photos; soft smiles rather than open laughs; use two separate crops as separate references even if the couple has a photo together (coupled inputs cause face fusing).

## Render steps (any model)

1. Upload each partner to its own slot (slot order = left/right), paste prompt, negative block in its field.
2. Add the setup-and-answer script to the Audio block, shared hook labeled "BOTH:".
3. Render 9-12s; check the midpoint lean frame for face fusion first, then the push-in ending.

## Failure modes

- Faces fuse during the lean → keep the lean shoulder-only, enforce "no embrace"; distance is the anti-fusion tool.
- Reads as hype → swap in calmer references, slow the nods further.
- Lighting comes back cold → name the palette twice, add "cold blue lighting" to negatives.

## Compliance

Original staging and lyrics only. Do not commercially bind protected recordings (including the Hotel Lobby trend audio) or celebrity likenesses. Both partners must consent to the render and to posting it.

MIT License · https://ai-rap-video.wiki
