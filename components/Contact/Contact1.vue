<template>
  <div class="main-content">
    <div class="rwt-contact-area rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mb--40">
            <div
              class="section-title text-center"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 class="subtitle">
                <span class="theme-gradient">{{ subHeadline }}</span>
              </h4>
              <h2 class="title w-600 mb--20">{{ mainHeadline }}</h2>
            </div>
          </div>
        </div>
        <div class="row row--15">
          <div class="col-lg-12">
            <div class="rn-contact-address mt_dec--30">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <i class="feather-headphones"></i>
                    </div>
                    <div class="inner">
                      <h4 class="title">Contact Number</h4>
                      <p>{{ contactNumber }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <i class="feather-mail"></i>
                    </div>
                    <div class="inner">
                      <h4 class="title">Email Address</h4>
                      <p>
                        <a :href="`mailto:${emailAddress}`">{{
                          emailAddress
                        }}</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <i class="feather-map-pin"></i>
                    </div>
                    <div class="inner">
                      <h4 class="title">Location</h4>
                      <p>
                        {{ location }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt--40 row--15">
          <div class="col-lg-7">
            <form
              class="contact-form-1 rwt-dynamic-form"
              id="contact-form"
              method="POST"
              action="mail.php"
            >
              <div class="form-group">
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  placeholder="Your Email"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                />
              </div>

              <div class="form-group">
                <textarea
                  name="contact-message"
                  id="contact-message"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div class="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  class="btn-default btn-large rn-btn"
                >
                  <span>Submit Now</span>
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-5 mt_md--30 mt_sm--30">
            <div class="google-map-style-1">
              <iframe
                :src="googleMapIframe"
                width="600"
                height="550"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
              ></iframe>
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
      default: "Contact Form",
    },
    mainHeadline: {
      type: String,
      default: "Getting in touch",
    },
    contactNumber: {
      type: String,
      default: "+60 12 3456 789",
    },
    emailAddress: {
      type: String,
      default: "example@gmail.com",
    },
    location: {
      type: String,
      default: "This is office address",
    },
    googleMapIframe: {
      type: String,
      default:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd",
    },
  },
  setup() {
    return {};
  },
});
</script>
