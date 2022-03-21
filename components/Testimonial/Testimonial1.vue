<template>
  <div class="rwt-testimonial-area rn-section-gap">
    <div class="container">
      <div class="row mb--20">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h4 class="subtitle">
              <span class="theme-gradient">{{ subHeadline }}</span>
            </h4>
            <h2 class="title w-600 mb--20">{{ mainHeadline }}</h2>
            <p class="description b1">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="row rn-slick-dot rn-slick-arrow testimonial-activation row"
      >
        <div class="col-lg-12">
          <div
            class="testimonial-style-two"
            tabindex="-1"
            style="width: 100%; display: inline-block"
          >
            <div class="row align-items-center row--20">
              <div class="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                <div class="content mt_sm--40">
                  <p class="description">
                    {{ testimonial.statement }}
                  </p>
                  <div class="client-info">
                    <h4 class="title">{{ testimonial.name }}</h4>
                    <h6 class="subtitle">{{ testimonial.role }}</h6>
                  </div>
                </div>
              </div>
              <div class="order-1 order-md-2 col-lg-4 col-md-4">
                <div class="thumbnail">
                  <img
                    class="w-100"
                    :src="testimonial.img"
                    alt="Corporate Template"
                  />
                </div>
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
