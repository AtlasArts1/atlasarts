import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    return to.hash ? { el: to.hash } : { top: 0 }
  },
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue') },
    { path: '/gallery', redirect: '/galleries/digital-art' },
    { path: '/galleries', component: () => import('./views/GalleryView.vue') },
    { path: '/galleries/digital-art', component: () => import('./views/ArtworkGalleryView.vue'), props: { category: 'digital-art' } },
    { path: '/galleries/3d-art', component: () => import('./views/ArtworkGalleryView.vue'), props: { category: '3d-art' } },
    { path: '/galleries/astronomy-photos', component: () => import('./views/ArtworkGalleryView.vue'), props: { category: 'astronomy-photos' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
