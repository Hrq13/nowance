<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-block text-center">
            <h3>Log in</h3>
          </div>

          <form @submit.prevent="tryToLogin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                aria-describedby="email_warn"
                autocomplete="email"
                v-model="email"
                placeholder="your@email.com"
              />

              <label for="loginEmail">Email</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                placeholder="Password"
                v-model="password"
              />

              <label for="loginPassword" class="form-label">Password</label>
            </div>

            <div class="d-flex justify-content-between mb-3 form-check">
              <div>
                <input
                  v-model="rememberEmail"
                  type="checkbox"
                  class="form-check-input"
                  id="remember-user"
                />

                <label class="form-check-label" for="remember-user"
                  >Remember me</label
                >
              </div>

              <a role="button" @click="emits('createAccount')"
                >Create account</a
              >
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["createAccount"]);

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
