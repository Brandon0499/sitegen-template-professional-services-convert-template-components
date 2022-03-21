<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :description="payload.description"
    :blogs="payload.blogs"
  />
</template>

<script lang="ts">
import Blog1 from "./Blog1.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Blog1 },
  props: {
    selectedComponent: { type: String, default: "Blog1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "subHeadline from payload",

          mainHeadline: "mainHeadline from payload",
          description: "description form payload",

          blogs: [
            {
              title: "This is the title",
              author: "This is the author",
              date: "This is the date",
              img: "assets/images/blog/blog-03.jpg",
              href: "#",
            },
            {
              title: "This is the title",
              author: "This is the author",
              date: "This is the date",
              img: "assets/images/blog/blog-03.jpg",
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
