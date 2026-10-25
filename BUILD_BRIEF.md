# ai-rap-video.wiki — ZCode 建站任务书

> ✅ **状态：已完成**（2026-10-25 站点已上线）。本文档留作当时的决策依据，现状以根目录 [AGENTS.md](AGENTS.md) 为准。

## 目标
一天内落地可预览的英文静态站（Astro + Cloudflare Pages 友好），定位：**提示词模板站 + 开源**，不是付费出片工具。

## 硬约束
- 首页必须死磕主词 **AI Rap Video**（title/H1/首屏）
- 合规：模板用**原创**歌词与舞台/镜头描述；**不商用绑定** Hotel Lobby 原曲与名人脸
- 不做：付费渲染、上传出片、账号付费墙
- **不要** git commit / push / 改生产 DNS / 付费操作（用户未授权）
- 技术：Astro（静态输出）+ Tailwind；pnpm；可参考同级目录 `../AnvilWiki` 的 SEO/sitemap/内容层思路，但**不要 fork 游戏 wiki 壳**，保持轻量独立站
- 语言：站点正文英文（美国区 SEO）；本 brief 与注释可用中文

## 信息架构（P0）
- `/` 首页
- `/prompts/` 模板索引
- `/prompts/[slug]/` 12 条深模板页
- `/how-to-make-ai-rap-video/` How-to
- `/ai-rap-video-vs-hotel-lobby-trend/` 对比/合规
- `/pack/` 开源 pack 说明
- `/sitemap.xml` `/robots.txt` `/llms.txt`

## 12 条模板 slug
1. ai-rap-video-duo-prompt
2. ai-rap-video-vertical-tiktok-prompt
3. ai-rap-video-photo-prep-checklist
4. ai-rap-video-camera-and-stage-prompt
5. ai-rap-video-original-lyrics-prompt
6. ai-rap-video-best-friends-duo
7. ai-rap-video-couple-prompt
8. ai-rap-video-self-duo-two-outfits
9. ai-rap-video-pet-duo-prompt
10. ai-rap-video-negative-prompt-guide
11. ai-rap-video-wan-vs-seedance-prompts
12. ai-rap-video-troubleshooting-faces

## 单条模板页最低深度
场景说明 → 适用工作流备注 → 可复制主 prompt → 镜头/节拍拆解 → 负面提示 → 照片准备 → 常见翻车 → 合规备注 → 相关内链。禁止只贴一段 prompt。

## pack/
在仓库 `pack/` 放与 12 条同步的 markdown prompt pack，README 说明 MIT、如何复制使用、合规声明。

## 完成标准
1. `pnpm install && pnpm build` 通过
2. `pnpm dev` 可预览；首页 H1 含 AI Rap Video
3. 12 模板页 + How-to + Compare + Pack 均有实质内容
4. sitemap 可用
5. 根目录 README.md（英文为主）写清站点链接占位 https://ai-rap-video.wiki、非出片工具、合规

## 参考（只读，勿改）
- ../AnvilWiki（Astro/CF/SEO 习惯）
- https://hotellobby.wiki https://minimaxh3.wiki https://genvidatlas.wiki（深度写法，我们不做生成器）
