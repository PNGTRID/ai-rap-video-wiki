# ai-rap-video.wiki — 项目地图（L1）

## 定位

AI Rap Video 开源提示词模板站（英文 SEO 站）。提供可复制的图片生视频说唱 MV 提示词，**不是**付费出片工具：无渲染、无上传、无付费墙。

## 技术栈

- Astro（静态输出）+ Tailwind 风格内联 CSS（`src/styles/global.css`，暗色主题：`--bg:#0b0d12`、`--accent:#ff7a1a`）；图片管线 astro:assets + sharp（构建优化为 webp）
- 包管理 pnpm；部署 Cloudflare Pages，线上 `https://ai-rap-video.wiki`

## 目录地图

| 路径 | 职责 |
|---|---|
| `src/data/prompts.ts` | 12 条模板的唯一数据源（slug/title/summary/description/related） |
| `src/data/videos.ts` | 视频示例唯一数据源（id/slug/kind/topics→模板页映射；新增视频先用 yt-dlp 验证） |
| `src/content/video-notes/*.md` | 每条视频的文章页正文（游戏站 wiki 模式）；frontmatter videoId 对应 videos.ts |
| `src/pages/examples/[slug].astro` | 视频文章页动态路由（/examples/{slug}/），合并 md 正文与 videos.ts 元数据 |
| `src/layouts/BaseLayout.astro` | 全站 HTML 壳：SEO 头部（含 og:image）、导航、页脚 |
| `src/components/JsonLd.astro` | 页面级 JSON-LD 注入 |
| `src/components/RelatedPrompts.astro` | 模板页末尾的相关模板内链区块 |
| `src/components/VideoFacade.astro` | YouTube 懒加载播放卡（点击才注入 youtube-nocookie iframe） |
| `src/components/VideoGallery.astro` | "看真实示例"统一区块（无视频时渲染 null） |
| `src/pages/index.astro` | 首页（死磕主词 AI Rap Video + FAQ + 视频精选） |
| `src/pages/prompts/*.astro` | 12 条深模板页，slug 与 `prompts.ts` 一一对应 |
| `src/pages/how-to-make-ai-rap-video.astro` | How-to 长文 |
| `src/pages/ai-rap-video-vs-hotel-lobby-trend.astro` | 合规对比页 |
| `src/pages/examples.astro` | 视频示例画廊（按类别分组 + 归属声明） |
| `src/pages/pack.astro` | 开源 pack 说明页 |
| `src/assets/` | 页面配图素材（AI 生成参考图，经 astro:assets 构建优化为 webp） |
| `public/images/` | 固定路径资产（`og-ai-rap-video.jpg` 等 OG/分享图，路径不参与构建优化） |
| `reports/` | 运营日报与周报、调研产物（每天早 9 点自动化生成日报，周一另出周报；内部文档，gitignore 不入库，不参与构建） |
| `pack/*.md` | 与站内 12 条模板同步的 markdown pack（MIT） |

## 项目约定

- **视觉规范**：设计 tokens 全部收在 `src/styles/global.css` 顶部注释块——品牌橙 `--brand #FF7A1A`（CTA/播放键/编号）、近黑蓝底 `--bg #05080F`、卡片 `--panel #0E1626`、浮层 `--panel-2 #14203A`；圆角大卡 18px/小件 12px。改色只改 tokens 变量，禁止在页面里散落写死色值。
- **内容同步**：改站内模板页必须同步 `pack/` 对应 .md，反之亦然（两处同源）。
- **模板页最低深度**：场景说明 → 可复制主 prompt → 镜头/节拍拆解 → 负面提示 → 照片准备 → 常见翻车 → 合规备注 → 相关内链。禁止只贴一段 prompt。
- **SEO**：首页 title/H1 死磕 `AI Rap Video`；每页 description 155-165 字符；canonical 必填。
- **统计与站长工具**：GA4、GSC 验证与 pvuv.ai 统计均由 BaseLayout 条件注入，环境变量驱动（见 `.env.example`）：`PUBLIC_GA4_ID`（仅生产构建）、`PUBLIC_GSC_VERIFICATION`、`PUBLIC_PVUV_SITE_ID`（仅生产构建）。未配置即零输出；正式值配在 Cloudflare Pages 环境变量里。
- **合规红线**：只用原创歌词与原创舞台描述；不绑定 Hotel Lobby 原曲与名人脸；不出现品牌 logo。
- **禁操作**：不主动 git commit/push、不改生产 DNS、不做付费操作（用户未授权）。
