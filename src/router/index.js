import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import page_relation from '@/components/page_relation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page_relation',
      name: 'page_relation',
      component: page_relation
    }
  ]
})
