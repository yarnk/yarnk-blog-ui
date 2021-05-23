import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/page/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Layout,
    children: [{
      path: '/',
      name: 'Home',
      component: () => import('@/views/home')
    }]
  },
  {
    path: '/article',
    name: '',
    component: Layout,
    children: [{
      path: '',
      name: 'Article',
      component: () => import('../views/article')
    }]
  },
  {
    path: '/about',
    name: '',
    component: Layout,
    children: [{
      path: '',
      name: 'About',
      component: () => import('../views/about')
    }]
  },
  {
    path: '/more',
    name: '',
    component: Layout,
    children: [{
      path: '',
      name: 'More',
      component: () => import('../views/more')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
