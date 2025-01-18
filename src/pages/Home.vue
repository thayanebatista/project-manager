<template>
  <v-container class="d-flex flex-column h-100 py-5">
    <div
      v-if="!projects.length"
      class="h-100"
    >
      <Empty />
    </div>
    <div v-else>
      <ProjectsList :projects="projects" />
    </div>
  </v-container>
</template>
<script lang="ts" setup>
  import Empty from '@/components/projects/Empty.vue';
  import ProjectsList from '@/components/projects/ProjectsList.vue';

  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useProjectsStore } from '@/store/projects';

  const projectsStore = useProjectsStore();
  const { projects } = storeToRefs(projectsStore);

  onMounted(() => {
    console.log(projects.value);
  });
</script>
