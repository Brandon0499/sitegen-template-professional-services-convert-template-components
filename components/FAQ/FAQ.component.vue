<template>
  <component
    :is="selectedComponent"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :primaryButtonText="payload.primaryButtonText"
    :primaryButtonHref="payload.primaryButtonHref"
    :faqs="payload.faqs"
  />
</template>

<script lang="ts">
import { PropType } from "vue";
import FAQ1 from "./FAQ1.vue";
import Faqs from "./types/Faqs";

import { defineComponent } from "vue";

export default defineComponent({
  components: { FAQ1 },
  props: {
    selectedComponent: { type: String, default: "FAQ1" },
    payload: {
      type: Object,
      default: () => {
        return {
          mainHeadline: "This is main headline",
          description: "This is description",
          primaryButtonText: "Primary Button",
          primaryButtonHref: "#",
          faqs: [
            {
              question: "This is faq question",
              answer: "This is faq answer",
            },
            {
              question: "This is faq question",
              answer: "This is faq answer",
            },
            {
              question: "This is faq question",
              answer: "This is faq answer",
            },
            {
              question: "This is faq question",
              answer: "This is faq answer",
            },
            {
              question: "This is faq question",
              answer: "This is faq answer",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
