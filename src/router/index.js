import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/',                  name: 'home',        component: HomeView },
  { path: '/info',              name: 'info',        component: () => import('@/views/InfoView.vue') },
  { path: '/programm',         name: 'programm',    component: () => import('@/views/ProgrammView.vue') },
  { path: '/programm/musik',   name: 'musik',       component: () => import('@/views/programm/MusikView.vue') },
  { path: '/programm/vortraege',name: 'vortraege',  component: () => import('@/views/programm/VortraegeView.vue') },
  { path: '/programm/workshops',name: 'workshops',  component: () => import('@/views/programm/WorkshopsView.vue') },
  { path: '/programm/healingoase', name: 'healingoase', component: () => import('@/views/programm/HealingoaseView.vue') },
  { path: '/programm/aussteller',  name: 'aussteller',  component: () => import('@/views/programm/AusstellerView.vue') },
  { path: '/programm/kinder',      name: 'kinder',      component: () => import('@/views/programm/KinderView.vue') },
  { path: '/kontakt',          name: 'kontakt',     component: () => import('@/views/KontaktView.vue') },
  { path: '/mitmachen',        name: 'mitmachen',   component: () => import('@/views/MitmachenView.vue') },
  { path: '/datenschutz',      name: 'datenschutz', component: () => import('@/views/DatenschutzView.vue') },
  { path: '/impressum',        name: 'impressum',   component: () => import('@/views/ImpressumView.vue') },
  { path: '/presse',           name: 'presse',      component: () => import('@/views/PresseView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
