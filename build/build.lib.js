const { sh } = require('tasksfile')
const fs = require('fs')
const rimraf = require('rimraf')
const chalk = require('chalk')
const ProgressBar = require('progress')
const { getAssetsPath, fsExistsSync, moveFile } = require('./utils')
const libList = require('../src/lib-list')
const { outputPath, styleOutputPath } = require('./config')
const pkgArray = []
const cssFiles = []

const build = function (data = {}, index, arr) {
  const { input, output } = data

  sh(`vue-cli-service build --target lib --no-clean --name ${output} --dest ${getAssetsPath(outputPath)} ${input}`)

  bar.tick()

  if (fsExistsSync(getAssetsPath(outputPath, `${output}.css`))) {
    cssFiles.push(`${output}.css`)
  }
}

Object.keys(libList).forEach((name) => {
  if (Object.prototype.hasOwnProperty.call(libList, name)) {
    pkgArray.push(libList[name])
  }
})

const bar = new ProgressBar('[:bar] :percent ', { total: pkgArray.length })

pkgArray.forEach(build)

if (bar.complete) {
  console.log(chalk.green('========================================='))
  console.log(chalk.green('========打包成功(build success)!========='))
  console.log(chalk.green('========================================='))
}

rimraf(getAssetsPath(outputPath, 'demo.html'), (err) => {
  console.log(err)
})

if (!fsExistsSync(getAssetsPath(outputPath, styleOutputPath))) {
  fs.mkdirSync(getAssetsPath(outputPath, styleOutputPath))
}

if (fsExistsSync(getAssetsPath(outputPath, `${styleOutputPath}/img`))) {
  rimraf(getAssetsPath(outputPath, `${styleOutputPath}/img`), (err) => {
    console.log(err)
  })
}

setTimeout(() => {
  moveFile(getAssetsPath(outputPath, 'img'), getAssetsPath(outputPath, `${styleOutputPath}/img`))
}, 50)

cssFiles.forEach((item) => {
  moveFile(getAssetsPath(outputPath, item), getAssetsPath(outputPath, `${styleOutputPath}/${item}`))
})
