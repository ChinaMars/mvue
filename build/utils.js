const path = require('path')
const fs = require('fs')

const getAssetsPath = (outputPath = '', _path = '.') => {
  return path.posix.join(outputPath, _path)
}

const fsExistsSync = (_path, mode = fs.constants.F_OK) => {
  try {
    fs.accessSync(_path, mode)
  } catch (e) {
    return false
  }
  return true
}

const moveFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err
  })
}

module.exports = {
  getAssetsPath,
  fsExistsSync,
  moveFile
}
