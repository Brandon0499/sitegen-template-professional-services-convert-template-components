<template>
  <div class="rwt-testimonial-area rn-section-gap">
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

      <div class="row row--15">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <div class="rn-box-card card-style-default testimonial-style-one">
            <div class="inner">
              <div class="thumbnail">
                <img :src="testimonial.img" alt="Corporate Template" />
              </div>
              <div class="content">
                <p class="description">
                  {{ testimonial.statement }}
                </p>
                <h2 class="title">{{ testimonial.name }}</h2>
                <h6 class="subtitle theme-gradient">{{ testimonial.role }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Testimonials from "./types/Testimonials";
import { PropType } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    subHeadline: {
      type: String,
      default: "What our customers say",
    },
    mainHeadline: {
      type: String,
      default: "Testimonial",
    },

    description: {
      type: String,
      default: "This is description",
    },

    testimonials: {
      type: Array as PropType<Testimonials[]>,
      default: [
        {
          name: "This is the name",
          role: "This is the role",
          statement: "This is testimonial statement",
          img: "assets/images/testimonial/testimonial-dark-02.jpg",
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
