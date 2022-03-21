<template>
  <div class="copyright-area copyright-style-one">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-8 col-sm-12 col-12">
          <div class="copyright-left">
            <ul class="ft-menu link-hover">
              <li v-for="(item, index) in navigation" :key="index">
                <a :href="item.href">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-12">
          <div class="copyright-right text-center text-lg-end">
            <p class="copyright-text">© Copyright {{ copyrightText }} 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Navigations from "./types/Navigation";
import { PropType } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    navigation: {
      type: Array as PropType<Navigations[]>,
      default: [
        {
          title: "Privacy Policy",
          href: "#",
        },
        {
          title: "Terms And Condition",
          href: "#",
        },
        {
          title: "Contact Us",
          href: "#",
        },
      ],
    },

    copyrightText: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>
