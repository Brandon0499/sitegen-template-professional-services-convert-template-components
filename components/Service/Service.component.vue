<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :services="payload.services"
  />
</template>

<script lang="ts">
import { PropType } from "vue";
import Service1 from "./Service1.vue";
import Service2 from "./Service2.vue";
import Services from "./types/Services";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Service1, Service2 },
  props: {
    selectedComponent: { type: String, default: "Service1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "This is subheadline",
          mainHeadline: "This is main headline",
          description: "This is description",
          services: [
            {
              serviceName: "This is service name",
              serviceSummary: "This is service summary",
              serviceImg: "assets/images/services/galery-image-02.png",
              serviceHref: "#",
            },
            {
              serviceName: "This is service name",
              serviceSummary: "This is service summary",
              serviceImg: "assets/images/services/galery-image-02.png",
              serviceHref: "#",
            },
            {
              serviceName: "This is service name",
              serviceSummary: "This is service summary",
              serviceImg: "assets/images/services/galery-image-02.png",
              serviceHref: "#",
            },
          ],
        };
      },
    },
  },
  setup() {},
});

const selectedComponent = Service1;
</script>
