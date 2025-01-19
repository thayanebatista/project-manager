<template>
  <v-autocomplete
    :items="recentSearches"
    hide-no-data
    clearable
    autofocus
    item-props
    auto-select-first
    menu-icon=""
    item-title="name"
    item-value="name"
    class="px-4"
    variant="solo"
    append-inner-icon="mdi-close"
    prepend-inner-icon="mdi-magnify"
    placeholder="Digite o nome do projeto"
    @update:search="debouncedSearch"
    @update:focused="handleFocus"
    @click:append-inner="emit('onFocus', false)"
  ></v-autocomplete>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useProjectsStore } from '@/store/projects';
  import { useDebouncer } from '@/utils/useDebouncer';

  const projectsStore = useProjectsStore();
  const { recentSearches } = storeToRefs(projectsStore);

  const emit = defineEmits(['onFocus']);

  const performSearch = (search: string) => {
    if (search && search.length >= 3) {
      projectsStore.setSearchTerm(search);
      projectsStore.setRecentSearch({
        prependIcon: 'mdi-clock',
        name: search,
      });
    } else {
      projectsStore.setSearchTerm('');
    }
  };

  const debouncedSearch = useDebouncer(performSearch, 300);

  const handleFocus = (value: boolean) => {
    if (!value) {
      emit('onFocus', false);
      projectsStore.setSearchTerm('');
    }
  };
</script>
