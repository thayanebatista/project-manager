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
        {{ t('common.required') }}
      </span>
    </div>
    <v-date-input
      v-model="parsedStartDate"
      clearable
      prepend-icon=""
      placeholder="dd/mm/aaaa"
      density="compact"
      variant="outlined"
      color="primary"
      bg-color="white"
      :append-inner-icon="CalendarIcon"
      :rules="setFieldRules"
      :disabled="disabled"
      :cancel-text="t('common.cancel')"
      :ok-text="t('common.ok')"
      :error-messages="errorMessage"
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

  const { t } = useI18n();

  const { value: field, errorMessage } = useField(props.name, undefined, {
    initialValue: props.initialValue,
  });

  const parsedStartDate = computed({
    get: () => (field.value ? new Date(field.value) : null),
    set: value => {
      field.value = value ? value.toISOString() : '';
    },
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
