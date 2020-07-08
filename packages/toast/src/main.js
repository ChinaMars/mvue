import Vue from 'vue'
import { isServer } from '@src/utils/util'
import main from './main.vue'

const ToastConstructor = Vue.extend(main)

const Toast = (options = {}) => {
  if (!isServer) { return }
  const instance = new ToastConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.appendChild(instance.$el)
  setTimeout(() => {
    instance.visible = false
  }, instance.duration)
}

export default Toast
