import type { RouteLocationRaw } from "vue-router";

export interface Link {
  label: string;
  path: RouteLocationRaw;
}
