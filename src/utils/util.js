import Vue from 'vue'

export function isServer () {
  return Vue.prototype.$isServer
}
