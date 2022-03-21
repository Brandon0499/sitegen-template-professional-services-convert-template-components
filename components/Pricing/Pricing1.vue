<template>
  <div class="rwt-pricing-area rn-section-gap">
    <div class="container">
      <div class="row mb--40 mb_sm--0">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h4 class="subtitle">
              <span class="theme-gradient">{{ subHeadline }}</span>
            </h4>
            <h2 class="title w-600 mb--20">{{ mainHeadline }}</h2>
          </div>
        </div>
      </div>
      <div class="row row--30">
        <div
          v-for="item in pricingPackages"
          :key="item.name"
          class="col-lg-4 col-md-6 col-12"
        >
          <div :class="[item.active === true ? 'active' : '', 'rn-pricing']">
            <div class="pricing-table-inner">
              <div class="pricing-header">
                <h4 class="title">{{ item.name }}</h4>
                <div class="pricing">
                  <div class="price-wrapper">
                    <span class="currency">$</span
                    ><span class="price">{{ item.price }}</span>
                  </div>
                  <span class="subtitle"
                    >{{ item.currency }} {{ item.period }}</span
                  >
                </div>
              </div>
              <div class="pricing-body">
                <ul class="list-style--1">
                  <li v-for="feature in item.features">
                    <i class="feather-check"></i> {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="pricing-footer">
                <a
                  :class="[
                    item.active === true
                      ? 'btn-default'
                      : 'btn-default btn-border',
                  ]"
                  :href="item.buttonHref"
                  >{{ item.buttonText }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import PricingPackage from "./types/PricingPackages";
import { PropType } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    subHeadline: {
      type: String,
      default: "Pricing",
    },
    mainHeadline: {
      type: String,
      default: "Our Pricing",
    },

    pricingPackages: {
      type: Array as PropType<PricingPackage[]>,
      default: [
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
    },
  },
  setup() {
    return {};
  },
});
</script>
