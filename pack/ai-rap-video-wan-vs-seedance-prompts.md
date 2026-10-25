# Wan vs Seedance Prompts for AI Rap Video

Intent: models
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-wan-vs-seedance-prompts/

## When to use

Porting a template between pipeline families. Same vocabulary, different ordering: the crown-jewel instruction goes first in each dialect.

## The one structural difference

- **Wan-style = subject-first.** Cast before set: "Left performer = photo 1..." roles and rules up top, stage second.
- **Seedance-style = scene-first.** Atmosphere before cast: stage, light, mood — then who's in it, named by appearance.

## Dimension table

| Dimension | Wan-style | Seedance-style |
|---|---|---|
| Prompt order | Subject-first | Scene-first |
| Reference handling | Explicit slot language ("photo 1") | Appearance naming ("the performer in the dark jacket") |
| Motion language | Tolerates dense choreography lists | Fewer, stronger verbs; long lists get partially dropped |
| Negative prompts | Dedicated field common | Often none — "Avoid:" line in the main prompt |
| Duration default | Explicit in request; state 8-12s | Often fixed per mode; keep prompts loop-ready |
| Identity stability | Slot-ordered refs + restated "fixed sides" | Appearance-named refs + outfit contrast |

## Wan-style prompt (subject-first)

```text
Create an AI rap video duo performance from two separate portrait references.
Left performer = photo 1, right performer = photo 2. Fixed sides for the whole clip.
Rules: only one performer raps at a time; the other nods on beat. Faces stay sharp and centered.
Stage: original studio booth, warm orange key light, one hanging microphone centered between them, dark backdrop.
Action: energetic head nods, traded bars with clear mouth movement, one slow push-in during the final two seconds.
Audio: original upbeat rap cadence, call-and-response — write NEW lyrics, never quote commercial tracks.
Duration: 8-12 seconds, clean two-shot hold at the end.
Negative: identity swap, merged faces, third person, blurry faces, on-screen text, logos, NSFW.
```

## Seedance-style prompt (scene-first)

```text
An original studio booth stage: warm orange key light falls from the front-left, a single vintage microphone hangs centered in frame, the dark backdrop carries a soft rim light.
Two performers stand on either side of the mic: on the left, the person from the first reference photo in their own outfit; on the right, the person from the second reference photo. They trade bars in a call-and-response — one raps while the other nods on beat — energetic but locked to their sides, faces sharp and front-lit.
The camera holds a medium two-shot, pushing in slowly over the final two seconds to a clean hold. The performance runs 8-12 seconds to an original upbeat rap cadence with NEW lyrics — never commercial songs.
Avoid: identity swap, merged faces, third person, blurry faces, on-screen text, logos, NSFW.
```

## Porting rules

1. Move the crown jewel to line one (subject roles for Wan-style, stage atmosphere for Seedance-style).
2. Rename references: "photo 1" → "the person from the first reference photo".
3. Halve the choreography list for Seedance-style; keep the two strongest gestures.
4. Relocate the negative block: dedicated field if it exists, else "Avoid:" as the final line.
5. Re-render, don't assume — first render in a new dialect is a calibration shot.

## Failure modes

- Scene-first prompt drifts sides in a Wan-style tool → hoist "Left = photo 1" back to the top.
- Subject-first prompt renders a flat stage in a Seedance-style tool → open with the stage.
- Choreography half-applied → cut to two named gestures.

## Compliance

Identical in every dialect — original staging and lyrics only; never bind protected recordings or celebrity likenesses, whichever model renders the clip.

MIT License · https://ai-rap-video.wiki
