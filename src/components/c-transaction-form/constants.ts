import type {
  PaymentCategoryOption,
  PaymentTypeOption,
} from "@/types/transaction-form.types";

export const TRANSACTION_PAYMENT_TYPES: Array<PaymentTypeOption> = [
  {
    label: "Credit",
    value: "credit",
  },
  {
    label: "Debit",
    value: "debit",
  },
];

export const TRANSACTION_CATEGORIES: Array<PaymentCategoryOption> = [
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
];

export interface ExposeInterface {
  hasErrors: boolean;
  isUntouched: boolean;
  resetForm: CallableFunction;
}
