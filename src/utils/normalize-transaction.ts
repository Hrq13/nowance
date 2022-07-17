import type {
  RawTransactionFromFirestore,
  Transaction,
} from "@/types/transaction.types";

export default function (
  rawTransaction: RawTransactionFromFirestore
): Transaction {
  const normalizedTransaction: Transaction = {
    ...rawTransaction,
    created_at: rawTransaction.created_at.toMillis(),
    updated_at: rawTransaction.updated_at.toMillis(),
    value: Number(rawTransaction.value),
  };

  return normalizedTransaction;
}
