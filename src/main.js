import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter ({
  routers: [

  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
