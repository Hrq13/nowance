import { defineStore } from "pinia";
import { collection } from "firebase/firestore";

import type { Transaction } from "@/types/transaction.types";

import db from "@/services/firestore/index";

import { fetchTransactionsOfRef } from "@/utils/fetch-transactions";

const paymentsRef = collection(db, "payments");
const expensesRef = collection(db, "expenses");

export const useTransactionStore = defineStore({
  id: "transaction",
  state: () => ({
    payments: [] as Transaction[],
    expenses: [] as Transaction[],
  }),
  actions: {
    async fetchTransactions() {
      const transactions = await Promise.all([
        fetchTransactionsOfRef(paymentsRef),
        fetchTransactionsOfRef(expensesRef),
      ]);

      this.payments = transactions[0];
      this.expenses = transactions[1];
    },
  },
});
