import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Hub",
  description: "Python based GIS ",
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: {
      'guide': [{
        text: 'Introduction',
        items: [
          { text: 'About', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Interface', link: '/guide/interface'},
          { text: 'Usage', link: '/guide/usage'}
        ]
      }, {
        text: 'Documentation',
        items: [
          { text: 'Data Hub', link: '/guide/docs/datahub' },
          { text: 'Shape', link: '/guide/docs/shape' },
          { text: 'Data Layer', link: '/guide/docs/datalayer' },
          { text: 'CLI', link: '/guide/docs/cli' },
          { text: 'API', link: '/guide/docs/api' },
          { text: 'Technology', link: '/guide/docs/technology' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datasnack/datahub' }
    ],

    footer: {
      copyright: 'Copyright © 2024'
    }

  }
})
