const alias = require('./config/alias')
const setAlias = (config) => {
  Object.keys(alias).forEach((key) => {
    config.resolve.alias.set(key, alias[key])
  })
}

module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    setAlias(config)
    config.extensions = ['.js', '.vue', '.json']
  }
}
