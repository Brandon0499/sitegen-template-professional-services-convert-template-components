<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :teamMembers="payload.teamMembers"
  />
</template>

<script lang="ts">
import Team1 from "./Team1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Team1 },
  props: {
    selectedComponent: { type: String, default: "Team1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "This is subheadline",
          mainHeadline: "This is main headline",
          description: "This is description",
          teamMembers: [
            {
              name: "This is member name",
              summary: "This is member summary",
              role: "This is member role",
              location: "This is member location",
              img: "assets/images/services/galery-image-02.png",
              socialProofs: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
              },
            },
            {
              name: "This is member name",
              summary: "This is member summary",
              role: "This is member role",
              location: "This is member location",
              img: "assets/images/services/galery-image-02.png",
              socialProofs: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
              },
            },
            {
              name: "This is member name",
              summary: "This is member summary",
              role: "This is member role",
              location: "This is member location",
              img: "assets/images/services/galery-image-02.png",
              socialProofs: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
              },
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
