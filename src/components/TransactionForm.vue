<template>
  <div class="container-fluid">
    <form class="form row">
      <div class="col-12 mb-3">
        <div class="row flex">
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <label for="transactionTitle">Title</label>

            <input
              type="text"
              class="form-control"
              id="transactionTitle"
              placeholder="groceries, medicine..."
              v-model="transaction.title"
            />
          </div>

          <div class="col-12 col-sm-6 col-md-5 col-lg-4">
            <label for="transactionType">Type</label>

            <select-vue
              v-model="transaction.paymentType"
              id="transactionType"
              :options="paymentTypeOptions"
              label="Select type"
              size="lg"
            />
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <label for="transactionCategory">Category</label>

            <select-vue
              v-model="transaction.category"
              id="transactionCategory"
              :options="paymentCategoryOptions"
              label="Select category"
              size="lg"
            />
          </div>

          <div class="col-12 col-sm-6 col-md-5 col-lg-4">
            <label for="transactionValue">Value</label>

            <CurrencyInput
              class="form-control"
              id="transactionValue"
              placeholder="$123.45"
              v-model="transaction.value"
            />
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8 mb-3 mb-sm-0">
            <label for="transactionDescription" class="form-label"
              >Description</label
            >

            <textarea
              class="form-control w-100"
              id="transactionDescription"
              placeholder="A descriptive text for this transaction..."
              v-model="transaction.description"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <button
              class="btn bg-secondary text-white d-sm-block w-100"
              @click="emits('reset')"
            >
              Reset
            </button>
          </div>

          <div class="col-12 col-sm-6 col-md-5 col-lg-4">
            <button
              class="btn bg-dark text-white d-sm-block w-100"
              @click="emits('submit')"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { SelectOption } from "@/types/SelectOptions.types";
import type {
  TransactionPaymentTypes,
  TransactionCategories,
  TransactionFields,
} from "@/types/Transaction.types";

import { reactive, ref, type PropType } from "vue";
import SelectVue from "./SelectVue.vue";
import CurrencyInput from "./CurrencyInput.vue";

const props = defineProps({
  defaultValues: {
    type: Object as PropType<Partial<TransactionFields>>,
  },
});
const emits = defineEmits(["reset", "submit"]);

interface PaymentTypeOption extends SelectOption {
  value: TransactionPaymentTypes;
}

interface PaymentCategoryOption extends SelectOption {
  value: TransactionCategories;
}

const paymentTypeOptions = ref<PaymentTypeOption[]>([
  {
    label: "Credit",
    value: "credit",
  },
  {
    label: "Debit",
    value: "debit",
  },
]);

const paymentCategoryOptions = ref<PaymentCategoryOption[]>([
  {
    label: "Health",
    value: "health",
  },
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Shopping",
    value: "shopping",
  },
  {
    label: "Travelling",
    value: "travel",
  },
]);

let transaction = reactive<TransactionFields>({
  title: props.defaultValues?.title || "",
  category: props.defaultValues?.category || "",
  paymentType: props.defaultValues?.paymentType || "",
  description: props.defaultValues?.description,
  value: props.defaultValues?.value || 0,
});
</script>
