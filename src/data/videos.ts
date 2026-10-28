/**
 * [WHY]: 全站视频示例数据层——把公网收集、逐一验证过的 YouTube 视频按主题挂到模板页与专题页。
 * [INPUT]: 每条视频的 id/title/channel/duration（yt-dlp 元数据实测）、note（为何相关）、topics（prompt slug + 伪 slug）。
 * [OUTPUT]: videosFor(slug) 供模板页取相关视频；videosFor('home') 供首页精选；/examples 页全量画廊。
 * [BOUND]: 只存元数据与热链，不下载不分发视频或缩略图；不收录绑定名人脸或受保护音源做卖点的视频。
 * [PROTOCOL]: 新增/下架视频先跑 yt-dlp 验证 id 仍有效，再更新本文件与 /examples 页计数。
 */

export type VideoKind = 'trend' | 'workflow' | 'models' | 'music' | 'pets' | 'realism';

export type VideoItem = {
  /** YouTube video id — verified live via yt-dlp metadata as of 2026-10-25. */
  id: string;
  /** Article slug: the note page lives at /examples/{slug}/ and matches src/content/video-notes/{slug}.md. */
  slug: string;
  title: string;
  channel: string;
  duration: string;
  kind: VideoKind;
  /** One-line English note: why this video is relevant here. */
  note: string;
  /** Prompt slugs plus pseudo-slugs: 'hotel-lobby-trend' | 'how-to' | 'home' | 'photo-to' | 'birthday' | 'suno-to'. */
  topics: string[];
};

export const videoKinds: { kind: VideoKind; label: string; blurb: string }[] = [
  { kind: 'trend', label: 'The trend, explained', blurb: 'Where the AI rap video format came from and why it took over feeds.' },
  { kind: 'workflow', label: 'Full workflow tutorials', blurb: 'End-to-end builds: photos in, finished duo clip out.' },
  { kind: 'models', label: 'Model deep dives', blurb: 'Wan-style and Seedance-style engines, compared on real renders.' },
  { kind: 'music', label: 'Music & lip sync', blurb: 'Generating original bars with Suno-class tools and syncing them to video.' },
  { kind: 'pets', label: 'Pet experiments', blurb: 'Singing animals — fun, chaotic, and exactly why the pet template has caveats.' },
  { kind: 'realism', label: 'Realism & clean faces', blurb: 'Keeping faces stable and recognizable — the core of our troubleshooting guide.' }
];

export const videos: VideoItem[] = [
  // ===== The trend, explained =====
  {
    id: 'x9yop0nYR9g',
    slug: 'hotel-lobby-colors-original',
    title: 'Quavo & Takeoff — HOTEL LOBBY | A COLORS SHOW',
    channel: 'COLORS',
    duration: '2:46',
    kind: 'trend',
    note: 'The original orange-booth performance every AI rap video template is visually quoting. Embedded from the official COLORS channel.',
    topics: ['hotel-lobby-trend', 'home']
  },
  {
    id: 'q7z3vYckdMY',
    slug: 'hotel-lobby-trend-explained',
    title: 'Hotel Lobby AI Meme Explained — Why the Trend Is Everywhere',
    channel: 'Memes ok',
    duration: '1:34',
    kind: 'trend',
    note: 'A 90-second history of how one COLORS performance became the default AI duo format.',
    topics: ['hotel-lobby-trend', 'home']
  },
  {
    id: '_FD2JgHzAHY',
    slug: 'how-ai-migos-videos-are-made',
    title: 'How Everyone Is Making Those Viral AI Migos Videos',
    channel: 'Cyber Daive',
    duration: '3:41',
    kind: 'trend',
    note: 'Breaks down the exact pipeline trend renders use — and where our open templates replace it.',
    topics: ['hotel-lobby-trend', 'how-to']
  },
  {
    id: 'jpO6XkrwuyY',
    slug: 'hotel-lobby-community-render',
    title: 'HOTEL LOBBY — community AI render',
    channel: 'Entertainment x',
    duration: '0:28',
    kind: 'trend',
    note: 'A finished community render in the booth format — useful as a visual reference for staging language.',
    topics: ['hotel-lobby-trend']
  },

  // ===== Full workflow tutorials =====
  {
    id: 'MWurz-UUCH0',
    slug: 'hotel-lobby-seedance-tutorial',
    title: 'How to Make the Viral Hotel Lobby AI Trend With Seedance (Full Tutorial + Prompts)',
    channel: 'Kapwing',
    duration: '7:21',
    kind: 'workflow',
    note: 'Seedance walkthrough with prompts on screen — pairs directly with our Seedance-style wording guide.',
    topics: ['hotel-lobby-trend', 'ai-rap-video-wan-vs-seedance-prompts', 'how-to', 'ai-rap-video-vertical-tiktok-prompt']
  },
  {
    id: 'ktfBBwdYtUs',
    slug: 'ai-rap-music-video-full-tutorial',
    title: 'How I Made This Rap Music Video With AI (Full Tutorial)',
    channel: 'Odera',
    duration: '17:26',
    kind: 'workflow',
    note: 'A complete solo build from concept to export — the long-form counterpart to our render steps.',
    topics: ['how-to', 'ai-rap-video-duo-prompt', 'home', 'photo-to', 'birthday']
  },
  {
    id: 'D1veGFH0Vb4',
    slug: 'free-ai-rap-video-tutorial',
    title: 'Create Viral AI Rap Music Videos for Free — Step-by-Step Tutorial',
    channel: 'WealthWise',
    duration: '11:30',
    kind: 'workflow',
    note: 'A no-budget pipeline end to end, matching our free-tools stance: your model, our templates.',
    topics: ['how-to', 'home', 'photo-to', 'birthday']
  },
  {
    id: '0fDTOMUFpQ8',
    slug: 'two-photos-to-singing-video',
    title: 'AI Rap Video Generator: Turn 2 Photos Into a Singing Video',
    channel: 'AI TOOL MASTERY',
    duration: '3:17',
    kind: 'workflow',
    note: 'The two-photo input flow in action — watch how slot order maps to left/right performers.',
    topics: ['ai-rap-video-duo-prompt', 'ai-rap-video-photo-prep-checklist', 'photo-to']
  },
  {
    id: '_xNjkvx-PdE',
    slug: 'ai-music-video-own-face',
    title: 'How to Create an AI Music Video With Your Own Face (Step-by-Step)',
    channel: 'MoneOnDaBeat',
    duration: '5:24',
    kind: 'workflow',
    note: 'Face-forward build that keeps identity stable — same goal as our photo prep and self-duo templates.',
    topics: ['ai-rap-video-photo-prep-checklist', 'ai-rap-video-self-duo-two-outfits', 'ai-rap-video-troubleshooting-faces', 'photo-to']
  },
  {
    id: 'Wh0yENtkc2w',
    slug: 'hotel-lobby-any-two-people',
    title: 'How to Make the Hotel Lobby AI Trend With Any 2 People (Free)',
    channel: 'Erick AI',
    duration: '3:34',
    kind: 'workflow',
    note: 'Two-person vertical renders for social — the trend cut down to a 9:16 clip.',
    topics: ['ai-rap-video-vertical-tiktok-prompt', 'ai-rap-video-couple-prompt', 'ai-rap-video-best-friends-duo', 'hotel-lobby-trend', 'birthday', 'photo-to']
  },
  {
    id: 'DchDUK1zP_k',
    slug: 'hotel-lobby-tutorial-vosu',
    title: 'How to Make the Viral Hotel Lobby AI Video (Full Tutorial)',
    channel: 'VosuAI',
    duration: '4:18',
    kind: 'workflow',
    note: 'Another full hotel-lobby build — compare its staging choices with our camera & stage vocabulary.',
    topics: ['hotel-lobby-trend', 'ai-rap-video-vertical-tiktok-prompt']
  },

  // ===== Model deep dives =====
  {
    id: '2hJsvDSPWYM',
    slug: 'seedance-2-5-realistic-videos',
    title: 'How I Make Realistic AI Videos With Seedance 2.5 — Full Guide',
    channel: 'Dan Kieft',
    duration: '20:27',
    kind: 'models',
    note: 'The most-watched Seedance walkthrough — scene-first wording in practice, exactly the style our porting guide describes.',
    topics: ['ai-rap-video-wan-vs-seedance-prompts', 'ai-rap-video-camera-and-stage-prompt', 'home']
  },
  {
    id: 'pIAkHLvoaLE',
    slug: 'wan-2-2-animate',
    title: 'Wan 2.2 Animate — Best AI Character Animation Yet',
    channel: 'Isa does AI',
    duration: '8:10',
    kind: 'models',
    note: 'Wan-style character animation from a reference image — the open-model side of our comparison.',
    topics: ['ai-rap-video-wan-vs-seedance-prompts', 'ai-rap-video-camera-and-stage-prompt']
  },
  {
    id: 'baz2OFKeqSw',
    slug: 'wan-2-2-image-to-video-beginners',
    title: 'Wan 2.2 Image-to-Video Tutorial for Beginners (Step by Step)',
    channel: 'How to Digital',
    duration: '8:10',
    kind: 'models',
    note: 'Beginner-safe Wan image-to-video flow — if this is your engine, start with the subject-first wording.',
    topics: ['ai-rap-video-wan-vs-seedance-prompts']
  },
  {
    id: 'hVbNxUjpt7M',
    slug: 'seedance-image-to-video',
    title: 'Seedance Tutorial — Make AI Videos From Your Own Images (Full Guide)',
    channel: 'AI Automation Labs',
    duration: '9:56',
    kind: 'models',
    note: 'Reference-image handling on the Seedance side — where the scene-first rewrite matters most.',
    topics: ['ai-rap-video-wan-vs-seedance-prompts']
  },

  // ===== Music & lip sync =====
  {
    id: 'Vf9KNuXE8ok',
    slug: 'suno-lip-sync-music-videos',
    title: 'Suno AI Music Videos With Lip Sync for Free',
    channel: 'MoneOnDaBeat',
    duration: '13:59',
    kind: 'music',
    note: 'Generating an original track and syncing it to video — the audio half of the original-lyrics template.',
    topics: ['ai-rap-video-original-lyrics-prompt', 'how-to', 'suno-to']
  },
  {
    id: 'FChKficdq5o',
    slug: 'suno-music-video-12-minutes',
    title: 'How to Make a Full AI Music Video for Suno AI Songs (in 12 Minutes)',
    channel: 'Roboverse',
    duration: '12:23',
    kind: 'music',
    note: 'Original song in, music video out — a fast repeatable loop for posting cadence.',
    topics: ['ai-rap-video-original-lyrics-prompt', 'suno-to']
  },

  // ===== Pet experiments =====
  {
    id: 'oF3SpTnQIlE',
    slug: 'ai-singing-pet-videos',
    title: 'How AI Makes Singing Pet Videos in Seconds',
    channel: 'Mewtix AI',
    duration: '4:46',
    kind: 'pets',
    note: 'Why singing pets render fast but chaotic — the exact caveats our pet template warns about.',
    topics: ['ai-rap-video-pet-duo-prompt']
  },
  {
    id: 'jK-C8D0xzGQ',
    slug: 'talking-animal-avatar-guide',
    title: 'How to Create Talking/Singing/Dancing Animal Avatars',
    channel: 'HitPaw Edimakor',
    duration: '2:45',
    kind: 'pets',
    note: 'Animal avatar tooling demo — useful for the pet-and-owner pairing experiment.',
    topics: ['ai-rap-video-pet-duo-prompt']
  },

  // ===== Realism & clean faces =====
  {
    id: 'Zo8KaTs0l6k',
    slug: 'ultra-realistic-seedance-faces',
    title: 'How I Make Ultra Realistic AI Videos Using Seedance 2.5',
    channel: 'Dan Kieft',
    duration: '22:42',
    kind: 'realism',
    note: 'Realism settings that reduce soft identity and morphing — the render-side fix list behind our troubleshooting table.',
    topics: ['ai-rap-video-troubleshooting-faces', 'ai-rap-video-negative-prompt-guide']
  }
];

/** Videos tagged for one topic (prompt slug or pseudo-slug), in curated order. */
export const videosFor = (topic: string): VideoItem[] => videos.filter((v) => v.topics.includes(topic));

/** Featured picks for the homepage, in display order. */
export const homeVideos = (): VideoItem[] => ['x9yop0nYR9g', '2hJsvDSPWYM', 'ktfBBwdYtUs', 'MWurz-UUCH0']
  .map((id) => videos.find((v) => v.id === id))
  .filter((v): v is VideoItem => !!v);
