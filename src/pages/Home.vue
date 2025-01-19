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
        :projects="list"
        @toggle-fave="project => setFavoriteProject(project)"
        @change-filter="orderListBy"
        @change-faves="filterFaves = $event"
      />
    </div>
  </v-container>
</template>
<script lang="ts" setup>
  import Empty from '@/components/projects/Empty.vue';
  import ProjectsList from '@/components/projects/ProjectsList.vue';

  import { computed, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useProjectsStore } from '@/store/projects';
  import { IFilter, IProject } from '@/interfaces/project';

  const projectsStore = useProjectsStore();
  const { projects } = storeToRefs(projectsStore);

  const orderListBy = (filter: IFilter) => {
    projectsStore.filterList(filter.id);
  };
  const filterFaves = ref();
  const list = computed((): IProject[] => {
    if (filterFaves.value) {
      return projects.value.filter(project => project.isFavorite);
    }
    return projects.value;
  });

  const setFavoriteProject = (project: IProject) => {
    projectsStore.setFavoriteProject(project.id);
  };
</script>
