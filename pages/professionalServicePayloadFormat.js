export const professionalServicePayloadFormat = {
  metadata: {
    clientId: "clientId",
    websiteId: "websiteId",
    tier: "free/paid",
    domain: "clientId.hackercollective.work",
  },
  payload: {
    headerSection: {
      enabled: true,
      logoImg: {
        light: "/assets/images/logo/logo.png",
        dark: "/assets/images/logo/logo-dark.png",
      },
      button: { text: "More info", href: "#" },
      navigations: [
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
    heroSection: {
      enabled: true,
      subHeadline: "This is subheadline",
      mainHeadline: "This is main headline",
      description: "This is description",
      primaryButtonText: "Primary Button",
      primaryButtonHref: "#",
      secondaryButtonText: "Secondary Button",
      secondaryButtonHref: "#",
    },
    aboutSection: {
      enabled: true,
      mainHeadline: "Mainheadline from payload",
      description: "Description from payload",
      primaryButtonText: "Testing",
      primaryButtonHref: "#",
      img: "assets/images/about/about-1.png",
    },
    servicesSection: {
      enabled: true,
      subHeadline: "This is subheadline",
      mainHeadline: "This is main headline",
      description: "This is description",
      services: [
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
          serviceHref: "#",
        },
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
          serviceHref: "#",
        },
        {
          serviceName: "This is service name",
          serviceSummary: "This is service summary",
          serviceImg: "assets/images/services/galery-image-02.png",
          serviceHref: "#",
        },
      ],
    },
    ctaSection: {
      enabled: true,
      headline: "Hello World",
      description: "Description from payload",
      primaryButtonText: "ABC",
      primaryButtonHref: "#",
    },
    teamSection: {
      enabled: true,
      subHeadline: "This is subheadline",
      mainHeadline: "This is main headline",
      description: "This is description",
      teamMembers: [
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

    pricingSection: {
      enabled: true,
      subHeadline: "Pricing",
      mainHeadline: "Our Pricing",
      pricingPackages: [
        {
          name: "Free",
          price: 29,
          currency: "USD",
          period: "Per Month",
          features: [
            "5 PPC Campaigns",
            "Digital Marketing",
            "Marketing Agency",
            "Seo Friendly",
            "UI/UX designs",
          ],
          buttonText: "Purchase Now",
          buttonHref: "#",
          active: false,
        },
        {
          name: "Business",
          price: 50,
          currency: "USD",
          period: "Per Month",
          features: [
            "5 PPC Campaigns",
            "Digital Marketing",
            "Marketing Agency",
            "Seo Friendly",
            "UI/UX designs",
          ],
          buttonText: "Purchase Now",
          buttonHref: "#",
          active: true,
        },
        {
          name: "Advance",
          price: 100,
          currency: "USD",
          period: "Per Month",
          features: [
            "5 PPC Campaigns",
            "Digital Marketing",
            "Marketing Agency",
            "Seo Friendly",
            "UI/UX designs",
          ],
          buttonText: "Purchase Now",
          buttonHref: "#",
          active: false,
        },
      ],
    },
    faqSection: {
      enabled: true,
      mainHeadline: "This is main headline",
      description: "This is description",
      primaryButtonText: "Primary Button",
      primaryButtonHref: "#",
      faqs: [
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
    testimonialSection: {
      enabled: true,
      subHeadline: "What our customers say",
      mainHeadline: "Testimonial",
      description: "This is description",
      testimonials: [
        {
          name: "This is the name",
          role: "This is the role",
          statement: "This is testimonial statement",
          img: "assets/images/testimonial/testimonial-dark-02.jpg",
        },
        {
          name: "This is the name",
          role: "This is the role",
          statement: "This is testimonial statement",
          img: "assets/images/testimonial/testimonial-dark-02.jpg",
        },
        {
          name: "This is the name",
          role: "This is the role",
          statement: "This is testimonial statement",
          img: "assets/images/testimonial/testimonial-dark-02.jpg",
        },
      ],
    },
    contactSection: {
      enabled: true,
      subHeadline: "Contact Form",
      mainHeadline: "Getting in touch",
      contactNumber: "+60 12 3456 789",
      emailAddress: "example@gmail.com",
      location: "This is office address from payload",
      googleMapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd",
    },
    footerSection: {
      enabled: true,
      logoImg: {
        light: "/assets/images/logo/logo.png",
        dark: "/assets/images/logo/logo-dark.png",
      },

      button: { text: "More info", href: "#" },
      subHeading1: "This is subheading 1",
      mainHeading: "This is main heading",

      subHeading2: "This is subheading 2",

      navigation: [
        {
          title: "Title 1",
          subNavigations: [
            { title: "Subitem A", href: "#" },
            { title: "Subitem B", href: "#" },
            { title: "Subitem C", href: "#" },
          ],
        },
        {
          title: "Title 2",
          subNavigations: [
            { title: "Subitem A", href: "#" },
            { title: "Subitem B", href: "#" },
            { title: "Subitem C", href: "#" },
          ],
        },
        {
          title: "Title 3",
          subNavigations: [
            { title: "Subitem A", href: "#" },
            { title: "Subitem B", href: "#" },
            { title: "Subitem C", href: "#" },
          ],
        },
      ],

      socialProof: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },

    copyrightSection: {
      navigation: [
        {
          title: "Privacy Policy",
          href: "#",
        },
        {
          title: "Terms And Condition",
          href: "#",
        },
        {
          title: "Contact Us",
          href: "#",
        },
      ],
      copyrightText: "Company",
    },

    blogSection: {
      enabled: true,
      subHeadline: "subHeadline from payload",

      mainHeadline: "mainHeadline from payload",
      description: "description form payload",

      blogs: [
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

    statsSection: {
      enabled: true,
      subHeadline: "This is subheadline",
      mainHeadline: "This is mainheadline",

      stats: [
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
        {
          statData: 575,
          title: "Stat title",
          description: "This is stat description",
        },
      ],
    },
  },
};
