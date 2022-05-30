<template>
  <select
    :class="['form-select', `forms-select-${props.size}`]"
    :aria-label="props.label"
  >
    <option selected disabled>
      {{ props.label }}
    </option>

    <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
      :selected="modelValue === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { SelectOption } from "@/types/SelectOptions.types";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg"].includes(value),
  },
});
</script>

<style scoped>
select:disabled {
  color: var(--bs-gray);
}
</style>
