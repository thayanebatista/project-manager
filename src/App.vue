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

  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>
<style lang="scss" scoped>
  .app {
    .main-view {
      background-color: #f4f2ff;
    }
  }
</style>
