import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathmatch(.*)*',
    redirect: { name: 'Home' }
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
