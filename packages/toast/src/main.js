import Vue from 'vue'
import { isServer } from '@src/utils/util'
import main from './main.vue'

const ToastConstructor = Vue.extend(main)

let instance

const Toast = (options = {}) => {
  if (!isServer) { return }
  instance = new ToastConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.appendChild(instance.$el)

  clearTimeout(instance.timer)
  if (instance.duration > 0) {
    instance.timer = setTimeout(() => {
      Toast.clear()
    }, instance.duration)
  }
}

Toast.clear = () => {
  instance.visible = false
}

export default Toast
