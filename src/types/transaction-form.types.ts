import type { SelectOption } from "./select-options.types";
import type {
  TransactionCategories,
  TransactionPaymentTypes,
} from "./transaction.types";

export interface PaymentTypeOption extends SelectOption {
  value: TransactionPaymentTypes;
}

export interface PaymentCategoryOption extends SelectOption {
  value: TransactionCategories;
}
