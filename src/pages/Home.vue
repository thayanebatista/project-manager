<template>
  <v-container class="d-flex flex-column h-100 py-5">
    <div
      v-if="!projects.length"
      class="h-100"
    >
      <Empty />
    </div>
    <div v-else>
      <ProjectsList
        :projects="projects"
        @change-filter="filterList"
      />
    </div>
  </v-container>
</template>
<script lang="ts" setup>
  import Empty from '@/components/projects/Empty.vue';
  import ProjectsList from '@/components/projects/ProjectsList.vue';

  import { storeToRefs } from 'pinia';
  import { IFilter } from '@/interfaces/project';
  import { useProjectsStore } from '@/store/projects';

  const projectsStore = useProjectsStore();
  const { projects } = storeToRefs(projectsStore);

  const filterList = (filter: IFilter) => {
    projectsStore.filterList(filter.id);
  };
</script>
