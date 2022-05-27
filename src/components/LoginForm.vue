<template>
  <div class="card p-4 w-50" style="max-width: 600px">
    <form @submit.prevent="tryToLogin">
      <div class="mb-3">
        <label for="login-email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="login-email"
          aria-describedby="email_warn"
          autocomplete="email"
          v-model="email"
        />
        <div id="email_warn" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="login-password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="login-password"
          v-model="password"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          v-model="rememberEmail"
          type="checkbox"
          class="form-check-input"
          id="remember-user"
        />
        <label class="form-check-label" for="remember-user">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const rememberEmail = ref(true);

const tryToLogin = async () => {
  return new Promise((resolve, reject) => {
    if (email.value === "teste@gmail.com" && password.value === "123456") {
      setTimeout(() => {
        const payload = {
          email: email.value,
          password: password.value,
          remember_email: rememberEmail.value,
        };

        console.info("[SUCCESS] User has logged in.");
        console.info({ payload });
        resolve({
          email: email.value,
          password: password.value,
          remember_email: rememberEmail.value,
        });
      }, 1000);
    } else reject("[ERROR] Email or password is not valid.");
  });
};
</script>
