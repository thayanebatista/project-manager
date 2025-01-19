<template>
  <v-dialog
    v-model="dialog"
    width="600"
    height="350"
    persistent
  >
    <div>
      <v-fab
        offset
        absolute
        size="large"
        :icon="TrashWhiteIcon"
        color="primary"
        location="top center"
      ></v-fab>
      <v-card class="d-flex flex-column rounded-lg text-center pa-10">
        <v-card-title class="text-title text-center">
          {{ t('components.confirmationDialog.title') }}
        </v-card-title>
        <v-divider thickness="2" />
        <v-card-text class="d-flex flex-column justify-center ga-">
          <div class="d-flex flex-column ga-4 text-card-subtitle">
            <span>
              {{ t('components.confirmationDialog.subtitle') }}
            </span>
            <span class="project-name text-dialog-project-title">
              {{ project.name }}
            </span>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-center ga-8">
          <v-btn
            color="primary"
            variant="outlined"
            rounded
            class="d-flex px-10 py-6 font-weight-regular"
            @click="cancel"
          >
            {{ t('common.cancel') }}
          </v-btn>
          <v-btn
            variant="elevated"
            rounded
            color="primary"
            class="d-flex px-10 py-6 font-weight-regular"
            @click="confirm"
          >
            {{ t('common.confirm') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
  import TrashWhiteIcon from '@/components/icons/TrashWhiteIcon.vue';

  import { ref } from 'vue';
  import { useI18n } from '@/composables/useI18n';
  import { IProject } from '@/interfaces/project';

  defineProps<{
    project?: IProject;
  }>();

  const emit = defineEmits<{
    confirm: [];
  }>();

  const { t } = useI18n();
  const dialog = ref(false);

  const open = () => {
    dialog.value = true;
  };

  const close = () => {
    dialog.value = false;
  };

  const confirm = () => {
    emit('confirm');
  };

  const cancel = () => {
    close();
  };

  defineExpose({ open, close });
</script>
<style lang="scss" scoped>
  .project-name {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
  }
</style>
