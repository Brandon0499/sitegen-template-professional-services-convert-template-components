<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :pricingPackages="payload.pricingPackages"
  />
</template>

<script lang="ts">
import Pricing1 from "./Pricing1.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Pricing1 },
  props: {
    selectedComponent: { type: String, default: "Pricing1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "Pricing",
          mainHeadline: "Our Pricing",
          pricingPackages: [
            {
              name: "Free",
              price: 29,
              currency: "USD",
              period: "Per Month",
              features: [
                "5 PPC Campaigns",
                "Digital Marketing",
                "Marketing Agency",
                "Seo Friendly",
                "UI/UX designs",
              ],
              buttonText: "Purchase Now",
              buttonHref: "#",
              active: false,
            },
            {
              name: "Business",
              price: 50,
              currency: "USD",
              period: "Per Month",
              features: [
                "5 PPC Campaigns",
                "Digital Marketing",
                "Marketing Agency",
                "Seo Friendly",
                "UI/UX designs",
              ],
              buttonText: "Purchase Now",
              buttonHref: "#",
              active: true,
            },
            {
              name: "Advance",
              price: 100,
              currency: "USD",
              period: "Per Month",
              features: [
                "5 PPC Campaigns",
                "Digital Marketing",
                "Marketing Agency",
                "Seo Friendly",
                "UI/UX designs",
              ],
              buttonText: "Purchase Now",
              buttonHref: "#",
              active: false,
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
