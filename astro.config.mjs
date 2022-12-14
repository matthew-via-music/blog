import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.matthew-via-music.com',
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
