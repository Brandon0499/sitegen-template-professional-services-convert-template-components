<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :testimonials="payload.testimonials"
  />
</template>

<script lang="ts">
import { PropType } from "vue";
import Testimonial1 from "./Testimonial1.vue";
import Testimonial2 from "./Testimonial2.vue";
import Testimonials from "./types/Testimonials";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Testimonial1, Testimonial2 },
  props: {
    selectedComponent: { type: String, default: "Testimonial1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "What our customers say",
          mainHeadline: "Testimonial",
          description: "This is description",
          testimonials: [
            {
              name: "This is the name",
              role: "This is the role",
              statement: "This is testimonial statement",
              img: "assets/images/testimonial/testimonial-dark-02.jpg",
            },
            {
              name: "This is the name",
              role: "This is the role",
              statement: "This is testimonial statement",
              img: "assets/images/testimonial/testimonial-dark-02.jpg",
            },
            {
              name: "This is the name",
              role: "This is the role",
              statement: "This is testimonial statement",
              img: "assets/images/testimonial/testimonial-dark-02.jpg",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
