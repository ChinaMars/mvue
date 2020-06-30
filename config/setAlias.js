const path = require('path')
const resolve = dir => {
  return path.join(__dirname, '../', dir)
}

const setAlias = {
  '@': resolve('examples'),
  '@src': resolve('src'),
  '@pkg': resolve('packages')
}

module.exports = (config) => {
  Object.keys(setAlias).forEach((key) => {
    config.resolve.alias.set(key, setAlias[key])
  })
}
