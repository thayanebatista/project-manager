<template>
  <div class="d-flex flex-column justify-center w-100">
    <span class="text-imput-label">
      {{ label }}
    </span>
    <div
      class="photo-uploader d-flex justify-center aling-center border border border-dashed rounded"
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
          <span> Escolha uma imagem .jpg ou .png no seu dispositivo </span>
        </v-card-subtitle>
        <v-card-actions>
          <AppButton
            name="upload"
            text="Selecionar"
            variant="outlined"
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
      >
      </v-file-input>
      <span
        v-if="errors.length"
        class="text-center pa-2 text-red"
      >
        {{ errors }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import TrashIcon from '@/components/icons/TrashIcon.vue';
  import UploadIcon from '@/components/icons/UploadIcon.vue';

  import { ref, watch, defineEmits } from 'vue';

  const emit = defineEmits(['changePhoto']);

  defineProps({
    label: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  });

  const file = ref<File | null>(null);
  const avatar = ref<string | null>(null);
  const fileInput = ref<HTMLInputElement | null>(null);

  watch(file, value => {
    if (value) {
      avatar.value = URL.createObjectURL(value);
      emit('changePhoto', value);
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
