<template>
  <div class="container mx-auto">
    <transaction-form v-model="transaction" />
  </div>
</template>

<script setup lang="ts">
import TransactionForm from "@/components/TransactionForm.vue";
import type { TransactionFields } from "@/types/Transaction.types";
import { reactive } from "vue";

const transaction = reactive<TransactionFields>({
  title: "My new transaction",
  category: "health",
  paymentType: "credit",
  value: 0,
  description: "",
});
</script>
