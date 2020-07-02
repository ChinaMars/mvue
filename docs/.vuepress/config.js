const setAlias = require('../../config/setAlias')

module.exports = {
  title: 'Mvue Ui',
  description: 'Mvue，基于 Vue 2.0 Cli3 的桌面端组件库',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: '指南', link: '/guide/'},
      {text: 'Github', link: 'https://github.com/ChinaMars/mvue'},
    ],
    sidebar: [
      {
        title: "组件",
        collapsable: false,
        children: [
          '/components/button',
          '/components/dialog',
          '/components/icon',
          '/components/input',
          '/components/scrollbar'
        ]
      }
    ]
  },
  chainWebpack: config => {
    setAlias(config)
  }
}
