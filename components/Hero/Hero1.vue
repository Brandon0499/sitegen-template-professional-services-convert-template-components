<template>
  <div class="slider-area slider-style-1 bg-transparent height-850">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner text-center">
            <span class="subtitle">{{ subHeadline }}</span>
            <h1 class="title display-two">
              <span class="theme-gradient">{{ mainHeadline }}</span>
              <br />
              <!-- <span class="header-caption">
                <span class="cd-headline clip is-full-width">
                  <span class="cd-words-wrapper">
                    <b class="is-visible theme-gradient">Finance.</b>
                    <b class="is-hidden theme-gradient">Consulting.</b>
                    <b class="is-hidden theme-gradient">Agency.</b>
                  </span>
                </span>
              </span> -->
            </h1>
            <p class="description">{{ description }}</p>
            <div class="button-group">
              <a
                class="btn-default btn-medium round btn-icon"
                target="_blank"
                :href="primaryButtonHref"
                >{{ primaryButtonText }}
                <i class="icon feather-arrow-right"> </i>
              </a>
              <a
                class="btn-default btn-medium btn-border round btn-icon"
                :href="secondaryButtonHref"
                >{{ secondaryButtonText
                }}<i class="icon feather-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
    primaryButtonText: {
      type: String,
      default: "Primary Button",
    },
    primaryButtonHref: {
      type: String,
      default: "#",
    },
    secondaryButtonText: {
      type: String,
      default: "Secondary Button",
    },
    secondaryButtonHref: {
      type: String,
      default: "#",
    },
  },
  setup() {
    return {};
  },
});
</script>
