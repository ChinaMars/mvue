const setAlias = require('./config/setAlias')

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
