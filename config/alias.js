const path = require('path')
const resolve = dir => {
  return path.join(__dirname, '../', dir)
}

module.exports = {
  '@': resolve('examples'),
  '@src': resolve('src'),
  '@pkg': resolve('packages')
}
