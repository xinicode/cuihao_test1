import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/a.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/b.vue')
    }
  ]
})
export default router;