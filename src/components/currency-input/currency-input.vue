<template>
  <input
    :class="props.customClasses"
    ref="inputRef"
    type="text"
    :placeholder="props.placeholder"
  />
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import {
  useCurrencyInput,
  type CurrencyInputOptions,
} from "vue-currency-input";

const currencyDefaultMask = {
  locale: "en-US",
  currency: "USD",
  currencyDisplay: "symbol",
  valueRange: {
    min: 0,
    max: 100000,
  },
  precision: 2,
  hideCurrencySymbolOnFocus: true,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  autoSign: true,
  useGrouping: true,
  accountingSign: false,
} as CurrencyInputOptions;

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

const { inputRef } = useCurrencyInput(props.options || currencyDefaultMask);
</script>
