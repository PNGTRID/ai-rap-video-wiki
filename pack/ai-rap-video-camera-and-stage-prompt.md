# Stage & Camera Prompt for AI Rap Video

Intent: staging
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-camera-and-stage-prompt/

## When to use

As a vocabulary library to steal from, or as a swap block replacing the Stage and Camera lines of any duo template. Describes a booth-style stage in original words — the format convention, no specific production's shot list.

## Vocabulary that controls the render

- **Stages:** studio booth (warm orange key light, dark backdrop, rim light — the default read: plain backdrop, one light source, and low element density give the model the fewest things to drift, so faces stay stable longest; the wiki's orange backdrop guide has the full saturated-orange signature version) / neon warehouse (magenta-cyan strips, haze, concrete) / rooftop dusk (string lights, sky gradient, gentle wind).
- **Microphone:** hanging mic between performers (strongest anchor) / handhelds (more choreography, more tracking risk) / no mic (cleanest, weakest read).
- **Camera moves:** locked (max stability) / slow push-in (the workhorse) / static + one midpoint orbit (<2s) / whip pan (only as a transition).
- **Lighting words:** key light, rim light, practical lights, haze, high contrast, soft fill — two or three beat a paragraph.

## Staging swap block

The block below is the studio booth version of the staging system — the one most "studio rap ai video" searches are after.

```text
Stage (original description, no reference to any existing music video):
- Setting: original studio booth, dark backdrop with one soft vertical light strip, faint haze.
- Key light: warm orange from the front-left, gentle falloff; cool rim light from behind on both performers.
- Prop: a single vintage-style microphone hanging on a cable, centered between the two performers at chest height.
- Floor: dark, slightly reflective, no text or logos anywhere in the scene.

Camera:
- Shot 1 (0-8s): locked medium two-shot, both performers waist-up, microphone centered.
- Shot 2 (8-11s): slow push-in toward the mic, ending on a clean hold.
- No pans, no rotation, no cutaways; faces stay sharp and centered throughout.
```

## Beat & camera notes

1. 0-2s — locked establish (geometry before movement).
2. 2-6s — perform on the locked frame.
3. 6-9s — one move maximum, during the shared moment.
4. 9-11s — return to stillness (loop-friendly).

## Negative prompt

```text
camera shake, rapid cuts, scene changes, zoom bursts, spinning camera, Dutch angle, fisheye distortion, text or signage in scene, brand logos, stage crowd, confetti, fireworks, identity swap, merged faces, extra limbs, blurry faces, celebrity lookalike, NSFW
```

## Photo prep

Match wardrobe to stage palette; if the source photo background is strongly colored, pick a stage palette that doesn't clash.

## Render steps (any model)

1. Replace the base template's Stage and Camera lines with the swap block.
2. Keep one camera move; if shaky, cut to locked first.
3. Audit the scene after render: mic centered, backdrop stable, no signage. Vague stage → add one concrete noun, not more adjectives.

## Failure modes

- Stage morphs → too many named elements; cut to setting + key light + one prop.
- Camera too fast → anchor the move's duration ("push-in across the final two seconds").
- Signs/logos appear → restore "no text or logos anywhere" in prompt AND negatives.

## Compliance

All stage language is original physical description. Never recreate specific copyrighted music videos, bind protected recordings, or render celebrity likenesses.

MIT License · https://ai-rap-video.wiki
