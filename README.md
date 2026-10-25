# AI Rap Video Wiki

[![Live site](https://img.shields.io/website?url=https%3A%2F%2Fai-rap-video.wiki&label=live)](https://ai-rap-video.wiki)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Open-source prompt templates for making **AI rap videos** — music-video-style clips generated from your photos with image-to-video models like Wan 2.2, Seedance, Kling or Veo.

This is a free template library, **not** a paid video generator: no rendering, no uploads, no paywall.

**Live site:** [ai-rap-video.wiki](https://ai-rap-video.wiki)

![AI Rap Video — photo to stage](public/images/og-ai-rap-video.jpg)

## What's inside

- **12 deep prompt templates** — each with a copy-paste master prompt, shot & beat breakdown, negative prompts, a photo-prep checklist, common failure modes and compliance notes
- **Markdown pack** (`pack/`) — the same 12 templates as plain markdown, ready to paste into any tool (MIT)
- **How-to guide** — the full photo-to-video workflow, start to finish
- **Real examples** — walkthroughs of community renders with lazy-loaded YouTube embeds

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

PRs welcome. If you change a template, update both the site page and its `pack/*.md` twin — they are the same content in two formats.

## License

[MIT](LICENSE)
