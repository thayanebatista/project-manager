<template>
  <v-btn
    :id="`btn-${name}`"
    rounded
    variant="flat"
    :height="height || 52"
    :width="width || 230"
    :disabled="disabled"
    color="button-background"
    class="px-4"
  >
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
    {{ text }}
  </v-btn>
</template>
<script setup lang="ts">
  defineProps<{
    name: string;
    text?: string;
    height?: number;
    width?: number;
    disabled?: boolean;
  }>();
</script>
