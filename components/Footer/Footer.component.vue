<template>
  <component
    :is="selectedComponent"
    :logoImg="payload.logoImg"
    :button="payload.button"
    :subHeading1="payload.subHeading1"
    :mainHeading="payload.mainHeading"
    :subHeading2="payload.subHeading2"
    :navigation="payload.navigation"
    :socialProof="payload.socialProof"
  />
</template>

<script lang="ts">
import Footer1 from "./Footer1.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Footer1 },
  props: {
    selectedComponent: { type: String, default: "Footer1" },
    payload: {
      type: Object,
      default: () => {
        return {
          logoImg: {
            light: "/assets/images/logo/logo.png",
            dark: "/assets/images/logo/logo-dark.png",
          },

          button: { text: "More info", href: "#" },
          subHeading1: "This is subheading 1",
          mainHeading: "This is main heading",

          subHeading2: "This is subheading 2",

          navigation: [
            {
              title: "Title 1",
              subNavigations: [
                { title: "Subitem A", href: "#" },
                { title: "Subitem B", href: "#" },
                { title: "Subitem C", href: "#" },
              ],
            },
            {
              title: "Title 2",
              subNavigations: [
                { title: "Subitem A", href: "#" },
                { title: "Subitem B", href: "#" },
                { title: "Subitem C", href: "#" },
              ],
            },
            {
              title: "Title 3",
              subNavigations: [
                { title: "Subitem A", href: "#" },
                { title: "Subitem B", href: "#" },
                { title: "Subitem C", href: "#" },
              ],
            },
          ],

          socialProof: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
          },
        };
      },
    },
  },
  setup() {},
});
</script>
