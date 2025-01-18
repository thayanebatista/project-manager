<template>
  <v-app-bar
    color="app-bar-background"
    class="app-bar px-10"
  >
    <v-app-bar-title class="app-bar-title">
      <div class="d-flex align-center ga-2">
        <AppBarLogo />
        <span class="app-title text-wrap">
          {{ t('components.appBar.title') }}
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

  import { useI18n } from '@/composables/useI18n';

  const { t } = useI18n();
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
        .app-title {
          font-family: 'Encode Sans Expanded', sans-serif;
          font-size: 18px;
          font-weight: 300;
          line-height: 22.5px;
          width: 110px;
        }
      }
    }
  }
</style>
