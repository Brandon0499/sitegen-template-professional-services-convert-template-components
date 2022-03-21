<template>
  <div class="rwt-team-area rn-section-gap">
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
      <div class="row row--15">
        <div
          v-for="teamMember in teamMembers"
          :key="teamMember.name"
          class="col-lg-4 col-md-6 col-12 mt--10"
        >
          <div class="rn-team team-style-default style-two">
            <div class="inner">
              <div class="thumbnail">
                <img
                  src="assets/images/team/team-01.jpg"
                  alt="Corporate Template"
                />
              </div>
              <div class="content">
                <h2 class="title">{{ teamMember.name }}</h2>
                <h6 class="subtitle theme-gradient">{{ teamMember.role }}</h6>
                <span class="team-form">
                  <i class="feather-map-pin"></i>
                  <span class="location">{{ teamMember.location }}</span>
                </span>
                <p class="description">
                  {{ teamMember.summary }}
                </p>
                <ul class="social-icon social-default icon-naked mt--20">
                  <li>
                    <a :href="teamMember.socialProofs.facebook">
                      <i class="feather-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="teamMember.socialProofs.twitter">
                      <i class="feather-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="teamMember.socialProofs.instagram">
                      <i class="feather-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TeamMembers from "./types/TeamMembers";
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
    teamMembers: {
      type: Array as PropType<TeamMembers[]>,
      default: [
        {
          name: "This is member name",
          summary: "This is member summary",
          role: "This is member role",
          location: "This is member location",
          img: "assets/images/services/galery-image-02.png",
          socialProofs: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        },
        {
          name: "This is member name",
          summary: "This is member summary",
          role: "This is member role",
          location: "This is member location",
          img: "assets/images/services/galery-image-02.png",
          socialProofs: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        },
        {
          name: "This is member name",
          summary: "This is member summary",
          role: "This is member role",
          location: "This is member location",
          img: "assets/images/services/galery-image-02.png",
          socialProofs: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
