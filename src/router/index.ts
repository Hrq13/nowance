import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";

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
      component: () => import("@/views/login-or-register-view.vue"),
    },
    {
      path: "/transactions",
      component: () => import("@/layouts/primary-layout.vue"),
      children: [
        {
          path: "create",
          name: "create-transaction",
          component: () => import("@/views/transaction/create-view.vue"),
        },
        {
          path: "dashboards",
          name: "dashboards",
          component: () => import("@/views/transaction/dashboard-view.vue"),
        },
        {
          path: "history",
          name: "history",
          component: () => import("@/views/transaction/history-view.vue"),
        },
      ],
    },
  ],
});

export default router;
