import {
  CollectionReference,
  type DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import type { Transaction } from "@/types/transaction.types";

export async function fetchTransactionsOfRef(
  ref: CollectionReference<DocumentData>
): Promise<Transaction[]> {
  const refQuery = query(ref, orderBy("updated_at", "desc"));

  return new Promise((resolve) => {
    getDocs(refQuery).then((querySnapshot) => {
      const fetchedTransactions: Transaction[] = [];

      querySnapshot.forEach((transaction) => {
        const parsedTransaction = {
          id: transaction.id,
          ...transaction.data(),
        } as Transaction;

        fetchedTransactions.push(parsedTransaction);
      });

      resolve(fetchedTransactions);
    });
  });
}
