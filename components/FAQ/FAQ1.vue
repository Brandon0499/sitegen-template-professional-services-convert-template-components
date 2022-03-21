<template>
  <div class="rn-company-mission-are rn-section-gap">
    <div class="container">
      <div class="row row--30">
        <div class="col-lg-6">
          <div class="mission-title">
            <h2 class="title">
              {{ mainHeadline }} <br />
              <!-- <span class="header-caption">
                <span class="cd-headline clip is-full-width">
                  <span class="cd-words-wrapper">
                    <b class="is-visible theme-gradient">Finance.</b>
                    <b class="is-hidden theme-gradient">Consulting.</b>
                    <b class="is-hidden theme-gradient">Agency.</b>
                  </span>
                </span>
              </span> -->
            </h2>
            <p>
              {{ description }}
            </p>
            <div class="read-more-btn mt--50">
              <a class="btn-default btn-icon" :href="primaryButtonHref"
                >{{ primaryButtonText }} <i class="icon feather-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt_md--30 mt_sm--30">
          <div class="rn-accordion-style accordion">
            <div class="accordion" id="accordionExample">
              <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="accordion-item card"
              >
                <h2
                  class="accordion-header card-header"
                  :id="`heading${index}`"
                >
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="true"
                    :aria-controls="`collapse${index}`"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  :id="`collapse${index}`"
                  :class="[
                    index !== 0 || 'show',
                    'accordion-collapse collapse',
                  ]"
                  :aria-labelledby="`heading${index}`"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body card-body">
                    {{ faq.answer }}
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
import Faqs from "./types/Faqs";
import { PropType } from "vue";

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
    faqs: {
      type: Array as PropType<Faqs[]>,
      default: [
        {
          question: "This is faq question",
          answer: "This is faq answer",
        },
        {
          question: "This is faq question",
          answer: "This is faq answer",
        },
        {
          question: "This is faq question",
          answer: "This is faq answer",
        },
        {
          question: "This is faq question",
          answer: "This is faq answer",
        },
        {
          question: "This is faq question",
          answer: "This is faq answer",
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
