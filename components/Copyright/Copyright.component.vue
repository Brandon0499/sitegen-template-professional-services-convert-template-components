import { PropType } from "vue";
<template>
  <component
    :is="selectedComponent"
    :navigation="payload.navigation"
    :copyrightText="payload.copyrightText"
  />
</template>

<script lang="ts">
import { PropType } from "vue";
import Copyright1 from "./Copyright1.vue";
import Navigations from "./types/Navigation";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Copyright1 },
  props: {
    selectedComponent: { type: String, default: "Copyright1" },
    payload: {
      type: Object,
      default: () => {
        return {
          navigation: [
            {
              title: "Privacy Policy",
              href: "#",
            },
            {
              title: "Terms And Condition",
              href: "#",
            },
            {
              title: "Contact Us",
              href: "#",
            },
          ],
          copyrightText: "Company",
        };
      },
    },
  },
  setup() {},
});
</script>
