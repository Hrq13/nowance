<template>
  <button
    type="button"
    class="btn btn-primary"
    :aria-label="toggleButtonLabel"
    data-bs-toggle="modal"
    data-bs-target="#my-modal"
    @click="toggleModal"
  >
    {{ toggleButtonLabel }}
  </button>

  <div class="modal" id="my-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            You’ve successfully created a project with
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>
            <a target="_blank" href="https://vitejs.dev/">Vite</a> +
            <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
            <h1 class="green">{{ msg }}</h1>
          </h3>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const isModalOpen = ref(false);
const toggleButtonLabel = computed(() =>
  isModalOpen.value ? "Close" : "Open"
);

function toggleModal() {
  isModalOpen.value = !!isModalOpen.value;
}
</script>
