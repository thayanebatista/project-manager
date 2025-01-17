<template>
  <div>
    <AppBar />
  </div>
  <v-container class="h-100 py-5 px-0">
    <div
      v-if="!projects.length"
      class="h-100"
    >
      <Empty />
    </div>
  </v-container>
</template>
<script lang="ts" setup>
  import AppBar from '@/components/AppBar.vue';
  import Empty from '@/components/projects/Empty.vue';

  import { ref } from 'vue';

  const projects = ref([]);
</script>
