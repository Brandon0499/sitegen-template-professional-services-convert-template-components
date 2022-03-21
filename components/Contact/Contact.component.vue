<template>
  <component
    :is="selectedComponent"
    :subHeadline="payload.subHeadline"
    :mainHeadline="payload.mainHeadline"
    :contactNumber="payload.contactNumber"
    :emailAddress="payload.emailAddress"
    :location="payload.location"
    :googleMapIframe="payload.googleMapIframe"
  />
</template>

<script lang="ts">
import Contact1 from "./Contact1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Contact1 },
  props: {
    selectedComponent: { type: String, default: "Contact1" },
    payload: {
      type: Object,
      default: () => {
        return {
          subHeadline: "Contact Form",
          mainHeadline: "Getting in touch",
          contactNumber: "+60 12 3456 789",
          emailAddress: "example@gmail.com",
          location: "This is office address from payload",
          googleMapIframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd",
        };
      },
    },
  },
  setup() {},
});
</script>
