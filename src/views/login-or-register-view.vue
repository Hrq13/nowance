<template>
  <div
    class="container row position-absolute top-50 start-50 translate-middle m-0 px-0 px-sm-4"
  >
    <c-login-form
      class="col-sm-10 col-md-8 col-lg-6"
      @create-account="shouldShowRegisterForm = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CLoginForm from "@/components/c-login-form.vue";

const shouldShowRegisterForm = ref(false);
</script>
