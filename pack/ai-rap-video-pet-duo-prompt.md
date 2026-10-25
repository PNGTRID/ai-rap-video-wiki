# Pet Duo AI Rap Video Prompt

Intent: pets · experimental
Wiki: https://ai-rap-video.wiki/prompts/ai-rap-video-pet-duo-prompt/

## When to use

Your dog or cat on the booth stage next to you (pet + owner, recommended) or opposite another pet (pet + pet, chaos mode). Expect charm, not polish.

## Honest quality caveats

- Human lip-sync is the only reliable sync; pets don't rap convincingly — the nodding-along bit is the joke.
- Paws are the weak point: the mic lives on a floor stand BETWEEN performers, never in a paw.
- Shorter is safer: 6-8 seconds beats 12 for animal anatomy stability.
- Complex coat patterns (brindle, tabby) may drift; flatter coats hold best.

## Main prompt

```text
Create an AI rap video duo performance: a person and their pet performing together on stage.
Left performer = photo 1 (the owner, human). Right performer = photo 2 (the pet).
Keep the owner's face recognizable and the pet's breed, coat pattern, and markings exactly as in the reference, for the whole clip.
Stage: original booth-style set, warm orange key light, one vintage-style microphone on a floor stand centered BETWEEN the performers — the microphone is never held by the pet.
Action: the owner delivers short bars with clear mouth movement and rhythmic head nods; the pet bobs its head on the beat beside them, ears perked, mouth closed or gently open — the pet does not speak or form words.
Camera: locked medium two-shot framing both performers from the waist up (owner) and full head (pet), subtle push-in at the end.
Audio: original upbeat rap cadence performed by the owner; a simple bass-heavy beat underneath — write NEW original lyrics; never quote commercial songs.
Duration: 6-8 seconds, ending on a clean two-shot hold.
```

## Beat & camera notes

1. 0-2s — establish the odd couple; the height difference is the gag, let framing carry it.
2. 2-5s — owner performs, pet bobs on beat (the reliable 80%).
3. 5-6s — one peak pet-moment beat (ears up, one exaggerated nod). Don't script more.
4. 6-8s — clean hold, loop point.

## Negative prompt

```text
pet holding the microphone, extra paws, extra toes, deformed limbs, fused legs, pet mouth forming words, human teeth on the pet, changed coat color, altered breed features, extra animals, third person, blurry faces, on-screen lyrics or captions, watermarks, brand logos, celebrity lookalike, NSFW, scene changes
```

## Photo prep

Pet photo at eye level, full head, even light, coat pattern readable; owner photo per the standard checklist; calm expressions both sides (no mid-yawn or mid-bark frames).

## Render steps (any model)

1. Owner photo in slot 1 (left), pet photo in slot 2.
2. Paste prompt; paw and "pet doesn't speak" negatives are load-bearing.
3. Render 6-8s; audit paws first, coat second, owner's sync third.
4. Two failed renders in a row → drop the pet-moment beat, run plain nod-along.

## Failure modes

- Pet grips the mic → restore the "floor stand between performers" clause.
- Breed features drift → re-crop the pet photo eye-level and brighter.
- Pet "raps" with a human mouth → reinforce "mouth closed or gently open" + the human-teeth negative.

## Compliance

Original staging and lyrics only; render only your own pets. Do not commercially bind protected recordings or celebrity likenesses; don't anthropomorphize other people's pets without their sign-off.

MIT License · https://ai-rap-video.wiki
