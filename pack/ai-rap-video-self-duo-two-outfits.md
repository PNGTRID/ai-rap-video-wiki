# Self-Duo AI Rap Video (Two Outfits)

Intent: self-duo
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-self-duo-two-outfits/

## When to use

One person, two outfits, duo format anyway — solo creators, alt accounts, "me vs me" jokes. The entire craft is contrast engineering: identical faces on both sides is exactly the condition models fail at.

## The three contrast dials (set before prompting)

1. **Outfit color (big):** maximum separation — black vs white, red vs teal. Near-identical hoodies are the #1 merge cause.
2. **Hairstyle/headwear (medium):** hood up vs down, cap vs bare, tied vs loose — a silhouette difference survives close colors.
3. **Energy (small):** left calm and laid-back, right animated and loud. Different body language keeps the pair readable in stills.

## Main prompt

```text
Create an AI rap video self-duo performance: the SAME person appears twice, as two distinct performers.
Left performer = photo 1 (hood up, dark outfit), right performer = photo 2 (hood down, light outfit).
Both performers share one face; keep that face identical to the references and keep the two performers visually separate at all times — they never touch, overlap, or blend.
Stage: original booth-style set, warm orange key light, one hanging microphone centered between them, dark backdrop.
Action: traded bars with sharp mouth movement — only one performer raps at a time; the other nods on beat. Left performer is calm and laid-back; right performer is animated and loud.
Camera: locked medium two-shot, slow push-in during the final two seconds.
Audio: original upbeat rap cadence, call-and-response between the two versions of the same person — write NEW original lyrics; never quote commercial songs.
Duration: 8-12 seconds, ending on a clean two-shot hold where both versions are clearly separate.
```

## Beat & camera notes

1. 0-2s — establish the pair, clear outfit contrast, mic splits them.
2. 2-6s — left (calm) leads, right bounces silently.
3. 6-10s — right (loud) answers; the calm side's stillness sells "two people".
4. 10-12s — separate hold with a visible gap. No lean-in on this template.

## Negative prompt

```text
faces merging into one person, performers overlapping, clone afterimage, twin silhouette blending, outfit colors swapping between sides, third person, extra limbs, blurry face, mirrored kaleidoscope effect, on-screen lyrics or captions, watermarks, brand logos, celebrity lookalike, NSFW, scene changes
```

## Photo prep

Two photos from different days with genuinely different looks; same face angle in both; matching photo quality; no sunglasses in either.

## Render steps (any model)

1. Upload outfit photo 1 then 2 — slot order sets left/right.
2. Paste prompt with contrast dials filled in; merge-related negatives in the negative field.
3. Render 8-12s; audit the midpoint frame-by-frame — still clearly two people? If merging starts, strengthen outfit contrast before touching wording.

## Failure modes

- Versions merge mid-clip → push colors further apart, remove overlap choreography.
- Kaleidoscope/mirror artifacts → reinforce "two distinct performers trading bars", keep the kaleidoscope negative.
- Outfits swap sides → restate "outfit colors never swap between sides".

## Compliance

Original staging and lyrics only. Do not commercially bind protected recordings (including the Hotel Lobby trend audio) or celebrity likenesses. This template is for your own face with your own consent.

MIT License · https://ai-rap-video.wiki
