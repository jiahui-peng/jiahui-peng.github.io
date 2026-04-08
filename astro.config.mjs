import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jiahui-peng.github.io',
  integrations: [tailwind()],
});
