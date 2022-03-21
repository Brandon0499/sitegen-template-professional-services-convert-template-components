<template>
  <component
    :is="selectedComponent"
    :headline="payload.headline"
    :description="payload.description"
    :primaryButtonText="payload.primaryButtonText"
    :primaryButtonHref="payload.primaryButtonHref"
  />
</template>

<script lang="ts">
import CTA1 from "./CTA1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CTA1 },
  props: {
    selectedComponent: { type: String, default: "CTA1" },
    payload: {
      type: Object,
      default: () => {
        return {
          headline: "Hello World",
          description: "Description from payload",
          primaryButtonText: "ABC",
          primaryButtonHref: "#",
        };
      },
    },
  },
  setup() {},
});
</script>
