/**
 * router/index.ts
 */

// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { red } from 'vuetify/util/colors';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
