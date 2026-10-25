---
videoId: MWurz-UUCH0
title: "Hotel Lobby AI Trend With Seedance: The Kapwing Tutorial, Annotated"
description: "What the Kapwing Hotel Lobby Seedance tutorial teaches — prompts on screen, Seedance-style wording, and how to port the workflow to open templates."
date: 2026-10-25
uploadDate: 2026-09-29
---

Kapwing's **Hotel Lobby tutorial built with Seedance** is the most useful kind of trend walkthrough: the prompts are shown on screen, which turns a seven-minute video into a writing workshop. This page embeds it and annotates the parts that matter for our template system — what to copy, what to reword for an open workflow, and where the [Wan vs Seedance porting rules](/prompts/ai-rap-video-wan-vs-seedance-prompts/) apply.

## What this video covers

A tool tutorial with on-screen prompts at this length usually shows: the two-photo upload flow, the full prompt text being pasted, render settings, and a review of the output with fixes. Pause on every prompt frame — that is the entire value. You are not learning Kapwing; you are reading Seedance-style prompt architecture written by a team that ships templates for a living.

## Three things worth stealing from a prompts-on-screen tutorial

1. **The stage block comes first.** Notice how much of the prompt describes light and environment before anyone sings. That ordering is the [scene-first style](/prompts/ai-rap-video-wan-vs-seedance-prompts/) Seedance engines reward.
2. **Sides are named, never implied.** "Left performer" and "right performer" as literal tokens, mapped to upload slots. Identical to our [duo prompt](/prompts/ai-rap-video-duo-prompt/)'s assignment block — this is convergent evolution, and it means the convention is right.
3. **The negative block is separate.** Identity swap, extra people, text artifacts. Whatever the tool's field is called, the content matches our [negative prompt library](/prompts/ai-rap-video-negative-prompt-guide/) almost line for line.

## What to change when you run it open-source-style

The tutorial's pipeline binds you to one tool's template and, typically, the trend's audio. To run the same render under your own control:

- Keep the scene-first wording but write your own stage block from the [camera & stage vocabulary](/prompts/ai-rap-video-camera-and-stage-prompt/) — one key light, hanging mic, locked two-shot.
- Swap the protected track for [original bars](/prompts/ai-rap-video-original-lyrics-prompt/). Same visual grammar, zero claim risk — the full reasoning lives in our [compliance guide](/ai-rap-video-vs-hotel-lobby-trend/).
- Keep renders in the 8-12 second window so the clip loops cleanly for TikTok and Shorts; the [vertical template](/prompts/ai-rap-video-vertical-tiktok-prompt/) has the framing rules.

## How to compare tutorials like this one

We feature more than one Hotel Lobby walkthrough ([here](/examples/hotel-lobby-any-two-people/) and [here](/examples/hotel-lobby-tutorial-vosu/) are two others). The differences between them are almost never the model — they are staging choices and negative blocks. Compare the prompt frames across tutorials and you will learn prompt architecture faster than from any single one.

## Frequently Asked Questions

### Do I need a Kapwing account to follow along?

No. Treat the video as a prompt-writing lecture. Every technique it demonstrates works in any Seedance-style or Wan-style tool you already use, with our templates as the text.

### Why do tutorial prompts and wiki prompts look so similar?

Because the format forces the same solutions: fixed sides, one light, a hanging mic anchor. When independent teams converge on the same wording, you can trust the convention — our templates just make it editable and obligation-free.
