<template>
  <header class="rn-header header-default header-not-transparent header-sticky">
    <div class="container position-relative">
      <div class="row align-items-center row--0">
        <div class="col-lg-3 col-md-6 col-4">
          <div class="logo">
            <a href="index.html">
              <img
                class="logo-light"
                :src="logoImg.light"
                alt="Corporate Logo"
              />
              <img class="logo-dark" :src="logoImg.dark" alt="Corporate Logo" />
            </a>
          </div>
        </div>
        <div class="col-lg-9 col-md-6 col-8 position-static">
          <div class="header-right">
            <nav class="mainmenu-nav d-none d-lg-block">
              <ul class="mainmenu">
                <li
                  v-for="(item, index) in navigations"
                  :key="index"
                  class="has-droupdown has-menu-child-item"
                >
                  <a :href="item.href">{{ item.name }}</a>
                </li>
              </ul>
            </nav>
            <!-- Start Header Btn  -->
            <div class="header-btn">
              <a
                class="btn-default btn-small round"
                target="_blank"
                :href="button.href"
                >{{ button.text }}</a
              >
            </div>
            <!-- End Header Btn  -->

            <!-- Start Mobile-Menu-Bar -->
            <div class="mobile-menu-bar ml--5 d-block d-lg-none">
              <div class="hamberger">
                <button class="hamberger-button">
                  <i class="feather-menu"></i>
                </button>
              </div>
            </div>
            <!-- Start Mobile-Menu-Bar -->

            <div id="my_switcher" class="my_switcher">
              <ul>
                <li>
                  <a
                    href="javascript: void(0);"
                    data-theme="light"
                    class="setColor light"
                  >
                    <img
                      class="sun-image"
                      src="assets/images/icons/sun-01.svg"
                      alt="Sun images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    data-theme="dark"
                    class="setColor dark"
                  >
                    <img
                      class="Victor Image"
                      src="assets/images/icons/vector.svg"
                      alt="Vector Images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
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
    navigations: {
      type: Array as PropType<Navigations[]>,
      default: [
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
    },
  },
  setup() {
    return {};
  },
});
</script>
