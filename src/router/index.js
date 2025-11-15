import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Print from '@/components/Print'
import A4 from '@/components/A4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/p/:id',
      name: 'Print',
      component: Print
    },
    {
      path: '/A4',
      name: 'A4',
      component: A4
    }
  ]
})
