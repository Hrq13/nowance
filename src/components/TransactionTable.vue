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
            <table-vue
              :content-data="props.payments"
              :mapped-data="currentTableDataMap"
              theme="dark"
              caption="All your payments will appear here"
            >
              <template #actions="{ rowData }">
                <button
                  class="btn btn-sm"
                  @click="logActionClick(rowData)"
                  ref="editPaymentButtonRef"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="<b>Edit this item</b>"
                >
                  <i class="bi-gear text-white"></i>
                </button>
              </template>
            </table-vue>
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
            <table-vue
              :content-data="props.expenses"
              :mapped-data="currentTableDataMap"
              theme="dark"
              caption="All your expenses will appear here"
            >
              <template #actions="{ rowData }">
                <button
                  class="btn btn-sm"
                  @click="logActionClick(rowData)"
                  ref="editExpenseButtonRef"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="<b>Edit this item</b>"
                >
                  <i class="bi-gear text-white"></i>
                </button>
              </template>
            </table-vue>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import TableVue from "./TableVue.vue";
import { Tooltip } from "bootstrap";

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

const editPaymentButtonRef = ref(null);
const editExpenseButtonRef = ref(null);

onMounted(() => {
  if (editPaymentButtonRef.value) new Tooltip(editPaymentButtonRef.value);
  if (editExpenseButtonRef.value) new Tooltip(editExpenseButtonRef.value);
});
</script>

<style lang="scss">
.tooltip {
  & .tooltip-inner {
    background: var(--bs-primary);
  }

  & .tooltip-arrow:before {
    border-top-color: var(--bs-primary);
  }
}
</style>
