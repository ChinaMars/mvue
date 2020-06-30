const fs = require('fs')
const render = require('json-templater/string')
const endOfLine = require('os').EOL
const version = require('../package.json').version
const uppercamelcase = require('uppercamelcase')
const { entryOutputPath } = require('./config')
const { getAssetsPath } = require('./utils')
const components = require('../components.json')
const componentNames = Object.keys(components)

const IMPORT_COMPONENT = 'import {{name}} from \'../packages/{{package}}/index.js\''
const INSTALL_COMPONENT = '  {{name}}'
const INDEX_MAIN_TEMPLATE = `
{{import}}

const components = [
{{install}}
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '{{version}}',
  install,
{{install}}
}
`

const LIB_LIST = `  {{keyName}}: {
    input: 'packages/{{name}}/index.js',
    output: '{{name}}'
  }`
const libListArray = []
const LIB_LIST_MAIN_TEMPLATE = `
module.exports = {
  index: {
    input: 'src/index.js',
    output: 'index'
  },
{{list}}
}
`

const importComponentsArray = []
const installComponentsArray = []

componentNames.forEach(name => {
  const componentName = uppercamelcase(name)
  let libKeyName

  if (name.includes('-')) {
    libKeyName = `'${name}'`
  } else {
    libKeyName = name
  }

  importComponentsArray.push(
    render(IMPORT_COMPONENT, {
      name: componentName,
      package: name
    })
  )
  installComponentsArray.push(
    render(INSTALL_COMPONENT, {
      name: componentName
    })
  )
  libListArray.push(
    render(LIB_LIST, {
      keyName: libKeyName,
      name: name
    })
  )
})

const indexTemplate = render(INDEX_MAIN_TEMPLATE, {
  import: importComponentsArray.join(endOfLine),
  install: installComponentsArray.join(',' + endOfLine),
  version: version
})

const libTemplate = render(LIB_LIST_MAIN_TEMPLATE, {
  list: libListArray.join(',' + endOfLine)
})

fs.writeFileSync(getAssetsPath(entryOutputPath, './index.js'), indexTemplate)
fs.writeFileSync(getAssetsPath(entryOutputPath, './lib-list.js'), libTemplate)
