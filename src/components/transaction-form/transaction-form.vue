<template>
  <div class="container-fluid m-0 p-0">
    <form class="form row" @submit="onSubmit" @reset.prevent="onReset">
      <div class="col-12 mb-3">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <label for="transactionTitle">Title</label>

            <input
              type="text"
              class="form-control"
              id="transactionTitle"
              placeholder="groceries, medicine..."
              v-model="title"
            />

            <span>{{ errors["title"] }}</span>
          </div>

          <div class="col-12 col-sm-6 col-md-5 col-lg-4">
            <label for="transactionType">Type</label>

            <select-vue
              v-model="paymentType"
              id="transactionType"
              :options="paymentTypeOptions"
              label="Select type"
              size="lg"
            />

            <span>{{ errors["paymentType"] }}</span>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <label for="transactionCategory">Category</label>

            <select-vue
              v-model="category"
              id="transactionCategory"
              :options="paymentCategoryOptions"
              label="Select category"
              size="lg"
            />

            <span>{{ errors["category"] }}</span>
          </div>

          <div class="col-12 col-sm-6 col-md-5 col-lg-4">
            <label for="transactionValue">Value</label>

            <CurrencyInput
              class="form-control"
              id="transactionValue"
              placeholder="$123.45"
              v-model="value"
            />

            <span>{{ errors["value"] }}</span>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 mb-3 mb-sm-0">
            <label for="transactionDescription" class="form-label"
              >Description</label
            >

            <textarea
              class="form-control w-100"
              id="transactionDescription"
              placeholder="A descriptive text for this transaction..."
              v-model="description"
            ></textarea>

            <span>{{ errors["description"] }}</span>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-6 col-md-5 col-lg-4 mb-3 mb-sm-0">
            <button
              class="btn bg-danger text-white d-sm-block w-100"
              type="reset"
              :disabled="isUntouched"
            >
              Reset
            </button>
          </div>

          <div class="col-6 col-md-5 col-lg-4">
            <button
              class="btn bg-dark text-white d-sm-block w-100"
              type="submit"
              :disabled="hasErrors"
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
import { computed, nextTick, watch, type PropType } from "vue";
import { useField, useForm, type FieldContext } from "vee-validate";

import type { TransactionFields } from "@/types/transaction.types";

import TransactionFormSchema from "@/utils/validation/transaction-form-schema";

import { TRANSACTION_CATEGORIES, TRANSACTION_PAYMENT_TYPES } from "./constants";

import CurrencyInput from "@/components/currency-input/currency-input.vue";
import SelectVue from "@/components/select-vue.vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<TransactionFields>,
    required: true,
  },
});
const emits = defineEmits(["update:modelValue", "submit", "reset"]);

const { handleSubmit, errors, meta, resetForm } = useForm({
  validationSchema: TransactionFormSchema,
  initialValues: {
    title: props.modelValue.title || "",
    paymentType: props.modelValue.paymentType || "",
    category: props.modelValue.category || "",
    value: props.modelValue.value || 0,
    description: props.modelValue.description || "",
  },
});

const hasErrors = computed(() => !meta.value.valid);
const isUntouched = computed(() => !meta.value.dirty);

const { value: title } = useField("title") as FieldContext<
  TransactionFields["title"]
>;
const { value: description } = useField("description") as FieldContext<
  TransactionFields["description"]
>;
const { value: value } = useField("value") as FieldContext<
  TransactionFields["value"]
>;
const { value: paymentType } = useField("paymentType") as FieldContext<
  TransactionFields["paymentType"]
>;
const { value: category } = useField("category") as FieldContext<
  TransactionFields["category"]
>;

const computedTransactionFields = computed(() => ({
  title: title.value,
  paymentType: paymentType.value,
  category: category.value,
  value: value.value,
  description: description.value,
}));
watch(
  computedTransactionFields,
  (value) => {
    emits("update:modelValue", value);
  },
  { deep: true }
);

const onSubmit = handleSubmit(() => emits("submit"));
const onReset = () => emits("reset", resetForm);

const paymentTypeOptions = TRANSACTION_PAYMENT_TYPES;
const paymentCategoryOptions = TRANSACTION_CATEGORIES;
</script>
