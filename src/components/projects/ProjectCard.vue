<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card
    variant="elevated"
    width="300"
    class="d-flex flex-column rounded-xl border border-thin ga-4"
  >
    <v-img
      cover
      height="230"
      width="340"
      :src="displayImage"
      :alt="project.name || 'placeholder'"
      class="align-end w-100"
    >
      <div class="d-flex align-center justify-end px-4 py-2 ga-2">
        <v-btn
          color="white"
          width="32"
          height="32"
          variant="text"
          density="compact"
          :icon="isFavorite"
          size="small"
          @click="emit('toggleFave', project)"
        />
        <v-menu location="bottom right">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              density="compact"
              :icon="MenuIcon"
            />
          </template>
          <v-list color="red">
            <v-list-item
              title="Editar"
              :prepend-icon="EditIcon"
              class="text-primary"
              @click="redirectTo('EditProject', project.id)"
            />
            <v-list-item
              title="Remover"
              :prepend-icon="TrashIcon"
              class="text-primary"
              @click="emit('delete', project)"
            />
          </v-list>
        </v-menu>
      </div>
    </v-img>
    <v-card-title class="d-flex flex-column">
      <span
        class="card-title-name text-title"
        v-html="highlightSearch(project.name)"
      ></span>
      <div>
        <span class="card-title-client text-card-title">
          {{ t('components.projectCard.client') }}
        </span>
        <span class="card-title-client-name text-card-subtitle">
          {{ project.client }}
        </span>
      </div>
    </v-card-title>
    <v-divider thickness="1" />
    <v-card-text class="d-flex flex-column ga-4">
      <div class="d-flex align-center ga-4">
        <CalendarStartIcon />
        <span class="text-card-subtitle">
          {{ formatDate(project.startDate) }}
        </span>
      </div>
      <div class="d-flex align-center ga-4">
        <CalendarEndIcon />
        <span class="text-card-subtitle">
          {{ formatDate(project.endDate) }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import EditIcon from '@/components/icons/EditIcon.vue';
  import MenuIcon from '@/components/icons/MenuIcon.vue';
  import TrashIcon from '@/components/icons/TrashIcon.vue';
  import EmptyStarIcon from '@/components/icons/EmptyStarIcon.vue';
  import FilledStarIcon from '@/components/icons/FilledStarIcon.vue';
  import CalendarEndIcon from '@/components/icons/CalendarEndIcon.vue';
  import CalendarStartIcon from '@/components/icons/CalendarStartIcon.vue';

  import { computed } from 'vue';
  import { format } from 'date-fns';
  import { ptBR } from 'date-fns/locale';
  import { useRouter } from 'vue-router';
  import { useI18n } from '@/composables/useI18n';
  import { IProject } from '@/interfaces/project';

  const { project, search } = defineProps<{
    project: IProject;
    search: string;
  }>();

  const emit = defineEmits<{
    toggleFave: [project: IProject];
    openMenu: [project: IProject];
    edit: [project: IProject];
    delete: [project: IProject];
  }>();

  const { t } = useI18n();
  const router = useRouter();
  const formatDate = (date: Date) => {
    // eslint-disable-next-line @stylistic/quotes
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const isFavorite = computed(() => {
    return project.isFavorite ? FilledStarIcon : EmptyStarIcon;
  });

  const redirectTo = (routeName: string, prop: string) => {
    router.push({ name: routeName, params: { id: prop } });
  };

  const placeholderLink =
    'https://s3-alpha-sig.figma.com/img/f510/4fb9/73f0af4d310303c1b6b11594c35f4f67?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSI9zTDXVce2ndCfFM6-gnto~JpTLGAMq6-XoBYosF8W9MZaanI-gN8jV5y2TOMEvizyLzrY~HE1DpEHX3B2wSJ8oH0pXS~SfEXUPabr7uaxUyHwlrcn11rMHA1Nr4pG~gozC1qUhgmTOiRxYkkbvlXo4aa4HwiScMXW01z58H7RlTkpOpx16NuOGYfWtQ8M03oR-8hqp647SsIqWWQS2PO0uTst-b3RT8mOUtedkF0x4YswdTmzi1Zop7uCsTemPb0SePxahI1r8f7TgfqfH66JfV2zKWnRc7E3lk1nmBo0WL~AnaLYQY4dXwZZqgTTdGkn5LNYcJCkjQZJffEZxQ__';

  const displayImage = computed(() => {
    return project?.image || placeholderLink;
  });

  const highlightSearch = (text: string) => {
    if (!search) return text;

    const escapedSearchTerm = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');

    return text.replace(regex, '<span class="highlight">$1</span>');
  };
</script>
<style lang="scss" scoped>
  .card-title-client-name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }

  .card-subtitle-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  .card-title-client {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }

  .card-text-date {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  .card-title-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
</style>
