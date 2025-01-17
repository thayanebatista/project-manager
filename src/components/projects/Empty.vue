<template>
  <v-card class="d-flex flex-column align-center justify-center h-100">
    <v-card-title class="text-no-project-title">
      {{ t('components.empty.title') }}
    </v-card-title>
    <v-card-subtitle>
      {{ t('components.empty.subtitle') }}
    </v-card-subtitle>
    <v-card-actions class="pt-5">
      <AppButton
        name="new-project"
        :text="t('components.empty.action.newProject')"
      >
        <template #prepend>
          <PlusCircleIcon />
        </template>
      </AppButton>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';

  import { useI18n } from '@/composables/useI18n';

  const { t } = useI18n();
</script>
