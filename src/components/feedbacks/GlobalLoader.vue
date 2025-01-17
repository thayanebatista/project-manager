<template>
  <v-overlay
    :model-value="isLoadingGlobal"
    class="global-loader align-center justify-center"
    persistent
  >
    <v-progress-circular
      indeterminate
      color="white"
      size="128"
    />
  </v-overlay>
</template>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useLoaderStore } from '@/store/loader';

  const { isLoadingGlobal } = storeToRefs(useLoaderStore());
</script>
<style lang="scss" scoped>
  .global-loader {
    background-color: $overlay-color;
  }
</style>
