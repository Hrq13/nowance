<template>
  <header>
    <NavBar :links="links" />
  </header>

  <router-view />
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import type { Link as NavBarLink } from "@/types/NavBar.types";

const links: NavBarLink[] = [
  {
    label: "Dashboards",
    path: "/dashboards",
  },
  {
    label: "Create transaction",
    path: "/transaction/create",
  },
];
</script>

<style lang="scss">
@import "@/assets/normalize.css";
@import "@/assets/global.scss";

header {
  display: block;
  width: 100%;
}
</style>
