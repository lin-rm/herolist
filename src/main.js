import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'
const router = new VueRouter ({
  routes: [
    { name: 'home', path:'/', redirect:'/heroes'},
    { name: 'heros', path:'/heroes', component: HeroList},
    { name: 'weapons', path:'/weapons', component: WeaponList},
    { name: 'equips', path:'/equips', component: EquipList}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
