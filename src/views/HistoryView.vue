<template>
  <h1>HISTORY</h1>

  <table-vue
    :content-data="transactions"
    :mapped-data="{
      Title: 'title',
      Description: 'description',
      Type: 'type',
      Category: 'category',
      Value: 'value',
      Date: 'updatedAt',
    }"
    theme="warning"
  />
</template>

<script setup lang="ts">
import TableVue from "@/components/TableVue.vue";

const transactions = [
  {
    title: "teste 1",
    description: "description 1",
    type: "type 1",
    category: "category 1",
    value: 15.45,
    updatedAt: new Date().toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
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
