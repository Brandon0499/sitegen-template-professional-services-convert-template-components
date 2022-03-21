<template>
  <div class="rn-service-area rn-section-gap">
    <div class="container">
      <div class="row">
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

      <div class="row row--15 service-wrapper">
        <div
          v-for="service in services"
          :key="service.serviceName"
          class="col-lg-4 col-md-6 col-sm-6 col-12"
        >
          <div
            class="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none"
          >
            <div class="icon">
              <i class="feather-activity"></i>
            </div>
            <div class="content">
              <h4 class="title w-600">
                <a :href="service.serviceHref">{{ service.serviceName }}</a>
              </h4>
              <p class="description b1 color-gray mb--0">
                {{ service.serviceSummary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Services from "./types/Services";
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
      default: "This is main headline",
    },
    description: {
      type: String,
      default: "This is description",
    },
    services: {
      type: Array as PropType<Services[]>,
      default: [
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
        },
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
        },
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
