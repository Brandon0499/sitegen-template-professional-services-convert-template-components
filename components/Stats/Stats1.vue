<template>
  <div class="rwt-counterup-area rn-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h4 class="subtitle">
              <span class="theme-gradient">{{ subHeadline }}</span>
            </h4>
            <h2 class="title w-600 mb--20">{{ mainHeadline }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="stat in stats"
          :key="stat.title"
          class="col-lg-4 col-md-6 col-sm-6 col-12"
        >
          <div class="count-box counter-style-2 text-center">
            <div>
              <div class="count-number">
                <span class="counter">{{ stat.statData }}</span>
              </div>
            </div>
            <h5 class="title">{{ stat.title }}</h5>
            <p class="description">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Stats from "./types/Stats";
import { PropType } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    subHeadline: {
      type: String,
      default: "This is subheadline",
    },
    mainHeadline: {
      type: String,
      default: "This is mainheadline",
    },

    stats: {
      type: Array as PropType<Stats[]>,
      default: [
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
