<template>
  <!--  do some custom logic here-->
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :primaryButtonText="payload.primaryButtonText"
    :primaryButtonHref="payload.primaryButtonHref"
    :secondaryButtonText="payload.secondaryButtonText"
    :secondaryButtonHref="payload.secondaryButtonHref"
  />
</template>

<script lang="ts">
import Hero1 from "./Hero1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Hero1 },
  props: {
    selectedComponent: { type: String, default: "Hero1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "This is subheadline",
          mainHeadline: "This is main headline",
          description: "This is description",
          primaryButtonText: "Primary Button",
          primaryButtonHref: "#",
          secondaryButtonText: "Secondary Button",
          secondaryButtonHref: "#",
        };
      },
    },
  },
  setup() {},
});
</script>
