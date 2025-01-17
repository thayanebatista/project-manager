<template>
  <v-app-bar
    color="app-bar-background"
    class="app-bar px-10"
  >
    <v-app-bar-title class="app-bar-title">
      <div class="d-flex align-center ga-2">
        <AppBarLogo />
        <span class="title text-wrap text-title">
          Gerenciador de projetos
        </span>
      </div>
    </v-app-bar-title>
    <template #append>
      <div class="d-flex align-center">
        <SearchIcon />
      </div>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  import AppBarLogo from '@/components/icons/AppBarLogoIcon.vue';
</script>
<style lang="scss" scoped>
  .app-bar {
    :deep(.v-toolbar__content) {
      .v-toolbar-title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .app-bar-title {
        .title {
          width: 110px;
        }
      }
    }
  }
</style>
