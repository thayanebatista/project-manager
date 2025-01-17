<template>
  <v-btn
    :id="`btn-${name}`"
    color="button-background"
    variant="flat"
    rounded
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
  }>();
</script>
