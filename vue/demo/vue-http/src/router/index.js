import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HttpTest from '@/components/HttpTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/httptest',
      name: 'HttpTest',
      component: HttpTest
    }
  ]
})
