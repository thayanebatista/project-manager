<template>
  <v-text-field
    v-model="field"
    v-maska:[maskaOptions]
    variant="outlined"
    class="py-2"
    density="comfortable"
    :clearable="isNumber ?? false"
    color="primary"
    :placeholder="placeholder"
    :name="name"
    :label="label"
    :disabled="disabled"
    :error-messages="errorMessage"
    :type="inputType"
    :min="1"
    :persistent-placeholder="persistentPlaceholder"
  >
    <template #append-inner>
      <v-icon
        v-if="isPassword"
        :icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        @click="toggleVisible"
      />
    </template>
  </v-text-field>
</template>
<script setup lang="ts">
  import { vMaska } from 'maska/vue';
  import { useField } from 'vee-validate';

  import { computed, ref } from 'vue';

  const props = defineProps<{
    name: string;
    label: string;
    mask?: string[] | string;
    placeholder?: string;
    disabled?: boolean;
    limit?: number;
    isPassword?: boolean;
    isNumber?: boolean;
    isDate?: boolean;
    initialValue?: string;
    persistentPlaceholder?: boolean;
  }>();

  const { value: field, errorMessage } = useField(props.name, undefined, {
    initialValue: props.initialValue,
  });

  const maskaOptions = {
    mask: props.mask,
  };

  const visible = ref(false);
  const passwordInput = computed(() => props.isPassword && !visible.value);
  const toggleVisible = () => (visible.value = !visible.value);

  const inputType = computed(() => {
    if (passwordInput.value) {
      return 'password';
    } else {
      if (props.isNumber) {
        return 'number';
      } else if (props.isDate) {
        return 'date';
      } else {
        return 'text';
      }
    }
  });
</script>
