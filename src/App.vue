<template>
  <v-app class="app">
    <AppBar v-if="route.meta.showAppBar" />
    <v-main
      id="main-view"
      class="main-view fill-height w-100"
    >
      <router-view />
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
  import AppBar from '@/components/AppBar.vue';

  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { auth } from '@/firebase/config';
  import { useAuthStore } from '@/store/auth';
  import { onAuthStateChanged } from 'firebase/auth';

  const route = useRoute();
  const authStore = useAuthStore();

  onMounted(() => {
    onAuthStateChanged(auth, user => {
      authStore.setUser(user);
    });
  });
</script>
<style lang="scss" scoped>
  .app {
    .main-view {
      background-color: #f4f2ff;
    }
  }
</style>
