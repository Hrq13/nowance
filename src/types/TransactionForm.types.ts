import type { SelectOption } from "./SelectOptions.types";
import type {
  TransactionCategories,
  TransactionPaymentTypes,
} from "./Transaction.types";

export interface PaymentTypeOption extends SelectOption {
  value: TransactionPaymentTypes;
}

export interface PaymentCategoryOption extends SelectOption {
  value: TransactionCategories;
}
