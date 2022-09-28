<template>
  <label class="wrapper">
    <div>
      <slot></slot>

      <input
        type="text"
        :class="[
          'form-control',
          {
            'is-invalid': !!props.errorMessage,
            'is-valid': !!props.errorMessage && props.isValidated,
          },
        ]"
        :name="props.name"
        :placeholder="props.placeholder"
        v-model="valueController"
      />
    </div>
  </label>

  <span v-if="props.errorMessage" class="error-message">{{
    props.errorMessage
  }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  name: {
    type: String,
    default: "text-field",
  },
  isValidated: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Placeholder...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
}>();

const valueController = computed({
  set(value: typeof props.modelValue) {
    emits("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
</script>

<style lang="scss">
.wrapper {
  margin-bottom: 16px;
}

.error-message {
  display: none;
  color: var(--bs-danger);
  margin-top: -20px;
  animation: slide-down 1s ease forwards;
}

@keyframes slide-down {
  100% {
    margin-top: 0;
    display: block;
  }
}
</style>
