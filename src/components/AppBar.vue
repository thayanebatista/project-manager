<template>
  <v-app-bar
    floating
    extended
    extension-height="0"
    color="app-bar-background"
    class="app-bar"
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
      <div class="d-flex align-center pr-8 cursor-pointer">
        <SearchIcon @click="showSearch = !showSearch" />
      </div>
    </template>
    <template #extension>
      <v-row v-if="showSearch">
        <v-col>
          <SearchBar @on-focus="showSearch = false" />
        </v-col>
      </v-row>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
  import SearchBar from './SearchBar.vue';
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  import AppBarLogo from '@/components/icons/AppBarLogoIcon.vue';

  import { ref } from 'vue';
  import { useI18n } from '@/composables/useI18n';

  const { t } = useI18n();

  const showSearch = ref(false);
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
