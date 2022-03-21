<template>
  <div class="rwt-about-area rn-section-gap">
    <div class="container">
      <div class="row row--30 align-items-center">
        <div class="col-lg-5">
          <div class="thumbnail">
            <img class="w-100" :src="img" alt="About Images" />
          </div>
        </div>
        <div class="col-lg-7 mt_md--40 mt_sm--40">
          <div class="content">
            <div class="section-title">
              <h2 class="title">{{ mainHeadline }} <br /></h2>
              <p>
                {{ description }}
              </p>

              <div class="read-more-btn mt--40">
                <a class="btn-default" :href="primaryButtonHref">
                  <span>{{ primaryButtonText }}</span>
                </a>
              </div>
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
    img: {
      type: String,
      default: "assets/images/about/about-1.png",
    },
  },
  setup() {
    return {};
  },
});
</script>
