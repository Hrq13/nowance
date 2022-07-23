<template>
  <section class="d-flex">
    <aside class="col-2">teste</aside>

    <transaction-table
      class="col-10"
      :payments="payments"
      :expenses="expenses"
    />
  </section>

  <button @click="modalVisibility = !modalVisibility">toggle modal</button>

  <modal-bs-vue
    v-model="modalVisibility"
    title="Edit transaction"
    :show-primary-button="false"
    :show-secondary-button="false"
    :closable="false"
  >
    <transaction-form v-model="transactionFormData" />
  </modal-bs-vue>
</template>

<script setup lang="ts">
import { useTransactionStore } from "@/stores/transaction/transactionStore";
import TransactionTable from "@/components/transaction-table.vue";
import modalBsVue from "@/components/modal-bs.vue";
import transactionForm from "@/components/transaction-form/transaction-form.vue";
import { ref } from "vue";
import type { Transaction, TransactionFields } from "@/types/transaction.types";

const transactionStore = useTransactionStore();

const payments = ref([] as Transaction[]);
const expenses = ref([] as Transaction[]);

transactionStore.$onAction(({ name, after, store }) => {
  if (name === "fetchTransactions") {
    after(() => {
      payments.value = store.payments;
      expenses.value = store.expenses;
    });
  }
});

transactionStore.fetchTransactions();

const modalVisibility = ref(false);
const transactionFormData = ref<TransactionFields>({
  title: "",
  payment_type: "",
  category: "",
  description: "",
  value: 100,
});
</script>
