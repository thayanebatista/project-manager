<template>
  <div class="py-10">
    <div class="d-flex justify-space-between">
      <div class="d-flex align-center ga-2">
        <span class="text-title-page text-title">
          {{ t('components.projectsList.title') }}
        </span>
        <span class="text-primary text-default-subtitle">
          {{ `(${projects.length})` }}
        </span>
      </div>
      <div class="d-flex align-center ga-8">
        <v-switch
          v-model="toggleFav"
          inset
          hide-details
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
          min-width="300"
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';
  import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from '@/composables/useI18n';
  import { IProjects } from '@/interfaces/project';

  defineProps<{
    projects: IProjects[];
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
