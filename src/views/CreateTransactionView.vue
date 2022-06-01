<template>
  <div class="container mx-auto">
    <h3 class="text-sm-center d-block my-4">Create new transaction</h3>

    <transaction-form v-model="transaction" />
  </div>
</template>

<script setup lang="ts">
import TransactionForm from "@/components/TransactionForm/TransactionForm.vue";
import type { TransactionFields } from "@/types/Transaction.types";
import { ref } from "vue";

const transaction = ref<TransactionFields>({
  title: "My new transaction",
  category: "health",
  paymentType: "credit",
  value: 0,
  description: "",
});
</script>
