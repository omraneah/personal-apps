export type Dictionary = {
  meta: {
    siteName: string;
    tagline: string;
  };
  nav: {
    home: string;
    offres: string;
    academy: string;
    about: string;
    mission: string;
    experts: string;
    gallery: string;
    contact: string;
    newsletter: string;
    articles: string;
    langSwitch: { fr: string; en: string };
  };
  footer: {
    contactLabel: string;
    phone: string;
    email: string;
    rights: string;
    poweredBy: string;
    poweredByHref: string;
    legal: { label: string; href: string }[];
    social: { label: string; href: string }[];
  };
  home: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSubhead: string;
    heroCta: { label: string; href: string };
    pillarsEyebrow: string;
    pillarsHeadline: string;
    pillars: { title: string; body: string }[];
    toolsEyebrow: string;
    toolsHeadline: string;
    toolsQuote: string;
    tools: { title: string; body: string[] }[];
    toolsCta: { label: string; href: string };
    trainingEyebrow: string;
    trainingHeadline: string;
    trainingIntro: string;
    trainingPullquote?: string;
    trainingTracks: { title: string; partners: string; bullets: string[] }[];
    trainingCta: { label: string; href: string };
    trustEyebrow: string;
    trustHeadline: string;
    trustIntro: string;
    trustPartners: string[];
    ecosystemEyebrow: string;
    ecosystemHeadline: string;
    ecosystemIntro: string;
    ecosystemPoints: string[];
    ecosystemCta: { label: string; href: string };
    faqEyebrow: string;
    faqHeadline: string;
    faq: { q: string; a: string }[];
  };
  newsletter: {
    eyebrow: string;
    headline: string;
    button: string;
  };
};
