<template>
  <header>
    <NavBar :links="navBarLinks" />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import type { Link as NavBarLink } from "@/types/NavBar.types";

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
