<template>
  <div class="p-0 mx-0">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>
            <h3 class="text-success text-wrap text-center mb-0">Payments</h3>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <c-table
              :content-data="props.payments"
              :mapped-data="currentTableDataMap"
              theme="dark"
              caption="All your payments will appear here"
              :data-masks="dataMasks"
            >
              <template #actions="{ rowData }">
                <button
                  class="btn btn-sm"
                  @click="emits('paymentSelected', (rowData) as Transaction)"
                  id="editPaymentButton"
                  ref="editPaymentButtonRef"
                  data-bs-toggle="tooltip"
                  title="Edit this item"
                >
                  <i class="bi-gear text-white"></i>
                </button>
              </template>
            </c-table>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm">
      <thead>
        <tr>
          <th>
            <h3 class="text-danger text-wrap text-center mb-0">Expenses</h3>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <c-table
              :content-data="props.expenses"
              :mapped-data="currentTableDataMap"
              theme="dark"
              caption="All your expenses will appear here"
              :data-masks="dataMasks"
            >
              <template #actions="{ rowData }">
                <button
                  class="btn btn-sm"
                  id="editExpenseButton"
                  @click="emits('expenseSelected', (rowData) as Transaction)"
                  ref="editExpenseButtonRef"
                  data-bs-toggle="tooltip"
                  title="Edit this item"
                >
                  <i class="bi-gear text-white"></i>
                </button>
              </template>
            </c-table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Transaction } from "@/types/transaction.types";
import formatCurrencyData from "@/utils/format-currency-data";
import millisecondsToDate from "@/utils/milliseconds-to-date";
import { computed, type PropType } from "vue";
import CTable from "@/components/c-table-vue.vue";

const props = defineProps({
  payments: {
    type: Array as PropType<Transaction[]>,
    default: () => [],
  },
  expenses: {
    type: Array as PropType<Transaction[]>,
    default: () => [],
  },
  customTableDataMap: {
    type: Object,
    default: () => ({}),
  },
});

const emits = defineEmits(["paymentSelected", "expenseSelected"]);

const defaultTableDataMap = {
  Title: "title",
  Description: "description",
  Type: "payment_type",
  Category: "category",
  Value: "value",
  Date: "updated_at",
};

const dataMasks = {
  value: formatCurrencyData,
  updated_at: millisecondsToDate,
};

const currentTableDataMap = computed(() => {
  if (!Object.keys(props.customTableDataMap).length) {
    return defaultTableDataMap;
  }

  return props.customTableDataMap;
});
</script>
