/**
 * router/index.ts
 */

// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    showAppBar?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: { showAppBar: true },
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
  {
    path: '/novo-projeto',
    name: 'NewProject',
    meta: { showAppBar: true },
    props: true,
    component: () => import('@/pages/ProjectForm.vue'),
  },
  {
    path: '/:id/editar-projeto',
    name: 'EditProject',
    meta: { showAppBar: true },
    props: true,
    component: () => import('@/pages/ProjectForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/project-manager/'),
  routes,
});

export default router;
