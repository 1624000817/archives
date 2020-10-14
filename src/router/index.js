import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      redirect:'/home',
      children: [
        {
          path: 'home',
          name: 'HelloWorld',
          component: HelloWorld,
        }
      ]
    }
  ]
})
