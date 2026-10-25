import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ai-rap-video.wiki',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
