interface PricingPackages {
  name: string;
  price: number;
  currency: string;
  period: string;
  features: Array<string>;
  active: boolean;
  buttonText: string;
  buttonHref: string;
}

export default PricingPackages;
