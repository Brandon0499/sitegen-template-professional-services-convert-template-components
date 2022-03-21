<template>
  <div class="rwt-callto-action-area">
    <div class="wrapper">
      <div class="rn-callto-action clltoaction-style-default style-5">
        <div class="container">
          <div
            class="row row--0 align-items-center content-wrapper theme-shape"
          >
            <div class="col-lg-12">
              <div class="inner">
                <div class="content text-center">
                  <h2 class="title">
                    {{ headline }}
                  </h2>
                  <h6 class="subtitle">
                    {{ description }}
                  </h6>
                  <div class="call-to-btn text-center">
                    <a class="btn-default btn-icon" :href="primaryButtonHref"
                      >{{ primaryButtonText }}
                      <i class="icon feather-arrow-right"></i>
                    </a>
                  </div>
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
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    headline: {
      type: String,
      default: "This is headline",
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
  },
  setup() {
    return {};
  },
});
</script>
