import {
  CollectionReference,
  type DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import type {
  RawTransactionFromFirestore,
  Transaction,
} from "@/types/transaction.types";
import normalizeTransaction from "./normalize-transaction";

export async function fetchTransactionsOfRef(
  ref: CollectionReference<DocumentData>
): Promise<Transaction[]> {
  const refQuery = query(ref, orderBy("updated_at", "desc"));

  return new Promise((resolve) => {
    getDocs(refQuery).then((querySnapshot) => {
      const fetchedTransactions: Transaction[] = [];

      querySnapshot.forEach((transaction) => {
        const parsedTransaction = normalizeTransaction({
          id: transaction.id,
          ...transaction.data(),
        } as RawTransactionFromFirestore);

        fetchedTransactions.push(parsedTransaction);
      });

      resolve(fetchedTransactions);
    });
  });
}
