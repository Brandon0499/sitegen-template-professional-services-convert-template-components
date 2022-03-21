<template>
  <div class="blog-area rn-section-gap">
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
          v-for="(blog, index) in blogs"
          :key="index"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <div class="rn-card box-card-style-default">
            <div class="inner">
              <div class="thumbnail">
                <a class="image" :href="blog.href"
                  ><img :src="blog.img" alt="Blog Image"
                /></a>
              </div>
              <div class="content">
                <ul class="rn-meta-list">
                  <li>
                    <a :href="blog.href">{{ blog.author }}</a>
                  </li>
                  <li class="separator">/</li>
                  <li>{{ blog.date }}</li>
                </ul>
                <h4 class="title">
                  <a href="blog-details.html">{{ blog.title }}</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Blogs from "./types/Blogs";
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
      default: "Blogs",
    },

    description: {
      type: String,
      default: "This is description",
    },

    blogs: {
      type: Array as PropType<Blogs[]>,
      default: [
        {
          title: "This is the title",
          author: "This is the author",
          date: "This is the date",
          img: "assets/images/blog/blog-03.jpg",
          href: "#",
        },
        {
          title: "This is the title",
          author: "This is the author",
          date: "This is the date",
          img: "assets/images/blog/blog-03.jpg",
          href: "#",
        },
        {
          title: "This is the title",
          author: "This is the author",
          date: "This is the date",
          img: "assets/images/blog/blog-03.jpg",
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
