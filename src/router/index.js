import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // 替換成你的首頁組件路徑
    meta: { title: '首頁' }, // 可選的路由元信息
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/' // 如果沒有找到匹配的路徑，重定向到首頁
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;