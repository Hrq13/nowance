<template>
  <div
    :class="['modal fade', { show: props.modelValue }]"
    id="modal-bs"
    ref="modalRef"
    tabindex="-1"
    :style="{ display: props.modelValue ? 'block;' : 'none;' }"
    aria-labelledby="modal-title"
    :aria-hidden="!props.modelValue"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h5 class="modal-title" id="modal-title">{{ props.title }}</h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </slot>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>

        <div
          v-if="props.showPrimaryButton || props.showSecondaryButton"
          class="modal-footer"
        >
          <slot name="footer">
            <button
              v-if="props.showSecondaryButton"
              type="button"
              class="btn btn-secondary"
              @click="emits('clicked:secondaryButton')"
            >
              {{ props.secondaryButtonLabel }}
            </button>

            <button
              v-if="props.showPrimaryButton"
              type="button"
              class="btn btn-primary"
              @click="emits('clicked:primaryButton')"
            >
              {{ props.primaryButtonLabel }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import Modal from "bootstrap/js/dist/modal";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  closable: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "Modal title",
  },
  showPrimaryButton: {
    type: Boolean,
    default: true,
  },
  primaryButtonLabel: {
    type: String,
    default: "Primary button",
  },
  showSecondaryButton: {
    type: Boolean,
    default: true,
  },
  secondaryButtonLabel: {
    type: String,
    default: "Secondary button",
  },
});

const emits = defineEmits(["clicked:primaryButton", "clicked:secondaryButton"]);

const modalRef = ref<Element | null>(null);
const modalInstance = ref<Modal | null>();

onMounted(() => {
  if (modalRef.value) {
    modalInstance.value = new Modal(modalRef.value, {
      backdrop: props.closable ? true : "static",
      keyboard: props.closable ? true : false,
    });
  }
});

watch(
  () => props.modelValue,
  () => modalInstance.value?.toggle(),
  {
    immediate: true,
  }
);
</script>
