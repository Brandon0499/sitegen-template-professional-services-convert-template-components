<template class="active-dark-mode">
  <div>
    <div class="rn-gradient-circle"></div>
    <div class="rn-gradient-circle theme-pink"></div>
  </div>
  <main class="page-wrapper">
    <component
      v-for="component in pageData"
      :key="component"
      :is="component.componentName"
      :selected-component="component.selectedComponent"
      :payload="component.payload"
    ></component>
    <!-- <Header />
    <Hero />
    <About />
    <Service />
    <CTA />
    <Team />
    <FAQ />
    <Testimonial />
    <Contact />
    <Footer />
    <Copyright /> -->
  </main>
</template>

<script lang="ts">
import Header from "../../components/Header/Header.component.vue";
import Contact from "../../components/Contact/Contact.component.vue";
import Footer from "../../components/Footer/Footer.component.vue";
import Copyright from "../../components/Copyright/Copyright.component.vue";
import Hero from "../../components/Hero/Hero.component.vue";
import About from "../../components/About/About.component.vue";
import Service from "../../components/Service/Service.component.vue";
import CTA from "../../components/CTA/CTA.component.vue";
import Team from "../../components/Team/Team.component.vue";
import FAQ from "../../components/FAQ/FAQ.component.vue";
import Testimonial from "../../components/Testimonial/Testimonial.component.vue";
import Blog from "../../components/Blog/Blog.component.vue";
import Pricing from "../../components/Pricing/Pricing.component.vue";
import Stats from "../../components/Stats/Stats1.vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import { professionalServicePayloadFormat } from "../professionalServicePayloadFormat";
import { professionalServicesTemplateCreator } from "../../helpers/professionalServicesTemplateCreator";

const pageProps = ["data"];

export default defineComponent({
  props: pageProps,
  components: {
    Header,
    Contact,
    Footer,
    Copyright,
    Hero,
    About,
    Service,
    CTA,
    Team,
    FAQ,
    Testimonial,
    Blog,
    Pricing,
    Stats,
  },
  setup(props) {
    const pageData = ref([]);

    onBeforeMount(async () => {
      console.log("fetching and rendering");
      let payload = professionalServicePayloadFormat;
      if (props.data) payload = props.data;
      const componentStructureList =
        professionalServicesTemplateCreator(payload);
      pageData.value = [...componentStructureList];
    });

    return { pageData };
  },
});
</script>
