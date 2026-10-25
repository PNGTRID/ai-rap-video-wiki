---
videoId: 2hJsvDSPWYM
title: "Seedance 2.5 Realism Guide: Scene-First Prompting in Practice"
description: "What a full Seedance 2.5 realism walkthrough teaches AI rap video builders: scene-first wording, reference image discipline, and the settings that keep faces stable."
date: 2026-10-25
uploadDate: 2026-10-16
---

Dan Kieft's **Seedance 2.5 realism guide** is one of the most-watched walkthroughs of this engine for a reason: it treats realism as a prompt-writing discipline, not a settings lottery. For anyone building an **AI rap video**, the useful takeaway is not which buttons he presses — it is the scene-first way the prompts are written, and how that style differs from the subject-first wording that Wan-style workflows prefer. This page embeds the video and translates its approach into our template system.

## What this video covers

A full guide in this format walks through realistic generations end to end: how a scene description is structured, how reference images are attached, which duration and resolution choices keep quality high, and where renders typically fail. Expect to see complete prompt texts on screen — pausing on those and comparing their shape against our templates is the highest-value twenty minutes you can spend on this page.

## Scene-first vs subject-first wording

Seedance-style engines reward prompts that describe the **scene before the subject**: light, environment, camera, and then who is in it. Our [Wan vs Seedance porting guide](/prompts/ai-rap-video-wan-vs-seedance-prompts/) formalizes the difference:

- **Scene-first (Seedance-style):** "A dark studio booth washed in warm orange key light, a single hanging microphone at chest height, locked medium shot — two performers in fixed left and right positions trade bars."
- **Subject-first (Wan-style):** "Two performers from the attached references, left performer sings line one, right performer answers — booth stage, hanging mic, warm light."

Both describe the same clip. But porting a prompt between engines without reordering it is the most common reason a duo render goes soft or drifts — the guide's porting checklist exists precisely for this.

## How to apply it to an AI rap video

1. **Reorder, don't rewrite.** Take your [duo prompt](/prompts/ai-rap-video-duo-prompt/) and move stage and camera language ahead of the performers' actions.
2. **One reference per performer, in slot order.** Slot order maps to left/right — the same discipline our [photo prep checklist](/prompts/ai-rap-video-photo-prep-checklist/) enforces.
3. **Keep the negative block.** Identity swap, merged faces, on-screen text — the [negative prompt library](/prompts/ai-rap-video-negative-prompt-guide/) applies unchanged.
4. **Render 8-12 seconds.** Long enough for a traded bar, short enough that the model holds both faces.

## What to watch for when you replay it

- **How much of each prompt is environment.** If the majority of the words describe light, lens, and staging rather than actions, you are looking at scene-first writing.
- **Whether faces stay consistent across shots.** Realism walkthroughs live or die on identity stability — the exact failure our [face troubleshooting guide](/prompts/ai-rap-video-troubleshooting-faces/) exists to fix.
- **The resolution/duration trade-offs.** Whatever defaults the video recommends, our templates stay in the 8-12 second window that loops cleanly for TikTok and Shorts.

## Frequently Asked Questions

### Does this guide replace the Wan vs Seedance comparison?

No — it complements it. The video shows one engine's realism workflow in depth; our comparison page tells you what to change when you port the same AI rap video prompt to the other engine family.

### Is Seedance required for the templates here?

No. Every template on this wiki is tool-agnostic plain text. Scene-first wording simply gets better results on Seedance-style engines, and the porting guide converts it where needed.
