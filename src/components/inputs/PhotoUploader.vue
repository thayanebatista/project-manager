<template>
  <div class="d-flex flex-column justify-center w-100">
    <span class="text-imput-label">
      {{ label }}
    </span>
    <div
      class="photo-uploader d-flex flex-column justify-center align-center border border-dashed rounded"
    >
      <v-card
        v-if="!avatar"
        variant="text"
        class="d-flex flex-column align-center justify-center"
      >
        <v-card-title>
          <UploadIcon />
        </v-card-title>
        <v-card-subtitle>
          <span>
            {{ t('components.PhotoUploader.subtitle') }}
          </span>
        </v-card-subtitle>
        <v-card-actions>
          <AppButton
            name="upload"
            :text="t('components.PhotoUploader.openFilePicker')"
            variant="outlined"
            style="background-color: white"
            @click="fileInput?.click()"
          />
        </v-card-actions>
      </v-card>
      <v-avatar
        v-else
        size="400"
        rounded
        class="d-flex align-center justify-center w-100 h-100"
        @click="fileInput?.click()"
      >
        <div class="d-flex w-100">
          <v-img
            v-if="avatar"
            :src="avatar"
            class="align-start"
          >
            <div class="d-flex justify-end pa-4">
              <v-btn
                color="white"
                width="32"
                height="32"
                :icon="TrashIcon"
                size="small"
                @click="deletePhoto"
              />
            </div>
          </v-img>
        </div>
      </v-avatar>
      <v-file-input
        ref="fileInput"
        v-model="file"
        accept=".png,.jpg"
        class="d-none"
      />
      <span
        v-if="errors.length"
        class="text-center pa-2 text-red"
      >
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import TrashIcon from '@/components/icons/TrashIcon.vue';
  import UploadIcon from '@/components/icons/UploadIcon.vue';

  import { useField } from 'vee-validate';
  import { ref, watch, defineEmits } from 'vue';
  import { useI18n } from '@/composables/useI18n';

  const { t } = useI18n();

  const { setValue, errorMessage, errors } = useField<string | null>('image');
  const emit = defineEmits(['changePhoto']);

  const props = defineProps<{
    label?: string;
    image?: string | null;
  }>();

  const file = ref<File | null>(null);
  const avatar = ref<string | null>(props.image || null);
  const fileInput = ref<HTMLInputElement | null>(null);

  watch(
    () => props.image,
    newImage => {
      avatar.value = newImage || null;
    },
  );

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  watch(file, async value => {
    if (value) {
      try {
        const base64 = await convertToBase64(value);
        avatar.value = base64;
        setValue(base64);
        emit('changePhoto', base64);
      } catch (error) {
        setValue(null);
        emit('changePhoto', null);
      }
    }
  });

  const deletePhoto = () => {
    file.value = null;
    avatar.value = null;
    emit('changePhoto', null);
  };
</script>

<style scoped lang="scss">
  .photo-uploader {
    .icon-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: green;
    }
  }
</style>
