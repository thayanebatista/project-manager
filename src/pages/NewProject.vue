<template>
  <v-container class="h-100 py-12">
    <div class="d-flex flex-column pb-6 ga-4">
      <div>
        <v-btn
          variant="text"
          size="small"
          color="primary"
          class="pa-0"
          @click="redirectTo('Home')"
        >
          <v-icon :icon="ArrowLeftIcon" />
          <span class="text-caption">
            {{ t('common.back') }}
          </span>
        </v-btn>
      </div>
      <span class="text-title-page text-page-title">
        {{ t('pages.newProject.title') }}
      </span>
    </div>
    <v-card
      variant="outlined"
      class="border-thin d-flex flex-column py-13 ga-10"
    >
      <v-cart-text>
        <form class="d-flex flex-column">
          <v-row class="d-flex flex-column align-center">
            <v-col
              cols="6"
              class="d-flex flex-column w-100"
            >
              <FormImput
                name="name"
                required
                label="Nome do Projeto"
              />
              <FormImput
                name="client"
                required
                label="Cliente"
              />
              <div class="d-flex flex-inline ga-10">
                <v-col>
                  <DateImput
                    name="startDate"
                    label="Data de Inicio"
                    required
                  />
                </v-col>
                <v-col>
                  <DateImput
                    name="endDate"
                    label="Data de Final"
                    required
                  />
                </v-col>
              </div>
            </v-col>
            <v-col
              cols="6"
              class="d-flex justify-center w-100"
            >
              <PhotoUploader label="Capa do Projeto" />
            </v-col>
          </v-row>
        </form>
      </v-cart-text>
      <v-card-actions class="d-flex justify-center w-100">
        <AppButton
          name="new-project"
          type="submit"
          text="Salvar"
          class="w-50"
          :disable="!values"
          @click="onSubmit"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
  import AppButton from '@/components/AppButton.vue';
  import DateImput from '@/components/inputs/DateInput.vue';
  import FormImput from '@/components/inputs/FormInput.vue';
  import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue';
  import PhotoUploader from '@/components/inputs/PhotoUploader.vue';

  import { useForm } from 'vee-validate';
  import { useRouter } from 'vue-router';
  import { useI18n } from '@/composables/useI18n';
  import { INewProjectForm } from '@/interfaces/project';
  import { newProjectSchema } from '@/schema/newProjectSchema';

  const router = useRouter();
  const { t } = useI18n();
  const { values, handleSubmit } = useForm<INewProjectForm>({
    validationSchema: newProjectSchema,
  });

  const onSubmit = handleSubmit(({ client, endDate, name, startDate }) => {
    console.log({ client, endDate, name, startDate });
  });

  const redirectTo = (name: string) => {
    router.push({ name });
  };
</script>
