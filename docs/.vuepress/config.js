const setAlias = require('../../config/setAlias')

module.exports = {
  title: 'Mvue',
  description: 'Mvue，基于 Vue 2.0 Cli3 的桌面端组件库',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x28", href: "/assets/favicons/favicon-32x28.png"}],
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: 'Last Updated',
    nav: [
      {text: '指南', link: '/guide/'},
      {text: 'Github', link: 'https://github.com/ChinaMars/mvue'},
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/install',
          '/guide/use'
        ]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          '/components/button',
          '/components/dialog',
          '/components/icon',
          '/components/input',
          '/components/scrollbar',
          '/components/select',
          '/components/checkbox',
          '/components/toast',
          '/components/drawer',
          '/components/collapse'
        ]
      }
    ]
  },
  chainWebpack: config => {
    setAlias(config)
  }
}
