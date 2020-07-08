import Vue from 'vue'
import Toast from './src/main.js'

Toast.install = (Vue) => {
  Vue.component(Toast.name, Toast)
}

Vue.prototype.$toast = Toast

export default Toast
