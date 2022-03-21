<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :stats="payload.stats"
  />
</template>

<script lang="ts">
import { Stats } from "fs";
import { PropType } from "vue";
import Stats1 from "./Stats1.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Stats1 },
  props: {
    selectedComponent: { type: String, default: "Stats1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "This is subheadline",
          mainHeadline: "This is mainheadline",

          stats: [
            {
              statData: 575,
              title: "Stat title",
              description: "This is stat description",
            },
            {
              statData: 575,
              title: "Stat title",
              description: "This is stat description",
            },
            {
              statData: 575,
              title: "Stat title",
              description: "This is stat description",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
