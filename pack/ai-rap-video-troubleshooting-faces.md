# Fix Face Mix-ups in AI Rap Video

Intent: troubleshoot
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-troubleshooting-faces/

## When to use

After a render comes back wrong. Don't rewrite the whole prompt — find the symptom, apply its one-change fix, re-render once.

## Symptom → cause → fix

| Symptom | Likely cause | Fix (one change) |
|---|---|---|
| Faces swap sides mid-clip | Left/right stated once, early, then lost; references too similar | Restate "fixed sides for the whole clip" late in the prompt; raise outfit contrast |
| One face goes soft or "melts" | That reference is low-res or small in frame | Re-crop that photo to ≥512px face, brighter. Never upscale |
| A third face appears briefly | Vague stage during a camera move | Lock the camera; add "no other people" + "dark backdrop, empty stage"; re-add movement one piece at a time |
| Faces fuse during a lean/embrace | Contact choreography blends identity regions | Shoulder-level and brief contact only, or none. Distance is the anti-fusion tool |
| Both performers rap every line | Call-and-response roles weren't labeled per line | Rewrite audio direction as a LEFT:/RIGHT: script, alternating |
| A face changed but stays plausible | Tool slot order didn't match "photo 1 = left" | Check upload order first — it overrides wording; swap slots |
| Whole pair morphs (self-duo) | Identical faces, insufficient outfit contrast | Max outfit color separation + hairstyle difference + visible gap |

## Layered-fix ladder (cheapest first)

1. **Slot order** — silently overrides wording in most tools.
2. **Photo quality** — resolution, lighting, crop; beats any wording change.
3. **One prompt clause** — add/reinforce the single sentence naming the failure.
4. **Negative terms** — add the matching blocklist term if missing.
5. **Choreography** — cut the riskiest gesture; simplify before escalating.
6. **Duration** — drop 12s → 8s; most morphing is late-clip decay.

Failure surviving all six layers = the request is at the model's edge (3+ faces, ambitious camera). Split into two renders and cut together.

## 60-second review checklist

- Left stays left, right stays right, first frame to last.
- Both faces sharp at the midpoint (common decay point).
- Exactly the number of people cast — no background cameos.
- Mouths move only on the rapping performer's lines.
- Wardrobe and sides match between first and last frame (loop integrity).

## Meta failure modes

- Fix-shuffling: one change, one render, one observation — or you never learn what worked.
- Prompt-blaming: most identity failures are input failures; the ladder starts at slots and photos.
- Escalating choreography while diagnosing: freeze the moves until faces are stable.

## Compliance

Diagnose only your own consented renders. Do not re-render, edit, or redistribute clips of people (or celebrities) who didn't agree to be in them.

MIT License · https://ai-rap-video.wiki
