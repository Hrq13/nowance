type TransactionTypes = "travel" | "home" | "health" | "shopping";

export interface Transaction {
  id: string;
  title: string;
  description?: string;
  type: TransactionTypes;
  createdAt: number;
  updatedAt?: number;
}
