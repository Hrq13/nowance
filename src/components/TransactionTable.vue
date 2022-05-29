<template>
  <div class="table-responsive p-0 mx-0 w-100">
    <h3 class="bg-secondary text-wrap text-center mb-0">Payments</h3>

    <table-vue
      :content-data="props.payments"
      :mapped-data="currentTableDataMap"
      theme="light"
    >
      <template #actions="{ rowData }">
        <button class="btn btn-sm" @click="logActionClick(rowData)">
          <i class="bi-gear"></i>
        </button>
      </template>
    </table-vue>

    <h3 class="bg-secondary text-wrap text-center mb-0">Expenses</h3>

    <table-vue
      :content-data="props.expenses"
      :mapped-data="currentTableDataMap"
      theme="light"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import TableVue from "./TableVue.vue";

const props = defineProps({
  payments: {
    type: Array,
    default: () => [],
  },
  expenses: {
    type: Array,
    default: () => [],
  },
  customTableDataMap: {
    type: Object,
    default: () => ({}),
  },
});

const defaultTableDataMap = reactive({
  Title: "title",
  Description: "description",
  Type: "type",
  Category: "category",
  Value: "value",
  Date: "updatedAt",
});

const currentTableDataMap = computed(() => {
  if (!Object.keys(props.customTableDataMap).length) {
    return defaultTableDataMap;
  }

  return props.customTableDataMap;
});

const logActionClick = (data) => {
  console.log(data.id);
};
</script>
