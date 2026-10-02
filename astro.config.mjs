// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://uuid-generate.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500'),
    }),
  ],
  redirects: {
    '/privacy': '/privacy-policy',
    '/terms': '/terms-and-conditions',
    '/contact': '/contact-us',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});