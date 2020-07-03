
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import Dialog from '../packages/dialog/index.js'
import Icon from '../packages/icon/index.js'
import Input from '../packages/input/index.js'
import Scrollbar from '../packages/scrollbar/index.js'
import Select from '../packages/select/index.js'
import Option from '../packages/option/index.js'

const components = [
  Button,
  ButtonGroup,
  Dialog,
  Icon,
  Input,
  Scrollbar,
  Select,
  Option
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
  version: '0.1.5',
  install,
  Button,
  ButtonGroup,
  Dialog,
  Icon,
  Input,
  Scrollbar,
  Select,
  Option
}
