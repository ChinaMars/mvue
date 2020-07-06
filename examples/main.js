import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import mvue from '../src/index' // 本地调试

// Vue.use(mvue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
