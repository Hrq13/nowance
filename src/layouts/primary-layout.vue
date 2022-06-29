<template>
  <header>
    <NavBar :links="navBarLinks" />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav-bar/nav-bar.vue";
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
