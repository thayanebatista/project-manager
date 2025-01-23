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
      <div class="d-flex align-center pr-0 ga-4 cursor-pointer">
        <SearchIcon @click="showSearch = !showSearch" />
        <div class="d-flex align-center ga-2">
          <v-avatar
            v-if="authStore.isAuthenticated && authStore.user?.photoURL"
            size="small"
          >
            <v-img :src="authStore.user.photoURL" />
          </v-avatar>
          <v-btn
            v-if="authStore.isAuthenticated"
            icon
            size="small"
            variant="text"
            @click="handleLogout"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
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
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/store/auth';
  import { useI18n } from '@/composables/useI18n';

  const { t } = useI18n();

  const showSearch = ref(false);
  const authStore = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    authStore.logout(router);
  };
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
