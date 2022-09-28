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
  created_at: number;
  updated_at?: number;
}

export interface TransactionFields {
  title: string;
  description?: string;
  payment_type: TransactionPaymentTypes;
  category: TransactionCategories;
  value: number;
}

export type RawFirestoreTransaction = Transaction & {
  created_at: Timestamp;
  updated_at: Timestamp;
  value: string;
};

export interface Transaction extends TransactionMetaData, TransactionFields {}
