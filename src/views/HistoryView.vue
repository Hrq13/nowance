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
import TransactionTable from "@/components/TransactionTable.vue";

const payments = [
  {
    id: "78asd-das58d4-as5d64-a9xd6",
    title: "Salary",
    description: "Same as last month",
    type: "Debit",
    category: "Salary",
    value: 6300,
    updatedAt: new Date().toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const expenses = [
  {
    id: "d8s2-ag8w9sk-g21i7-mhg25",
    title: "Dentist",
    description: "Routine check",
    type: "Credit",
    category: "Health",
    value: 320,
    updatedAt: new Date().toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
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
