<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12 pa-8">
          <v-card-title class="text-center mb-4">
            {{ t('pages.Login.title') }}
          </v-card-title>
          <v-card-text class="text-center">
            <AppButton
              name="google-login"
              :text="t('pages.Login.googleButton')"
              :loading="authStore.loading"
              width="100%"
              @click="handleLogin"
            >
              <template #prepend>
                <v-icon>mdi-google</v-icon>
              </template>
            </AppButton>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';

  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/store/auth';
  import { useI18n } from '@/composables/useI18n';

  const authStore = useAuthStore();
  const router = useRouter();
  const { t } = useI18n();

  const handleLogin = () => {
    authStore.loginWithGoogle(router);
  };
</script>
