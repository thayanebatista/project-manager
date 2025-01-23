/**
 * router/index.ts
 */

// Composables
import { useAuthStore } from '@/store/auth';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    showAppBar?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { showAppBar: true, requiresAuth: true },
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
  {
    path: '/novo-projeto',
    name: 'NewProject',
    meta: { showAppBar: true, requiresAuth: true },
    props: true,
    component: () => import('@/pages/ProjectForm.vue'),
  },
  {
    path: '/:id/editar-projeto',
    name: 'EditProject',
    meta: { showAppBar: true, requiresAuth: true },
    props: true,
    component: () => import('@/pages/ProjectForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/project-manager/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && authStore.isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
