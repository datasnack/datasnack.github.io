import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Snack",
  description: "Python based GIS ",
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Data Hub guide', link: '/guide/' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: {
      'guide': [{
        text: 'Data Hub',
        items: [
        ]
      }, {
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
          { text: 'Development', link: '/guide/docs/development' },
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
