<template>
  <section class="d-flex">
    <aside class="col-2">teste</aside>

    <c-transaction-table
      class="col-10"
      :payments="payments"
      :expenses="expenses"
      @payment-selected="openModalToEdit"
      @expense-selected="openModalToEdit"
    />
  </section>

  <button @click="modalVisibility = true">toggle modal</button>

  <c-modal
    v-model="modalVisibility"
    title="Edit transaction"
    :show-primary-button="false"
    :show-secondary-button="false"
    :closable="false"
  >
    <c-transaction-form v-model="transactionFormData" />

    <div class="col-12 mt-4">
      <p class="mt-0 mb-2">
        Created at: {{ millisecondsToDate(transactionFormData.created_at) }}
      </p>

      <p v-if="transactionFormData.updated_at" class="ma-0">
        Last updated at:
        {{ millisecondsToDate(transactionFormData.updated_at) }}
      </p>
    </div>
  </c-modal>
  <br /><br />
  {{ transactionFormData }}
</template>

<script setup lang="ts">
import { useTransactionStore } from "@/stores/transaction/transactionStore";
import CTransactionTable from "@/components/c-transaction-table.vue";
import CModal from "@/components/c-modal.vue";
import CTransactionForm from "@/components/c-transaction-form/c-transaction-form.vue";
import { ref, watch } from "vue";
import type { Transaction } from "@/types/transaction.types";
import millisecondsToDate from "@/utils/milliseconds-to-date";

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
const initialTransactionFormValue: Transaction = {
  id: "",
  title: "",
  payment_type: "",
  category: "",
  description: "",
  value: 0,
  created_at: 0,
  updated_at: 0,
};
const transactionFormData = ref<Transaction>(initialTransactionFormValue);

watch(modalVisibility, (value) => {
  if (!value) {
    transactionFormData.value = initialTransactionFormValue;
  }
});

const openModalToEdit = (transaction: Transaction) => {
  transactionFormData.value = transaction;
  modalVisibility.value = true;
};
</script>
