// constructor to create object structure
class componentStructure {
  constructor(order, componentName, selectedComponent, payload) {
    this.order = order;
    this.componentName = componentName;
    this.selectedComponent = selectedComponent;
    this.payload = payload;
  }
}

export const professionalServicesTemplateCreator = (data) => {
  try {
    const fetchedData = data.payload;
    let components = [];
    const componentList = [
      "Header",
      "Hero",
      "About",
      "Service",
      "CTA",
      "Team",
      "Pricing",
      "FAQ",
      "Testimonial",
      "Contact",
      "Footer",
      "Copyright",
    ];

    const componentOrder = [
      "headerSection",
      "heroSection",
      "aboutSection",
      "servicesSection",
      "ctaSection",
      "teamSection",
      "pricingSection",
      "faqSection",
      "testimonialSection",
      "contactSection",
      "footerSection",
      "copyrightSection",
    ];

    for (let i = 0; i < componentOrder.length; i++) {
      const key = componentOrder[i];
      if (fetchedData[key].enabled) {
        const order = i;
        const componentName = componentList[i];
        const selectedComponent = componentName;
        let payload;
        payload = fetchedData[key];

        const renderedComponentStructure = new componentStructure(
          order,
          componentName,
          selectedComponent,
          payload
        );
        components.push(renderedComponentStructure);
      }
    }

    // sort component based on order
    components.sort(function (a, b) {
      return a.order - b.order;
    });
    return components;
  } catch (error) {
    console.log(error);
  }
};
