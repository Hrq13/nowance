<template>
  <header>
    <c-nav-bar :links="navBarLinks" />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import CNavBar from "@/components/c-nav-bar/c-nav-bar.vue";
import type { Link as NavBarLink } from "@/types/nav-bar.types";

const navBarLinks: NavBarLink[] = [
  {
    label: "Dashboard",
    path: { name: "dashboards" },
  },
  {
    label: "Create transaction",
    path: { name: "create-transaction" },
  },
  {
    label: "See history",
    path: { name: "history" },
  },
];
</script>

<style lang="scss" scoped>
header {
  display: block;
  width: 100%;
}
</style>
