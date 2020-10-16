import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/Header'
import Layout from '@/views/layout'
import Home from '@/views/index/index'
import Login from '@/views/login/login'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        }
      ]
    }
  ]
})
