<template>
  <div class="container-fluid m-0 p-0">
    <form class="form row" @submit="onSubmit" @reset.prevent="onReset">
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6">
            <c-text-field
              v-model="title"
              placeholder="Groceries, credit card..."
              :error-message="errors['title']"
              :is-validated="!errors['title'] && isUntouched"
            >
              Title
            </c-text-field>
          </div>

          <div class="col-12 col-sm-6">
            <label for="transaction_type">Type</label>

            <c-select
              v-model="payment_type"
              id="transaction_type"
              :options="paymentTypeOptions"
              label="Select type"
              size="lg"
            />

            <span>{{ errors["payment_type"] }}</span>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6">
            <label for="transactionCategory">Category</label>

            <c-select
              v-model="category"
              id="transactionCategory"
              :options="paymentCategoryOptions"
              label="Select category"
              size="lg"
            />

            <span>{{ errors["category"] }}</span>
          </div>

          <div class="col-12 col-sm-6">
            <label for="transactionValue">Value</label>

            <c-currency-input
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
          <div class="col-12">
            <label for="transactionDescription" class="form-label"
              >Description</label
            >

            <textarea
              v-model="description"
              class="description-field form-control w-100"
              id="transactionDescription"
              placeholder="A descriptive text for this transaction..."
            ></textarea>

            <span>{{ errors["description"] }}</span>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-6">
            <button
              class="btn bg-danger text-white d-sm-block w-100"
              type="reset"
              :disabled="isUntouched"
            >
              Reset
            </button>
          </div>

          <div class="col-6">
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
import { computed, watch, type PropType } from "vue";
import { useField, useForm, type FieldContext } from "vee-validate";

import type { TransactionFields } from "@/types/transaction.types";
import TransactionFormSchema from "@/utils/validation/transaction-form-schema";

import CCurrencyInput from "@/components/c-currency-input/c-currency-input.vue";
import CSelect from "@/components/c-select.vue";
import CTextField from "@/components/c-text-field.vue";

import { TRANSACTION_CATEGORIES, TRANSACTION_PAYMENT_TYPES } from "./constants";

const props = defineProps({
  modelValue: {
    type: Object as PropType<TransactionFields>,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "update:modelValue", value: TransactionFields): void;
  (e: "submit"): void;
}>();

const { handleSubmit, errors, meta, resetForm, setValues, values } = useForm({
  validationSchema: TransactionFormSchema,
  initialValues: {
    title: props.modelValue.title || "",
    payment_type: props.modelValue.payment_type || "",
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
const { value: payment_type } = useField("payment_type") as FieldContext<
  TransactionFields["payment_type"]
>;
const { value: category } = useField("category") as FieldContext<
  TransactionFields["category"]
>;

watch(
  values,
  (values) => emits("update:modelValue", values as TransactionFields),
  { deep: true }
);
watch(props.modelValue, (newValues) => setValues(newValues), { deep: true });

const onSubmit = handleSubmit(() => emits("submit"));
const onReset = () => resetForm();

const paymentTypeOptions = TRANSACTION_PAYMENT_TYPES;
const paymentCategoryOptions = TRANSACTION_CATEGORIES;
</script>

<style scoped>
.description-field {
  resize: none;
}
</style>
