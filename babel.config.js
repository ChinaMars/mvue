module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'mvue-ui',
        customStyleName: (name) => {
          return `mvue-ui/lib/theme/${name}.css`
        },
        customName: (name) => {
          return `mvue-ui/lib/${name}.common.js`
        }
      }
    ]
  ]
}
