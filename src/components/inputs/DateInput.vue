<template>
  <div class="d-flex flex-column ga-1">
    <div>
      <span class="text-imput-label">
        {{ label }}
      </span>
      <span
        v-if="required"
        class="text-required-field text-caption"
      >
        (Obrigatório)
      </span>
    </div>
    <v-date-input
      v-model="field"
      :value="formattedDate"
      prepend-icon=""
      placeholder="dd/mm/aaaa"
      density="compact"
      variant="outlined"
      color="primary"
      bg-color="white"
      :append-inner-icon="icon"
      :rules="setFieldRules"
      :disabled="disabled"
      :error-messages="errorMessage"
      class="imput"
    />
  </div>
</template>
<script setup lang="ts">
  import CalendarIcon from '@/components/icons/CalendarIcon.vue';

  import { computed } from 'vue';
  import { useField } from 'vee-validate';
  import { useI18n } from '@/composables/useI18n';

  const props = defineProps<{
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    initialValue?: string;
  }>();

  const icon = CalendarIcon;
  const { t } = useI18n();

  const { value: field, errorMessage } = useField(props.name, undefined, {
    initialValue: props.initialValue,
  });

  const formattedDate = computed(() => {
    if (!field.value) return '';
    const date = new Date(field.value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  });

  const setFieldRules = computed(() => {
    const rules = [];
    if (props.required) {
      rules.push((value: string) => {
        if (!value) return t('errors.requiredField', { field: props.label });
        return true;
      });
    }

    return rules;
  });
</script>
