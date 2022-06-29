import type { Transaction } from "@/types/Transaction.types";
import { v4 as generateUuidV4 } from "uuid";

const STORAGE_NAME = "NOWANCE_TRANSACTIONS";

function getTransactions(): Transaction[] | [] {
  const transactions = localStorage.getItem(STORAGE_NAME) || "";
  return JSON.parse(transactions) || [];
}

function setTransactions(transactions: Transaction[] | [] = []): void {
  if (!transactions || !transactions.length) {
    console.error("[ERROR] Cannot set transactions as empty!");
    return;
  }

  const stringifiedTransactions = JSON.stringify(transactions);
  localStorage.set(STORAGE_NAME, stringifiedTransactions);
}

function createTransaction(transaction: Transaction): void {
  if (
    typeof transaction !== "object" ||
    Object.keys(transaction).length === 0
  ) {
    console.error("[ERROR] Cannot create invalid transaction!");
    return;
  }

  const newTransactionUuid = generateUuidV4();

  transaction.id = newTransactionUuid;
  transaction.createdAt = new Date().getTime();
  transaction.updatedAt = undefined;

  const storedTransactions = getTransactions();
  setTransactions([...storedTransactions, transaction]);
}

function deleteTransaction(id: string) {
  if (!id || id.length < 25) {
    console.error("[ERROR] ID is not valid!");
    return;
  }

  const transactions = getTransactions();

  const foundTransaction = transactions.findIndex(
    (transaction) => transaction.id === id
  );

  if (foundTransaction === -1) {
    console.error("[ERROR] ID not found!");
    return;
  }

  setTransactions(transactions.splice(foundTransaction, 1));
}

export { createTransaction, deleteTransaction };
