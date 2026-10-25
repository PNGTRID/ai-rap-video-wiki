---
videoId: hVbNxUjpt7M
title: "Seedance Image-to-Video: Reference Image Handling That Works"
description: "How Seedance-style engines consume reference images — the handling habits this full guide demonstrates, and the slot discipline our duo prompts depend on."
date: 2026-10-25
uploadDate: 2026-04-11
---

Scene-first engines live and die by their reference images. This **full Seedance guide** from AI Automation Labs spends its runtime on the input side — which images survive the journey into a render, and how to feed them — which makes it the right companion to our prompt pages: the prompt says "photo 1 = left performer," and this is the video about making photo 1 worthy of the assignment. This page collects the handling rules that transfer directly to an AI rap video.

## What this video covers

A full guide at this length walks through image-to-video generation from the input outward: source image selection, resolution and cropping, multi-image inputs, prompt attachment, and rendered results compared against their references. The comparison frames are the gold — every before/after pair is a data point about what the engine preserves and what it invents.

## Reference handling rules that transfer to duo renders

1. **Resolution is identity resolution.** The face the engine keeps is the face it can see. Small, dark, or cropped-away faces drift first — the [photo prep checklist](/prompts/ai-rap-video-photo-prep-checklist/) is effectively a reference-handling manual.
2. **One subject per reference.** Multi-image inputs work best when each image answers one question: who is performer one, who is performer two. A reference doing two jobs produces blended answers — the exact [merged-faces failure](/prompts/ai-rap-video-troubleshooting-faces/).
3. **Consistency across references.** Similar angle, similar lighting, similar distance. The engine harmonizes what it is given; mismatched references become mismatched performers on the stage.
4. **Slot order is part of the data.** Our prompts bind "photo 1 = left, photo 2 = right" — the binding is only as reliable as your upload discipline, per the [slot-order trick](/examples/two-photos-to-singing-video/).

## Scene-first engines amplify preparation

The Seedance-style trade: you write more scene, and the engine forgives less input. That is a good trade for rap clips — the [stage & camera vocabulary](/prompts/ai-rap-video-camera-and-stage-prompt/) writes the scene once, and every render inherits it. What the scene cannot fix is a weak reference; no wording rescues a face the model cannot resolve.

## The pre-render checklist this guide implies

- [ ] Each reference: one face, front-lit, eyes visible, recent
- [ ] Both references: matched angle and distance
- [ ] Outfits distinct enough to survive a warm orange stage wash
- [ ] Slot order decided and noted (who is left, who is right)
- [ ] Negative block pasted — identity swap, merged faces, third person
- [ ] Duration 8-12 seconds, ending on a hold

Every line maps to a page in this wiki; the [duo template](/prompts/ai-rap-video-duo-prompt/) is the checklist's home.

## Frequently Asked Questions

### Can I use AI-upscaled photos as references?

Carefully — upscaling can smooth away the texture that makes a face recognizable. Better to reshoot closer and brighter than to upscale, per the [prep checklist](/prompts/ai-rap-video-photo-prep-checklist/).

### Seedance or Wan for reference-heavy workflows?

Both handle references; they differ in wording order and scene handling — the [comparison page](/prompts/ai-rap-video-wan-vs-seedance-prompts/) breaks down when to port which way.
