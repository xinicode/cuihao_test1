import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "a" */ '../views/a.vue'),
    },
    {
      path: '/contact',
      component: () => import(/* webpackChunkName: "b" */  '../views/b.vue')
    },
    {
      path: '/aaaa',
      component: () => import(/* webpackChunkName: "c" */  '../views/c.vue')
    }
  ]
})
export default router;