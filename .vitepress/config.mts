import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Snack",
  description: "Python based GIS ",
  ignoreDeadLinks: 'localhostLinks',

  head: [
    ['script', { src: 'https://stats.datasnack.org/script.js', 'data-website-id': '628fa88f-9ae8-4491-a0b5-ee986bde7465', defer: '' }],
    ['link', { rel: 'icon', href: '/datasnack-logo.svg', type: "image/svg+xml" }],
    ['link', { rel: 'icon', href: '/datasnack-logo.png', type: "image/png" }]
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
      { text: 'Data Hub guide', link: '/guide/' },
      { text: 'Our work', link: '/our-work' }
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
      copyright: 'Copyright © 2024 Data Snack'
    }
  }
})
