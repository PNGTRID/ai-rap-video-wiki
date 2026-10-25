# Negative Prompts for Cleaner AI Rap Video

Intent: negative
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-negative-prompt-guide/

## When to use

Every render. Negatives are cheaper than fixes: face swaps, karaoke text, and phantom logos are prevented for the cost of one blocklist line.

## Three usage rules

1. Use the dedicated negative field when the tool has one; otherwise append as `Avoid: ...` at the END of the main prompt.
2. Comma-separated terms, no sentences — a blocklist, not prose.
3. Start from the master block; add a term only when a render actually shows that failure.

## Category library

- **Identity:** identity swap, faces changing sides, merged faces, faces fusing, third person appearing, clone afterimage, mirrored kaleidoscope effect, outfit colors swapping between sides
- **Anatomy:** extra limbs, extra arms, extra fingers, deformed hands, fused legs, distorted anatomy
- **Image quality:** blurry faces, motion smear, compression artifacts, flicker, frame jitter, low resolution, oversharpened skin
- **Set & props:** on-screen lyrics or captions, karaoke text, watermarks, brand logos, signage, text in scene, crowd, confetti, stage change, scene changes
- **Camera:** camera shake, rapid cuts, zoom bursts, spinning camera, Dutch angle, fisheye distortion
- **Safety & likeness:** celebrity lookalike, real artist likeness, NSFW, weapons, alcohol

## Master negative block

```text
Avoid: identity swap, faces changing sides, merged faces, faces fusing, third person appearing, extra limbs, deformed hands, blurry faces, motion smear, frame flicker, on-screen lyrics or karaoke text, watermarks, brand logos, text in scene, camera shake, rapid cuts, scene changes, celebrity lookalike, NSFW
```

Per-template blocks are this list with 2-3 scenario terms swapped in (pets add paw terms, vertical adds letterboxing terms).

## What each category prevents

Identity terms are the expensive ones (a face swap can only be re-rendered). Anatomy matters most in choreographed templates. Quality terms are free insurance. Set terms block invented branded dressing. Camera terms trade flair for stability — keep them all on first renders. Safety terms are the prompt-level enforcement of the site's compliance rules.

## Ordering and length

Lead with terms protecting your current weakness (identity first for duos, letterboxing for vertical, paws for pets). Past ~30 terms returns diminish — trim terms for failures you've never hit.

## Failure modes

- Negatives seem ignored → block was in the main prompt of a tool with a real negative field; move it.
- Render got worse after adding negatives → too many or contradictory terms; cut back to the master block.
- A failure keeps recurring → negatives reduce probability, not guarantee; pair with the structural fixes in the troubleshooting file.

## Compliance

The safety terms (celebrity lookalike, NSFW) belong in every render, not just the first. Original lyrics and staging only; never bind protected recordings or real people's likenesses.

MIT License · https://ai-rap-video.wiki
