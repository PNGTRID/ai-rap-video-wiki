---
videoId: pIAkHLvoaLE
title: "Wan 2.2 Animate: Character Animation From a Single Reference"
description: "What Wan 2.2 Animate does for AI rap video — character performance from one reference image, and the subject-first wording that drives it."
date: 2026-10-25
uploadDate: 2025-10-22
---

Wan-style engines approach the AI rap video from the opposite end of the seed-order: instead of describing a scene and placing people in it, you hand over **a character reference and ask for a performance**. Wan 2.2 Animate is the sharpest expression of that idea — one image in, a moving, lip-syncing character out — and this video from Isa does AI is a solid tour of what it can hold. This page translates the demo into template language.

## What this video covers

An Animate walkthrough at this length shows the reference-to-performance flow: what kind of source image works, how motion and expression carry over, where the animation holds a face and where it softens. The demo material is broader than rap videos — character scenes of all kinds — which is exactly why it is useful here: you see the engine's behavior without the trend's assumptions.

## Why Animate matters for the duo format

The [duo template](/prompts/ai-rap-video-duo-prompt/) needs two identities held stable in one frame for 8-12 seconds. An Animate-style workflow changes the risk profile:

- **Per-performer generation** — animate each character separately, then composite side by side in editing. Identity drift per clip is lower because each render carries one face.
- **Motion transfer instead of scene invention** — the model animates the reference rather than imagining a stage, which removes a whole class of [scene-wandering failures](/prompts/ai-rap-video-camera-and-stage-prompt/).
- **The stage becomes your job** — booth, mic, and light must be described (or provided) around the animated character. The [stage & camera vocabulary](/prompts/ai-rap-video-camera-and-stage-prompt/) covers the wording.

## Subject-first prompting, in practice

Wan-family wording leads with who, then what:

> "The performer from the reference image nods on the beat and delivers their line with clear mouth movement, confident posture, shoulder leaning toward the mic. Booth stage, warm key light, locked medium shot."

Compare that to the scene-first Seedance ordering in our [porting guide](/prompts/ai-rap-video-wan-vs-seedance-prompts/) — same clip, different information priority. Pasting scene-first text into a Wan-style engine (or the reverse) is the most common cross-engine mistake, and the guide's checklist exists to catch it.

## The trade-offs to price in

| Animate-style strengths | Costs to plan for |
|---|---|
| Stronger per-face identity hold | Compositing is manual |
| Motion follows the reference's energy | Two references with mismatched energy clash on the cut |
| Stage is fully under your control | Stage must be fully under your control |

That last row is not a joke — the format's grammar (fixed sides, mic anchor, one key light) has to come from somewhere, and in an Animate pipeline it comes from your [prompt](/prompts/ai-rap-video-camera-and-stage-prompt/) and your edit, not the engine's scene model.

## Frequently Asked Questions

### Is Wan 2.2 Animate free?

Wan-family models are open-weight — you can run them locally or on free compute (see the [beginner image-to-video path](/examples/wan-2-2-image-to-video-beginners/)). Your costs are compute and patience, not credits.

### Which template pairs with Animate?

The [duo prompt](/prompts/ai-rap-video-duo-prompt/) for structure, the [stage & camera vocabulary](/prompts/ai-rap-video-camera-and-stage-prompt/) for the surrounding scene, and the [porting guide](/prompts/ai-rap-video-wan-vs-seedance-prompts/) to reorder the wording subject-first.
