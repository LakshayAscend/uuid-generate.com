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
      serialize(item) {
        if (item.url === 'https://uuid-generate.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          item.url.includes('/validate') ||
          item.url.includes('/bulk') ||
          item.url.includes('/decode')
        ) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about-us')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/contact-us')) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        }
        return item;
      },
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