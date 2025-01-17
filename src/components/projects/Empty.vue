<template>
  <v-card
    class="no-project d-flex flex-column align-center justify-center h-100"
  >
    <v-card-title class="text-default-title"> Nenhum Projeto </v-card-title>
    <v-card-subtitle class="text-default-subtitle">
      Clique no botão abaixo para criar o primeiro e gerenciá-lo.
    </v-card-subtitle>
    <v-card-actions class="pt-5">
      <AppButton
        name="new-project"
        text="Novo Projeto"
      >
        <template #prepend>
          <PlusCircleIcon />
        </template>
      </AppButton>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue';
  import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';
</script>
