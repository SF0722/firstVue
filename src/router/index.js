import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/ai',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
