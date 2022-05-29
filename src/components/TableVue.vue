<template>
  <table :class="`table table-hover table-${props.theme} table-sm mb-0`">
    <thead v-show="showHead">
      <tr>
        <th v-if="props.enumerate" scope="col" class="col-1">#</th>

        <th
          class="col-1"
          scope="col"
          v-for="(colLabel, index) in mappedFieldLabels"
          :key="index"
        >
          {{ colLabel }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(data, index) in props.contentData" :key="index">
        <td v-if="props.enumerate" class="col-1" scope="row">
          {{ index + 1 }}
        </td>

        <td
          v-for="(field, index) in mappedFieldData"
          scope="row"
          :key="index"
          class="col-1"
        >
          {{ (data as any)[field as any] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from "vue";

const props = defineProps({
  contentData: {
    type: Array,
    required: true,
  },
  mappedData: {
    type: Object,
    required: true,
  },
  theme: {
    type: String,
    default: "dark",
  },
  enumerate: {
    type: Boolean,
    default: false,
  },
  showHead: {
    type: Boolean,
    default: true,
  },
});

const mappedFieldLabels: ComputedRef<string[] | []> = computed(() => {
  return Object.keys(props.mappedData);
});

const mappedFieldData: ComputedRef<string[] | []> = computed(() => {
  const fields = [];

  for (const field of mappedFieldLabels.value) {
    fields.push(props.mappedData[`${field}`]);
  }

  return fields;
});
</script>
