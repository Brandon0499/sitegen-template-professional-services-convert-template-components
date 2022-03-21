<template>
  <component
    :is="selectedComponent"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :primaryButtonText="payload.primaryButtonText"
    :primaryButtonHref="payload.primaryButtonHref"
    :img="payload.img"
  />
</template>

<script lang="ts">
import About1 from "./About1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { About1 },
  props: {
    selectedComponent: { type: String, default: "About1" },
    payload: {
      type: Object,
      default: () => {
        return {
          mainHeadline: "Mainheadline from payload",
          description: "Description from payload",
          primaryButtonText: "Testing",
          primaryButtonHref: "#",
          img: "assets/images/about/about-1.png",
        };
      },
    },
  },
  setup() {},
});
</script>
