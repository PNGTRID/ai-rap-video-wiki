# AI Rap Video Wiki

[![Live site](https://img.shields.io/website?url=https%3A%2F%2Fai-rap-video.wiki&label=live)](https://ai-rap-video.wiki)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Turn your photos into rap music-video clips with **battle-tested AI video prompts**. This repo is the source of the open prompt library at [ai-rap-video.wiki](https://ai-rap-video.wiki): 12 deep template pages, a plain-markdown pack, a full how-to guide, and walkthroughs of real community renders.

It is a free template library, **not** a paid video generator — no rendering, no uploads, no paywall, no sign-up.

![AI Rap Video — photo to stage](public/images/og-ai-rap-video.jpg)

## How it works

1. **Pick a template** from the [library](https://ai-rap-video.wiki/prompts/) — duo, couple, pet duo, vertical TikTok, and more
2. **Prep 1–2 photos** with the checklist (lighting, framing, outfit)
3. **Paste the master prompt** into your image-to-video tool — Wan 2.2, Seedance, Kling or Veo
4. **Generate**, then fine-tune with the negative prompts and the face-troubleshooting guide

Templates are tool-agnostic; each page notes which models it works best with.

## What's inside

- **[12 deep prompt templates](https://ai-rap-video.wiki/prompts/)** — copy-paste master prompt, shot & beat breakdown, negative prompts, photo-prep checklist, common failure modes, compliance notes
- **[Markdown pack](pack/)** — the same 12 templates as plain markdown, ready to paste anywhere (MIT)
- **[How-to guide](https://ai-rap-video.wiki/how-to-make-ai-rap-video/)** — the full photo-to-video workflow, start to finish
- **[Real examples](https://ai-rap-video.wiki/examples/)** — walkthroughs of community renders with lazy-loaded YouTube embeds

<details>
<summary><strong>All 12 templates</strong></summary>

| Template | Best for |
|---|---|
| [Duo prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-duo-prompt/) | Two people, one stage — the classic duo performance |
| [Vertical TikTok prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-vertical-tiktok-prompt/) | 9:16 cuts for Shorts, TikTok and Reels |
| [Photo prep checklist](https://ai-rap-video.wiki/prompts/ai-rap-video-photo-prep-checklist/) | Getting source photos right before you generate |
| [Camera & stage prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-camera-and-stage-prompt/) | Camera moves and stage-light language that hold up |
| [Original lyrics prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-original-lyrics-prompt/) | Writing safe, original bars for your clip |
| [Best friends duo](https://ai-rap-video.wiki/prompts/ai-rap-video-best-friends-duo/) | Two close friends trading verses |
| [Couple prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-couple-prompt/) | A two-person performance from couple photos |
| [Self duo, two outfits](https://ai-rap-video.wiki/prompts/ai-rap-video-self-duo-two-outfits/) | One person, two looks — perform with yourself |
| [Pet duo prompt](https://ai-rap-video.wiki/prompts/ai-rap-video-pet-duo-prompt/) | You and your pet on stage |
| [Negative prompt guide](https://ai-rap-video.wiki/prompts/ai-rap-video-negative-prompt-guide/) | What to exclude, and why |
| [Wan vs Seedance prompts](https://ai-rap-video.wiki/prompts/ai-rap-video-wan-vs-seedance-prompts/) | Which model fits which template |
| [Troubleshooting faces](https://ai-rap-video.wiki/prompts/ai-rap-video-troubleshooting-faces/) | Fixing warped or drifting faces |

</details>

## Quick start

```bash
pnpm install
pnpm dev      # dev server at http://localhost:4321
pnpm build    # static output in dist/
```

Requires Node 22+.

## Configuration (optional)

Analytics and Search Console verification are environment-driven — with nothing set, the site builds with **zero** third-party scripts:

| Variable | Purpose |
|---|---|
| `PUBLIC_GA4_ID` | GA4 Measurement ID (`G-XXXXXXXXXX`); injected in production builds only |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag verification token |

Copy `.env.example` to `.env` and fill in what you need. Both values are conditionally rendered in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).

## Deploy

Any static host works. For Cloudflare Pages: build command `pnpm build`, output directory `dist`, Node 22+. A `public/_redirects` file and `@astrojs/sitemap` are preconfigured.

## Project structure

| Path | Purpose |
|---|---|
| `src/data/prompts.ts` | Single source of truth for the 12 templates |
| `src/pages/prompts/*.astro` | One deep page per template |
| `pack/*.md` | The same 12 templates as markdown — keep in sync with the site pages |
| `src/data/videos.ts` + `src/content/video-notes/` | Real-example gallery and article pages |
| `src/layouts/BaseLayout.astro` | Site shell: SEO head, nav/footer, conditional analytics |
| `src/styles/global.css` | Design tokens (dark theme, brand orange) |

See [AGENTS.md](AGENTS.md) for the full project map and conventions (in Chinese).

## Content policy

Original lyrics and staging descriptions only. Templates never bind the Hotel Lobby trend's original track or celebrity likenesses, and no brand logos appear anywhere.

## Contributing

PRs welcome — new templates, translations, and copy fixes alike. If you change a template, update both the site page (`src/pages/prompts/`) and its `pack/*.md` twin: same content, two formats.

## License

[MIT](LICENSE)
