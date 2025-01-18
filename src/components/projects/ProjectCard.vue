<template>
  <v-card
    variant="elevated"
    width="300"
    class="d-flex flex-column rounded-xl border border-thin ga-4"
  >
    <v-img
      cover
      :src="placeholderLink"
      :alt="project.name || 'placeholder'"
    />
    <v-card-title class="d-flex flex-column">
      <span class="card-title-name text-title">
        {{ project.name }}
      </span>
      <div>
        <span class="card-title-client text-card-title">
          {{ t('Cliente: ') }}
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
          {{ formatDate(project.startDate) }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import CalendarEndIcon from '@/components/icons/CalendarEndIcon.vue';
  import CalendarStartIcon from '@/components/icons/CalendarStartIcon.vue';

  import { format } from 'date-fns';
  import { ptBR } from 'date-fns/locale';
  import { useI18n } from '@/composables/useI18n';
  import { IProject } from '@/interfaces/project';

  defineProps<{
    project: IProject;
  }>();
  const { t } = useI18n();
  const formatDate = (date: string) => {
    // eslint-disable-next-line @stylistic/quotes
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const placeholderLink =
    'https://s3-alpha-sig.figma.com/img/f510/4fb9/73f0af4d310303c1b6b11594c35f4f67?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSI9zTDXVce2ndCfFM6-gnto~JpTLGAMq6-XoBYosF8W9MZaanI-gN8jV5y2TOMEvizyLzrY~HE1DpEHX3B2wSJ8oH0pXS~SfEXUPabr7uaxUyHwlrcn11rMHA1Nr4pG~gozC1qUhgmTOiRxYkkbvlXo4aa4HwiScMXW01z58H7RlTkpOpx16NuOGYfWtQ8M03oR-8hqp647SsIqWWQS2PO0uTst-b3RT8mOUtedkF0x4YswdTmzi1Zop7uCsTemPb0SePxahI1r8f7TgfqfH66JfV2zKWnRc7E3lk1nmBo0WL~AnaLYQY4dXwZZqgTTdGkn5LNYcJCkjQZJffEZxQ__';
</script>
<style lang="scss" scoped>
  .card-title-client-name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
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
</style>
