<template>
  <div class="photo-uploader d-flex justify-start">
    <v-avatar
      :class="!avatar ? 'avatar-with-border d-flex' : ''"
      size="200"
      rounded="0"
      @click="fileInput?.click()"
    >
      <v-icon
        v-if="!avatar"
        class="icon-center"
        size="x-large"
      >
        mdi-account-circle
      </v-icon>
      <div class="d-flex w-100">
        <v-img
          v-if="avatar"
          cover
          :src="avatar"
          class="align-end"
        >
          <div class="d-flex justify-end">
            <v-btn
              color="red"
              width="30"
              height="30"
              icon="mdi-delete"
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
</template>

<script setup lang="ts">
  import { ref, watch, defineEmits } from 'vue';

  const emit = defineEmits(['changePhoto']);

  defineProps({
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
    .avatar-with-border {
      border: 3px dashed green;
      border-radius: 50%;
      overflow: hidden;
    }

    .icon-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: green;
    }
  }
</style>
