import { createRouter, createWebHistory } from 'vue-router'

import UsersPage from '../pages/UsersPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SessionMoviePage from '../pages/SessionMoviePage.vue'
import TicketPage from '../pages/TicketPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users-page',
      component: UsersPage,
    },
      {
          path: '/login',
          name: 'login-page',
          component: LoginPage,
      },
      {
        path: '/sessions',
        name: 'sessions-page',
        component: SessionMoviePage
      },
      {
        path: '/tickets',
        name: 'tickets-page',
        component: TicketPage
      },
    { 
      path: '/:pathMatch(.*)*', 
      component: NotFoundPage 
    },
  ],
})

export default router