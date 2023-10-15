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

router.beforeEach((to, _from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/home');
    return;
  }
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login');
    return;
  }
  next();
});

export default router;
