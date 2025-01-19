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
        @on-toggle-favorite="project => setFavoriteProject(project)"
        @on-change-filter="orderListBy"
        @on-change-favorite="value => (filterFaves = value)"
        @delete="project => showDialog(project)"
      />
    </div>
  </v-container>

  <ConfirmationDialog
    ref="confirmationDialog"
    :project="deleteTarget"
    @confirm="onConfirmDelete"
  />
</template>
<script lang="ts" setup>
  import Empty from '@/components/projects/Empty.vue';
  import ProjectsList from '@/components/projects/ProjectsList.vue';
  import ConfirmationDialog from '@/components/ConfirmationDialog.vue';

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

  const confirmationDialog = ref();
  const deleteTarget = ref<IProject>();

  const showDialog = (project: IProject) => {
    deleteTarget.value = project;
    confirmationDialog.value.open();
  };

  const onConfirmDelete = () => {
    projectsStore.deleteProject(deleteTarget.value.id);
    confirmationDialog.value.close();
  };

  const setFavoriteProject = (project: IProject) => {
    projectsStore.setFavoriteProject(project.id);
  };
</script>
