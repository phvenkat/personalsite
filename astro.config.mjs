import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://phanindragvenkata.com',
  integrations: [
    // Our own global.css already carries the @tailwind directives + tokens.
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
