<template>
  <!--  do some custom logic here-->
  <component
    :is="selectedComponent"
    :logoImg="payload.logoImg"
    :button="payload.button"
    :navigations="payload.navigations"
  />
</template>

<script lang="ts">
import { PropType } from "vue";
import Header1 from "./Header1.vue";
import Navigations from "./types/Navigations";
import { defineComponent } from "vue";

const selectedComponent = Header1;
export default defineComponent({
  components: { Header1 },
  props: {
    selectedComponent: { type: String, default: "Header1" },
    payload: {
      type: Object,
      default: () => {
        return {
          logoImg: {
            light: "/assets/images/logo/logo.png",
            dark: "/assets/images/logo/logo-dark.png",
          },
          button: { text: "More info", href: "#" },
          navigations: [
            {
              name: "Home",
              href: "#",
            },
            {
              name: "About",
              href: "#",
            },
            {
              name: "Services",
              href: "#",
            },
            {
              name: "Contact",
              href: "#",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
