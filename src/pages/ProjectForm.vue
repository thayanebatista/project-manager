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
        {{ pageTitle }}
      </span>
    </div>
    <v-card
      variant="outlined"
      class="border-thin d-flex flex-column py-13 ga-10"
    >
      <v-card-text>
        <form class="d-flex flex-column">
          <v-row class="d-flex flex-column align-center">
            <v-col
              cols="6"
              class="d-flex flex-column w-100"
            >
              <FormInput
                name="name"
                required
                :label="t('pages.ProjectForm.form.name')"
              />
              <FormInput
                name="client"
                required
                :label="t('pages.ProjectForm.form.client')"
              />
              <div class="d-flex flex-inline ga-10">
                <v-col>
                  <DateImput
                    name="startDate"
                    :label="t('pages.ProjectForm.form.startDate')"
                    required
                  />
                </v-col>
                <v-col>
                  <DateImput
                    name="endDate"
                    :label="t('pages.ProjectForm.form.endDate')"
                    required
                  />
                </v-col>
              </div>
            </v-col>
            <v-col
              cols="6"
              class="d-flex justify-center w-100"
            >
              <PhotoUploader
                v-model:image="avatar"
                :label="t('pages.ProjectForm.form.photoUploader')"
                @change-photo="onChangePhoto"
              />
            </v-col>
          </v-row>
        </form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center w-100">
        <AppButton
          name="new-project"
          type="submit"
          :text="t('common.save')"
          class="w-50"
          :disabled="isEmptyOrUndefined"
          @click="onSubmit"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
  import AppButton from '@/components/AppButton.vue';
  import DateImput from '@/components/inputs/DateInput.vue';
  import FormInput from '@/components/inputs/FormInput.vue';
  import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue';
  import PhotoUploader from '@/components/inputs/PhotoUploader.vue';

  import { useForm } from 'vee-validate';
  import { useRouter } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import { useI18n } from '@/composables/useI18n';
  import { useProjectsStore } from '@/store/projects';
  import { INewProjectForm } from '@/interfaces/project';
  import { newProjectSchema } from '@/schema/newProjectSchema';

  const props = defineProps<{
    id?: string;
  }>();

  const router = useRouter();
  const { t } = useI18n();

  const { values, handleSubmit, setValues, setFieldValue } =
    useForm<INewProjectForm>({
      validationSchema: newProjectSchema,
    });

  const avatar = ref<string | null>(null);

  const isEmptyOrUndefined = computed(() => {
    return Object.values(values).every(value => value === undefined);
  });
  const pageTitle = computed(() =>
    props.id ? t('pages.ProjectForm.editTitle') : t('pages.ProjectForm.title'),
  );

  const projectsStore = useProjectsStore();

  const onChangePhoto = (image: string | null) => {
    setFieldValue('image', image);
  };

  const onSubmit = handleSubmit(value => {
    if (!value) return;

    if (props.id) {
      projectsStore.editProject(props.id, value);
    } else {
      projectsStore.createNewProject(value);
    }

    router.push({ name: 'Home' });
  });

  const redirectTo = (name: string) => {
    router.push({ name });
  };

  onMounted(() => {
    if (props.id) {
      const project = projectsStore.getProject(props.id);
      if (project) {
        setValues({
          ...project,
          startDate: project.startDate ? new Date(project.startDate) : '',
          endDate: project.endDate ? new Date(project.endDate) : '',
        });

        avatar.value = project.image || null;
      }
    }
  });
</script>
