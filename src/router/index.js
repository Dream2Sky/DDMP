import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/Login.vue'
import Require from '@/modules/myprojects/require.vue'
import Dev from '@/modules/myprojects/dev.vue'
import Test from '@/modules/myprojects/test.vue'
import UI from '@/modules/myprojects/ui.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/myprojects/require',
    name: 'Require',
    component: Require
  }, {
    path: '/myprojects/',
    name: 'Require',
    component: Require
  }, {
    path: '/myprojects/dev',
    name: 'Dev',
    component: Dev
  }, {
    path: '/myprojects/test',
    name: 'Test',
    component: Test
  }, {
    path: '/myprojects/ui',
    name: 'UI',
    component: UI
  }]
})
