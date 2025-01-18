<template>
  <div class="d-flex flex-column py-10 ga-4">
    <v-row class="justify-space-between">
      <v-col class="d-flex align-center ga-2">
        <span class="text-title-page text-title">
          {{ t('components.projectsList.title') }}
        </span>
        <span class="text-primary text-default-subtitle">
          {{ `(${projects.length})` }}
        </span>
      </v-col>
      <v-col class="d-flex align-center justify-end ga-8">
        <v-switch
          v-model="toggleFav"
          inset
          hide-details
          min-width="150"
          color="toggle"
          density="compact"
          label="Apenas Favoritos"
        />
        <v-select
          v-model="filter"
          :items="FilterOptions"
          density="compact"
          item-title="name"
          item-value="id"
          variant="outlined"
          color="primary"
          min-width="100"
          max-width="250"
          hide-details
          :menu-icon="ChevronDownIcon"
        />
        <AppButton
          name="new-project"
          :height="40"
          :width="180"
          :text="t('components.empty.action.newProject')"
          style="font-size: 16px"
          @click="redirectTo('NewProject')"
        >
          <template #prepend>
            <PlusCircleIcon />
          </template>
        </AppButton>
      </v-col>
    </v-row>
    <v-row class="ga-14">
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="auto"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import ProjectCard from '@/components/projects/ProjectCard.vue';
  import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';
  import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from '@/composables/useI18n';
  import { IProject } from '@/interfaces/project';

  defineProps<{
    projects: IProject[];
  }>();

  const { t } = useI18n();
  const router = useRouter();
  const toggleFav = ref();
  const FilterOptions = [
    {
      id: 'asc',
      name: 'Ordem alfabetica',
    },
    {
      id: 'new',
      name: 'Iniciados mais recente',
    },
    {
      id: 'endDate',
      name: 'Prazo mais próximo',
    },
  ];

  const filter = ref(FilterOptions[0]);
  const redirectTo = (routeName: string) => {
    router.push({ name: routeName });
  };
</script>
