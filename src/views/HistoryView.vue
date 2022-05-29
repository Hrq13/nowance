<template>
  <transaction-table :payments="payments" :expenses="expenses" />
</template>

<script setup lang="ts">
import TransactionTable from "@/components/TransactionTable.vue";

const payments = [
  {
    title: "Salary",
    description: "Same as last month",
    type: "Debit",
    category: "Salary",
    value: 6300,
    updatedAt: new Date().toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const expenses = [
  {
    title: "Dentist",
    description: "Routine check",
    type: "Credit",
    category: "Health",
    value: 320,
    updatedAt: new Date().toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];
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
