import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/index/index'
import Login from '@/views/login/login'
import UserB from '@/views/user/userB'
import Resource from '@/views/resource/Index'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'userB',
          name: 'UserB',
          component: UserB,
        },
        {
          path: 'resource',
          name: 'Resource',
          component: Resource,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
