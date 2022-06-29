<template>
  <input
    ref="inputRef"
    type="text"
    :placeholder="props.placeholder"
    :class="props.customClasses"
  />
</template>

<script setup lang="ts">
import { watch } from "vue";
import type { PropType } from "vue";
import {
  useCurrencyInput,
  type CurrencyInputOptions,
} from "vue-currency-input";

import { currencyDefaultMask } from "./constants";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  options: {
    type: Object as PropType<CurrencyInputOptions | null>,
    default: () => null,
  },
  customClasses: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

watch(
  () => props.modelValue,
  () => setValue(props.modelValue)
);

const { inputRef, setValue } = useCurrencyInput(
  props.options || currencyDefaultMask
);
</script>
