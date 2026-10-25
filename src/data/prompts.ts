export type PromptItem = {
  slug: string;
  title: string;
  intent: string;
  /** Short card copy used in grids. */
  summary: string;
  /** Long-form meta description (155-165 chars) used as the page <meta name="description">. */
  description: string;
  /** Curated internal links shown in the "Related templates" section. */
  related: string[];
};

export const prompts: PromptItem[] = [
  {
    slug: "ai-rap-video-duo-prompt",
    title: "AI Rap Video Duo Prompt (Two Photos)",
    intent: "core duo",
    summary: "Build a two-person AI rap video from two separate portraits.",
    description: "The core AI rap video duo prompt: turn two separate portraits into a left/right performance clip with fixed sides, traded bars, and a clean 8-12s loop.",
    related: ["ai-rap-video-self-duo-two-outfits", "ai-rap-video-couple-prompt", "ai-rap-video-best-friends-duo", "ai-rap-video-troubleshooting-faces"]
  },
  {
    slug: "ai-rap-video-vertical-tiktok-prompt",
    title: "Vertical AI Rap Video Prompt for TikTok",
    intent: "9:16 social",
    summary: "Force a vertical 9:16 AI rap video framing for TikTok, Reels, and Shorts.",
    description: "Make a vertical 9:16 AI rap video for TikTok, Reels, and Shorts: hook-first framing, safe-area heads, loop-ready endings, and social-specific negative prompts.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-best-friends-duo", "ai-rap-video-negative-prompt-guide", "ai-rap-video-camera-and-stage-prompt"]
  },
  {
    slug: "ai-rap-video-photo-prep-checklist",
    title: "AI Rap Video Photo Prep Checklist",
    intent: "prep",
    summary: "Choose and crop photos so faces stay recognizable in an AI rap video.",
    description: "Photo prep decides whether an AI rap video keeps faces recognizable. Use this checklist for resolution, cropping, lighting, glasses, backgrounds, and permissions.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-self-duo-two-outfits", "ai-rap-video-pet-duo-prompt", "ai-rap-video-troubleshooting-faces"]
  },
  {
    slug: "ai-rap-video-camera-and-stage-prompt",
    title: "Stage & Camera Prompt for AI Rap Video",
    intent: "staging",
    summary: "Control booth stage, mic, and camera language without naming protected tracks.",
    description: "A staging vocabulary for AI rap video prompts: booth and neon stages, hanging mics, push-ins, orbits, and whip pans — original descriptions with no protected track names.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-vertical-tiktok-prompt", "ai-rap-video-wan-vs-seedance-prompts", "ai-rap-video-negative-prompt-guide"]
  },
  {
    slug: "ai-rap-video-original-lyrics-prompt",
    title: "Original Lyrics Prompt for AI Rap Video",
    intent: "lyrics",
    summary: "Generate original short bars for an AI rap video without using commercial song lyrics.",
    description: "Write original bars for an AI rap video: a 4-line hook, an 8-bar verse, call-and-response roles, and a lyric-generation prompt that never quotes commercial songs.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-camera-and-stage-prompt", "ai-rap-video-couple-prompt", "ai-rap-video-best-friends-duo"]
  },
  {
    slug: "ai-rap-video-best-friends-duo",
    title: "Best-Friends AI Rap Video Prompt",
    intent: "friends",
    summary: "A friendly hype duo vibe for group chats and reunion posts.",
    description: "A best-friends AI rap video prompt: matching jackets, high-five choreography, and hype energy for reunion posts, birthdays, and group-chat wins.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-couple-prompt", "ai-rap-video-vertical-tiktok-prompt", "ai-rap-video-original-lyrics-prompt"]
  },
  {
    slug: "ai-rap-video-couple-prompt",
    title: "Couple AI Rap Video Prompt",
    intent: "couple",
    summary: "A warm couple performance framing with clear left/right roles.",
    description: "A couple AI rap video prompt for anniversaries and date nights: warm key light, traded verses, a shared hook moment, and gentle choreography that stays recognizable.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-self-duo-two-outfits", "ai-rap-video-best-friends-duo", "ai-rap-video-original-lyrics-prompt"]
  },
  {
    slug: "ai-rap-video-self-duo-two-outfits",
    title: "Self-Duo AI Rap Video (Two Outfits)",
    intent: "self-duo",
    summary: "Use two outfits of the same person as left and right performers.",
    description: "Make a self-duo AI rap video from two outfits of the same person: contrast rules that keep the two performers distinct and stop identity merging mid-clip.",
    related: ["ai-rap-video-duo-prompt", "ai-rap-video-photo-prep-checklist", "ai-rap-video-troubleshooting-faces", "ai-rap-video-couple-prompt"]
  },
  {
    slug: "ai-rap-video-pet-duo-prompt",
    title: "Pet Duo AI Rap Video Prompt",
    intent: "pets",
    summary: "Experimental pet or pet-and-owner pairing with honest quality caveats.",
    description: "A pet AI rap video prompt with honest caveats: paw anatomy, mic grip fixes, shorter clips, and the extra negative prompts pets need to avoid chaos renders.",
    related: ["ai-rap-video-photo-prep-checklist", "ai-rap-video-duo-prompt", "ai-rap-video-troubleshooting-faces", "ai-rap-video-negative-prompt-guide"]
  },
  {
    slug: "ai-rap-video-negative-prompt-guide",
    title: "Negative Prompts for Cleaner AI Rap Video",
    intent: "negative",
    summary: "Reduce face swaps, blur, NSFW, and text artifacts in AI rap video renders.",
    description: "A category-organized negative prompt library for AI rap video renders: identity, anatomy, artifacts, branding, and safety terms, plus where each field actually goes.",
    related: ["ai-rap-video-troubleshooting-faces", "ai-rap-video-duo-prompt", "ai-rap-video-wan-vs-seedance-prompts", "ai-rap-video-vertical-tiktok-prompt"]
  },
  {
    slug: "ai-rap-video-wan-vs-seedance-prompts",
    title: "Wan vs Seedance Prompts for AI Rap Video",
    intent: "models",
    summary: "How prompt wording shifts between Wan-style and Seedance-style workflows.",
    description: "Wan-style vs Seedance-style AI rap video prompts: subject-first vs scene-first wording, reference image handling, duration defaults, and how to port one prompt between them.",
    related: ["ai-rap-video-camera-and-stage-prompt", "ai-rap-video-negative-prompt-guide", "ai-rap-video-duo-prompt", "ai-rap-video-troubleshooting-faces"]
  },
  {
    slug: "ai-rap-video-troubleshooting-faces",
    title: "Fix Face Mix-ups in AI Rap Video",
    intent: "troubleshoot",
    summary: "Diagnose and fix left/right identity drift after an AI rap video render.",
    description: "Fix face mix-ups in an AI rap video: a symptom-to-fix table for side swaps, soft identity, third faces, and morphing, plus a re-render checklist that stops repeat failures.",
    related: ["ai-rap-video-photo-prep-checklist", "ai-rap-video-duo-prompt", "ai-rap-video-negative-prompt-guide", "ai-rap-video-self-duo-two-outfits"]
  }
];

export const bySlug = (slug: string) => prompts.find((p) => p.slug === slug);
