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
    <v-text-field
      v-model="field"
      color="primary"
      variant="outlined"
      density="compact"
      bg-color="white"
      :rules="setFieldRules"
      :disabled="disabled"
      :placeholder="placeholder"
      :error-messages="errorMessage"
      class="text-imput"
    />
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useField } from 'vee-validate';
  import { useI18n } from '@/composables/useI18n';

  const props = defineProps<{
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    initialValue?: string;
  }>();

  const { t } = useI18n();

  const { value: field, errorMessage } = useField(props.name, undefined, {
    initialValue: props.initialValue,
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
