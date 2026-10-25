---
videoId: 0fDTOMUFpQ8
title: "Two Photos to a Singing Video: How the Slot-Order Trick Works"
description: "The two-photo input flow behind every AI rap video — why slot order decides left and right, and how to prepare each photo for a stable duo render."
date: 2026-10-25
uploadDate: 2026-10-14
---

Every **AI rap video from two photos** runs on one small mechanical detail that tutorials mention in passing and first-timers discover the hard way: slot order is destiny. Photo 1 goes left, photo 2 goes right, and the prompt's left/right assignment follows the upload order. This three-minute tool walkthrough shows the two-photo flow end to end; this page explains the trick and the preparation that makes it stick.

## What this video covers

A short tool demo at this length shows the whole input stage: picking two portraits, dropping them into reference slots, pasting a prompt, and rendering a singing clip. Watch specifically for what happens when photos are swapped or low-quality — the output quality tracks the input quality almost one to one.

## Why slot order matters more than it sounds

An image-to-video model has no opinion about who is "left" — it binds each reference to a position in the scene, then holds it. Our [duo prompt](/prompts/ai-rap-video-duo-prompt/) states the binding explicitly ("Left performer = photo 1, right performer = photo 2") because when the prompt and the slots disagree, the render splits the difference and you get the [side-swap failure](/prompts/ai-rap-video-troubleshooting-faces/) — the most common duo bug there is.

The practical rules that fall out of this:

1. **Decide left/right before uploading**, based on which photo is stronger — the lead gets more close framing and mouth movement.
2. **Upload in that order, every time**, including re-renders. Changing slot order mid-project is how "fixed" clips regress.
3. **Say it in the prompt too.** Belt and suspenders: slot binding plus explicit wording.

## Photo prep for the two-slot flow

The two slots amplify whatever you give them, so the [photo prep checklist](/prompts/ai-rap-video-photo-prep-checklist/) applies with emphasis:

- **One face per photo.** A group crop split into two uploads is the classic identity-chaos input.
- **Similar angle and distance** so both performers read at the same scale on the stage.
- **Distinct outfits or colors** — two near-identical looks invite the model to blend identities mid-clip.
- **Front-lit, eyes visible** — the single warm key of the booth stage needs a clear face to light.

## From two slots to a posted clip

The render is the middle, not the end. After generation, review against the beat breakdown in the [duo template](/prompts/ai-rap-video-duo-prompt/) — establish, trade, land — and if either face drifts, apply the matching one-line fix from the [troubleshooting guide](/prompts/ai-rap-video-troubleshooting-faces/) rather than re-rolling blind. For a 9:16 posting target, the [vertical template](/prompts/ai-rap-video-vertical-tiktok-prompt/) adjusts framing before you render, not after.

## Frequently Asked Questions

### Can I use the same photo twice for a self-duo?

Not with one identical image — identical references invite a merged identity. Use two different outfits of the same person; the [self-duo template](/prompts/ai-rap-video-self-duo-two-outfits/) handles the contrast rules.

### Does slot order matter for solo videos?

Less — with one reference there is nothing to swap. But keep the habit: consistent slot order keeps your re-renders reproducible.
