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
        :projects="projectsList"
        :search="searchTerm"
        @on-toggle-favorite="toggleFavorite"
        @on-change-filter="value => (sortOrder = value.id)"
        @on-change-favorite="value => (filterFavorites = value)"
        @delete="showDeleteDialog"
      />
    </div>
  </v-container>

  <ConfirmationDialog
    ref="confirmationDialog"
    :project="deleteTarget"
    @confirm="confirmDelete"
  />
</template>

<script lang="ts" setup>
  import Empty from '@/components/projects/Empty.vue';
  import ProjectsList from '@/components/projects/ProjectsList.vue';
  import ConfirmationDialog from '@/components/ConfirmationDialog.vue';

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '@/store/auth';
  import { onMounted, ref, watch } from 'vue';
  import { useProjectsStore } from '@/store/projects';
  import { filterEnum, IProject } from '@/interfaces/project';

  const projectsStore = useProjectsStore();
  const { projects, searchTerm, filteredProjects } = storeToRefs(projectsStore);

  const projectsList = ref<IProject[]>([]);
  const filterFavorites = ref(false);
  const sortOrder = ref<filterEnum>(filterEnum.byAlphabetical);

  const updateProjectsList = () => {
    let list = [...filteredProjects.value];

    list = projectsStore.sortdAndFilteredProjects(sortOrder.value);

    if (filterFavorites.value) {
      list = list.filter(project => project.isFavorite);
    }

    projectsList.value = list;
  };

  const authStore = useAuthStore();

  onMounted(() => {
    updateProjectsList();
    if (authStore.isAuthenticated) {
      projectsStore.fetchUserProjects();
    }
  });

  watch([projects, filteredProjects, filterFavorites, sortOrder], () => {
    updateProjectsList();
  });

  watch(
    () => authStore.isAuthenticated,
    isAuthenticated => {
      if (isAuthenticated) {
        projectsStore.fetchUserProjects();
      }
    },
  );

  const confirmationDialog = ref();
  const deleteTarget = ref<IProject>();

  const showDeleteDialog = (project: IProject) => {
    deleteTarget.value = project;
    confirmationDialog.value.open();
  };

  const confirmDelete = async () => {
    try {
      await projectsStore.deleteProject(deleteTarget.value.id);
      confirmationDialog.value.close();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorite = (project: IProject) => {
    projectsStore.setFavoriteProject(project.id);
  };
</script>
