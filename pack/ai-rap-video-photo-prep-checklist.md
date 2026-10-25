# AI Rap Video Photo Prep Checklist

Intent: prep
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-photo-prep-checklist/

## When to use

Before any render. Most AI rap video failures are photo failures — this checklist is the five minutes of prep that saves five re-renders.

## The checklist

1. Resolution: face region at least 512px wide.
2. Front-facing, eyes visible, no heavy shadow across them.
3. Even front light (window daylight beats party flash).
4. Plain or blurred background.
5. Upper body in frame (chest and shoulders) so wardrobe reads.
6. Glasses kept only without glare; sunglasses always out.
7. Similar face scale across all reference photos.
8. Exactly one face per photo — never split a group shot.
9. Recent and representative of the person.
10. Permission from every face in every photo.

## Prep verification prompt

```text
Audit these portrait photos for an AI rap video render. For each photo, answer strictly:
1. Is exactly one clear face visible? (yes/no)
2. Is the face front-facing with both eyes visible? (yes/no)
3. Is lighting even across the face with no harsh shadows? (yes/no)
4. Approximate face resolution in pixels (width of the face region).
5. Is the background plain or clearly separated from the subject? (yes/no)
6. Is the upper body (chest and shoulders) visible? (yes/no)
7. Any glare on glasses, heavy motion blur, or heavy compression artifacts? (list them)
Then give a verdict per photo: RENDER-READY or FIX FIRST, and for any FIX FIRST photo, name the single highest-impact fix.
Do not edit the images. Do not generate video. Audit only.
```

## Audit-to-fix mapping

- Low face resolution → re-crop tighter (never upscale).
- Harsh shadows → reshoot near a window.
- Two faces in frame → crop to one, or use the second as the other performer (with consent).
- Glare on glasses → reshoot with a slight head tilt, or plan a re-render.

## Failure modes

- Render looks nothing like the subject → resolution/angle; re-crop 512px+ front-facing.
- Performers at different perceived distances → re-crop both to the same face scale.
- Wardrobe keeps changing → face-only crop; widen to chest-up.

## Compliance

Prep photos only of people who consented to the video. Never prepare celebrity or public-figure photos for AI rap video renders.

MIT License · https://ai-rap-video.wiki
