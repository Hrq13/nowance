import type {
  TransactionCategories,
  TransactionPaymentTypes,
} from "@/types/transaction.types";
import { string, number, object } from "yup";

const allowedPaymentTypes: Array<TransactionPaymentTypes> = ["credit", "debit"];
const allowedCategories: Array<TransactionCategories> = [
  "health",
  "home",
  "travel",
  "shopping",
];

const schema = object({
  title: string().required().min(3).max(15),
  payment_type: string().required().oneOf(allowedPaymentTypes),
  category: string().required().oneOf(allowedCategories),
  value: number().required().min(1).max(100000),
  description: string().notRequired().max(35),
});

export default schema;
