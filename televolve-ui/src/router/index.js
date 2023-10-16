import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import { auth } from '../services/firebase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// Este bloco de código é chamado antes de cada navegação de rota.
router.beforeEach((to, _from, next) => {
  // Condição para redirecionamento que verifica se o usuário está tentando acessar a rota "/login" e já está autenticado.
  if (to.path === '/login' && auth.currentUser) {
    // Redireciona o usuário para a rota "/home" e interrompe a execução.
    next('/home');
    return;
  }
  // Verifica se a rota requer autenticação com base na propriedade "meta.requiresAuth" nas definições da rota.
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    // Redireciona o usuário para a rota "/login" se não estiver autenticado.
    next('/login');
    return;
  }
  // Permite a navegação normal se nenhuma das condições anteriores for atendida.
  next();
});

export default router;
