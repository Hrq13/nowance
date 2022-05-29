import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login-or-register",
      name: "login",
      component: () => import("@/views/LoginOrRegisterView.vue"),
    },
    {
      path: "/dashboards",
      name: "dashboards",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/transactions",
      name: "history",
      component: () => import("@/views/HistoryView.vue"),
    },
    {
      path: "/transaction",
      component: () => import("@/views/TransactionView.vue"),
      children: [
        {
          path: "create",
          name: "create-transaction",
          component: () => import("@/views/CreateTransactionView.vue"),
        },
      ],
    },
  ],
});

export default router;
