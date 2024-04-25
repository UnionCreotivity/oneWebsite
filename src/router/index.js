import { createRouter, createWebHashHistory } from 'vue-router'
import CardOne from '../components/CardOne.vue'
const routes = [

  {
    path: '/',
    name: 'home',
    component: CardOne,
    meta: { title: '' },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  }
})

export default router
