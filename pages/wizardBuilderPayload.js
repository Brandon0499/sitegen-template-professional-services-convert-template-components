const wizardBuilderPayload = {
  base: {
    faq: [],
    name: {
      value: "Ali Car Workshop",
    },
    locations: [
      {
        street: {},
        city: {},
        state: {},
        zip: {},
        country: {},
        officeNumber: {},
        officeHours: {},
        officeHoursDays: {},
        officeHoursTime: {},
        officeHoursTimeZone: {},
        email: {},
      },
    ],
    images: [
      {
        imageUrl: "https://someurl.com.jpg",
        caption: {
          value: "Some caption",
          minWordCount: 10,
          maxWordCount: 20,
          required: true,
        },
      },
    ],
    logo: {
      light: "/assets/images/logo/logo.png",
      dark: "/assets/images/logo/logo-dark.png",
    },
    callToAction: [
      {
        value: "Reach out to us",
        minWordCount: 30,
        maxWordCount: 50,
        required: true,
      },
    ],
  },
  home: {
    images: [
      {
        imageUrl: "https://someurl.com.jpg",
        caption: {
          value: "Some caption",
          minWordCount: 10,
          maxWordCount: 20,
          required: true,
        },
      },
    ],
    whatWeDo: {},
    aboutYourBusiness: {},
    keyHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
      value: "The best car workshop in the world",
    },
    subHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: false,
    },
    services: {
      serviceName: {
        minWordCount: 30,
        maxWordCount: 50,
        required: true,
      },
      serviceSummary: {
        minWordCount: 30,
        maxWordCount: 100,
        required: false,
      },
      img: {
        required: false,
      },
      serviceSocialProof: {
        required: false,
        proofs: [
          {
            img: {},
            title: {},
            description: {},
            type: {},
          },
        ],
      },
    },
    pastProjects: {},
    team: {
      members: [
        {
          name: {},
          title: {},
          img: {},
          description: {},
          position: {},
          socialUrl: {
            facebook: {},
            twitter: {},
            linkedin: {},
            instagram: {},
          },
        },
      ],
      required: false,
    },
    companySocialProof: {},
  },
  services: {
    name: {},
    img: {
      imageUrl: "https://someurl.com.jpg",
      caption: {
        value: "Some caption",
        minWordCount: 10,
        maxWordCount: 20,
        required: true,
      },
    },
    keyHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
    subHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
    serviceDescription: {
      minWordCount: 300,
      maxWordCount: 500,
      required: true,
    },
    features: [
      {
        header: {},
        subHeader: {},
        description: {},
        img: {},
        howDoesItWork: {},
      },
    ],
  },
  careers: {},
  about: {
    images: [
      {
        imageUrl: "https://someurl.com.jpg",
        caption: {
          value: "Some caption",
          minWordCount: 10,
          maxWordCount: 20,
          required: true,
        },
      },
    ],
    description: {
      minWordCount: 300,
      maxWordCount: 500,
      required: true,
    },
    keyHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
    subHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
    team: [
      {
        name: {},
        title: {},
        img: {},
        description: {},
        position: {},
        socialUrl: {
          facebook: {},
          twitter: {},
          linkedin: {},
          instagram: {},
        },
      },
    ],
  },
  contact: {
    images: [
      {
        imageUrl: "https://someurl.com.jpg",
        caption: {
          value: "Some caption",
          minWordCount: 10,
          maxWordCount: 20,
          required: true,
        },
      },
    ],
    keyHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
    subHeadline: {
      minWordCount: 30,
      maxWordCount: 50,
      required: true,
    },
  },
};

export default wizardBuilderPayload;
