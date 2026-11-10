import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    return to.hash ? { el: to.hash } : { top: 0 }
  },
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue') },
    { path: '/gallery', component: () => import('./views/GalleryView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
