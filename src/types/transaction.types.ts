import type { Timestamp } from "firebase/firestore";

export type TransactionCategories =
  | "travel"
  | "home"
  | "health"
  | "shopping"
  | "work"
  | "";
export type TransactionPaymentTypes = "credit" | "debit" | "";

export interface TransactionMetaData {
  id: string;
  created_at: Timestamp;
  updated_at?: Timestamp;
}

export interface TransactionFields {
  title: string;
  description?: string;
  paymentType: TransactionPaymentTypes;
  category: TransactionCategories;
  value: number;
}

export interface Transaction extends TransactionMetaData, TransactionFields {}
