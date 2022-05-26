import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/tiankongPage',
    name: 'tiankongPage',
    component: () => import('../views/TiankongPage.vue'),
  },
  {
    path: '/panduanPage',
    name: 'panduanPage',
    component: () => import('../views/PanduanPage.vue')
  },
  {
    path: '/danxuanPage',
    name: 'danxuanPage',
    component: () => import('../views/DanxuanPage.vue')
  },
  {
    path: '/duoxuanPage',
    name: 'duoxuanPage',
    component: () => import('../views/DuoxuanPage.vue')
  },
  {
    path: '/jiandaPage',
    name: 'jiandaPage',
    component: () => import('../views/JiandaPage.vue')
  },
  {
    path: '/examPage',
    name: 'examPage',
    component: () => import('../views/examPage.vue')
  }
]

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
