import { defineConfig, type SiteConfig } from 'vitepress';
import { buildRSSFeed } from './buildRSSFeed.ts';

import { promises as fs } from "fs";
import * as path from "path";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Snack",
  description: "Python based GIS ",
  ignoreDeadLinks: [
    /^https?:\/\/localhost:8000/, // links in data hub docs
    '/feed.rss',
  ],

  head: [
    ['link', { rel: 'alternate', type: "application/rss+xml", title: "Data Snack News", href: "https://datasnack.org/feed.rss" }],
    ['script', { src: 'https://stats.datasnack.org/script.js', 'data-website-id': '628fa88f-9ae8-4491-a0b5-ee986bde7465', defer: '' }],
    ['link', { rel: 'icon', href: '/datasnack-logo.svg', type: "image/svg+xml" }],
    ['link', { rel: 'icon', href: '/datasnack-logo.png', type: "image/png" }],
    ['meta', { property: 'og:image', content: '/Data-Snack-bits.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }]
  ],

  themeConfig: {

    logo: {
      light: '/datasnack-logo.black.svg',
      // even if the logo contains prefer-color-scheme styling, webkit doesn't support
      // this inside SVGs in all cases: https://bugs.webkit.org/show_bug.cgi?id=199134
      dark: '/datasnack-logo.white.svg'
    },

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news', activeMatch: '/news/?' },
      { text: 'Our work', link: '/our-work' },
      { text: 'Data Hub guide', link: '/guide/', activeMatch: '/guide/?' }
    ],

    sidebar: {
      'guide': [{
        text: 'Data Hub Introduction',
        items: [
          { text: 'About', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Interface', link: '/guide/interface' },
          { text: 'Usage', link: '/guide/usage' }
        ]
      }, {
        text: 'Documentation',
        items: [
          { text: 'Data Hub', link: '/guide/docs/datahub' },
          { text: 'Shape', link: '/guide/docs/shape' },
          { text: 'Data Layer', link: '/guide/docs/datalayer' },
          { text: 'CLI', link: '/guide/docs/cli' },
          { text: 'API', link: '/guide/docs/api' },
          { text: 'Docs pages', link: '/guide/docs/docs' },
          { text: 'Development', link: '/guide/docs/development' },
          { text: 'Technology', link: '/guide/docs/technology' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datasnack/datahub' }
    ],

    footer: {
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Data Snack'
    }
  },
  buildEnd: async function buildEnd(config: SiteConfig) {
    buildRSSFeed(config);

    // Get each article (markdown with frontmatter data)
    const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif"]);
    const DEST_DIR = path.resolve(".vitepress/dist/news");
    const dir = path.resolve("news");

    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const ext = path.extname(entry.name).toLowerCase();

      if (!IMAGE_EXTENSIONS.has(ext)) continue;

      const destPath = path.join(DEST_DIR, entry.name);

      // If flat output causes name collisions, last one wins
      await fs.copyFile(fullPath, destPath);
    }
  },
})
