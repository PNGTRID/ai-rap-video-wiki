/**
 * [WHY]: Astro 5 内容集合定义——video-notes 集合承载每条视频的文章页（游戏站 wiki 模式）。
 * [INPUT]: src/content/video-notes/*.md 的 frontmatter（videoId 与 videos.ts 的 id 对应）。
 * [OUTPUT]: collections.videoNotes，供 examples/[slug].astro 生成静态文章页。
 * [BOUND]: 只定义 schema，不做渲染；slug 即文件名（不含 .md）。
 * [PROTOCOL]: 改 frontmatter 字段时同步 [slug].astro 与本 schema。
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videoNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/video-notes' }),
  schema: z.object({
    /** 对应 videos.ts 的 id，模板据此合并 channel/duration/topics。 */
    videoId: z.string(),
    /** 文章 H1。 */
    title: z.string(),
    /** meta description（140-160 字符）。 */
    description: z.string(),
    /** 文章发布日。 */
    date: z.coerce.date(),
    /** 原视频在 YouTube 的上传日（VideoObject JSON-LD 必填；YAML 日期会被解析为 Date）。 */
    uploadDate: z.coerce.date()
  })
});

export const collections = { videoNotes };
