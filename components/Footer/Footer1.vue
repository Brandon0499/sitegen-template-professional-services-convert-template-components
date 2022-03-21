<template>
  <footer class="rn-footer footer-style-default variation-two">
    <div class="rn-callto-action clltoaction-style-default style-7">
      <div class="container">
        <div class="row row--0 align-items-center content-wrapper">
          <div class="col-lg-8 col-md-8">
            <div class="inner">
              <div class="content text-left">
                <div class="logo">
                  <a href="index.html">
                    <img
                      class="logo-light"
                      :src="logoImg.light"
                      alt="Corporate Logo"
                    />
                    <img
                      class="logo-dark"
                      :src="logoImg.dark"
                      alt="Corporate Logo"
                    />
                  </a>
                </div>
                <p class="subtitle">
                  {{ subHeading1 }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="call-to-btn text-left mt_sm--20 text-lg-right">
              <a class="btn-default" :href="button.href"
                >{{ button.text }}
                <i class="feather-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in navigation"
            :key="index"
            class="col-lg-2 col-md-6 col-sm-6 col-12"
          >
            <div class="rn-footer-widget">
              <h4 class="title">{{ item.title }}</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li v-for="subitem in item.subNavigations" :key="index">
                    <a :href="subitem.href">{{ subitem.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="rn-footer-widget">
              <h4 class="title">{{ mainHeading }}</h4>
              <div class="inner">
                <h6 class="subtitle">
                  {{ subHeading2 }}
                </h6>
                <ul class="social-icon social-default justify-content-start">
                  <li>
                    <a :href="socialProof.facebook">
                      <i class="feather-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialProof.twitter">
                      <i class="feather-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialProof.instagram">
                      <i class="feather-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialProof.linkedin">
                      <i class="feather-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Navigations from "./types/Navigations";
import { PropType } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    logoImg: {
      type: Object,
      default: {
        light: "/assets/images/logo/logo.png",
        dark: "/assets/images/logo/logo-dark.png",
      },
    },
    button: {
      type: Object,
      default: { text: "More info", href: "#" },
    },
    subHeading1: {
      type: String,
      default: "This is subheading 1",
    },
    mainHeading: {
      type: String,
      default: "This is main heading",
    },
    subHeading2: {
      type: String,
      default: "This is subheading 2",
    },
    navigation: {
      type: Array as PropType<Navigations[]>,
      default: [
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
    },
    socialProof: {
      type: Object,
      default: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  },
  setup() {
    return {};
  },
});
</script>
