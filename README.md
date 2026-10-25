# AI Rap Video Wiki

Open-source **AI Rap Video** prompt templates (English SEO site).

- Live: https://ai-rap-video.wiki
- Stack: Astro static + Cloudflare Pages friendly
- Not a paid video generator

## Structure

- `src/data/prompts.ts` — single source of truth for the 12 templates
- `src/pages/prompts/` — one deep page per template
- `pack/` — the same 12 templates as plain markdown (MIT); keep in sync with the site pages

See [AGENTS.md](AGENTS.md) for the full project map and conventions (in Chinese).

## Quick start

```bash
pnpm install
pnpm dev
```

## Compliance
Original lyrics & staging only. Do not commercially bind protected tracks or celebrity likenesses.

## License
MIT
