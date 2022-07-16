<template>
  <section class="d-flex">
    <aside class="col-2">teste</aside>

    <transaction-table
      class="col-10"
      :payments="payments"
      :expenses="expenses"
    />
  </section>
</template>

<script setup lang="ts">
import { useTransactionStore } from "@/stores/transaction/transactionStore";
import TransactionTable from "@/components/transaction-table.vue";
import { ref } from "vue";
import type { Transaction } from "@/types/transaction.types";

const transactionStore = useTransactionStore();

const payments = ref([] as Transaction[]);
const expenses = ref([] as Transaction[]);

transactionStore.$onAction(({ name, after, store }) => {
  if (name === "fetchTransactions") {
    after(() => {
      console.log("teste");
      payments.value = store.payments;
      expenses.value = store.expenses;
    });
  }
});

transactionStore.fetchTransactions();
</script>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
