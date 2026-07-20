import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import RankingView from '../views/RankingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Dashboard - Campeonato de Cafés' }
  },
  {
    path: '/avaliacao',
    name: 'avaliacoes',
    component: AvaliacoesView,
    meta: { title: 'Avaliações' }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
    meta: { title: 'Ranking Geral' }
  },
  {
    path: '/cafe/:id',
    name: 'cafe-detalhes',
    component: () => import('../views/CafeDetalhesView.vue'),
    meta: { title: 'Detalhes do Café' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Página não encontrada' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
