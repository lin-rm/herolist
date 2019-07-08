import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'
const router = new VueRouter ({
  linkExactActiveClass: 'active',
  routes: [
    { name: 'home', path:'/', redirect:'/heroes'},
    { name: 'heros', path:'/heroes', component: HeroList},
    { name: 'weapons', path:'/weapons', component: WeaponList},
    { name: 'equips', path:'/equips', component: EquipList}
  ]
})

export default router