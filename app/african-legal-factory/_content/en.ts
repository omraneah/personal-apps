import type { Dictionary } from "./dictionary";

const CALENDLY = "https://calendly.com/soniamavouna/alf";
const CALENDLY_REG = "https://calendly.com/soniamavouna/alf?month=2026-01";

export const en: Dictionary = {
  meta: {
    siteName: "African Legal Factory",
    tagline: "Legal services for the African startup ecosystem",
  },
  nav: {
    home: "Home",
    offres: "What we do",
    academy: "Academy",
    about: "About",
    mission: "Mission & values",
    experts: "Our experts",
    gallery: "Gallery",
    contact: "Contact",
    newsletter: "Newsletter",
    articles: "Articles",
    langSwitch: { fr: "Français", en: "English" },
  },
  footer: {
    contactLabel: "Contact",
    phone: "+33 6 68 32 83 14",
    email: "formation@africanlegalfactory.com",
    rights: "© 2023 African Legal Factory. All rights reserved.",
    poweredBy: "powered by Mavouna Avocats",
    poweredByHref: "https://www.mavouna-avocats.com/",
    legal: [
      { label: "CGUV", href: "/african-legal-factory/fr/legal/cguv" },
      { label: "Mentions légales", href: "/african-legal-factory/fr/legal/mentions-legales" },
      { label: "Politique de données", href: "/african-legal-factory/fr/legal/politique-donnees" },
      { label: "Accompagnement frais fixes", href: "/african-legal-factory/fr/legal/accompagnement-ponctuel" },
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/african-legal-factory/" },
      { label: "Facebook", href: "https://www.facebook.com/africanlegalfactory/" },
    ],
  },
  home: {
    heroEyebrow: "Since 2021",
    heroHeadline:
      "We help entrepreneurs navigate legal complexity. We help incubators scale their impact. We help investors back better-prepared founders.",
    heroSubhead: "Building the legal infrastructure for African entrepreneurship.",
    heroCta: { label: "Review a contract", href: CALENDLY },

    pillarsEyebrow: "Three pillars",
    pillarsHeadline: "A complete legal infrastructure for the African tech ecosystem.",
    pillars: [
      {
        title: "For entrepreneurs",
        body: "Accessible legal tools to create, protect, and sign safely.",
      },
      {
        title: "For incubators and investors",
        body: "Training and capacity building to structure cohorts ready to raise and accelerate due diligence.",
      },
      {
        title: "For universities",
        body: "Academic partnerships and bespoke programs for the next generation of founders and lawyers.",
      },
    ],

    toolsEyebrow: "Our tools",
    toolsHeadline: "Too many founders neglect their legal foundation. And they pay for it.",
    toolsQuote:
      "A weak legal setup leads to unbalanced contracts, unprotected brand and blocked fundraising. We secure the core of your startup.",
    tools: [
      {
        title: "Structure your company",
        body: [
          "Fast and compliant setup (OHADA).",
          "Incorporation, registration, documentation.",
          "Solid foundation for fundraising.",
        ],
      },
      {
        title: "Protect your brand",
        body: [
          "OAPI / ARIPO filings.",
          "Protection strategy and asset securing.",
        ],
      },
      {
        title: "Secure your contracts",
        body: [
          "24-hour review.",
          "Risks identified, actionable recommendations.",
          "Fixed pricing. AI-assisted, lawyer-validated.",
        ],
      },
    ],
    toolsCta: { label: "Contact us", href: CALENDLY },

    trainingEyebrow: "Training & ecosystem",
    trainingHeadline: "Train founders. Strengthen the ecosystem.",
    trainingIntro: "We work with incubators, universities, and investors to build legally solid startups.",
    trainingPullquote:
      "Contracts are like seat belts. You don't feel the need — until the accident.",
    trainingTracks: [
      {
        title: "Incubators & accelerators",
        partners: "212 Founders, ARM Labs",
        bullets: [
          "Training for startup cohorts",
          "Investment-ready startups",
          "Higher-quality deal flow",
        ],
      },
      {
        title: "Universities & business schools",
        partners: "HEC Africa, 3A",
        bullets: [
          "Practical startup law training",
          "Access to ALF legal tools",
          "Job-ready, operational profiles",
        ],
      },
      {
        title: "Investors & funds",
        partners: "AFDB, Investisseurs & Partenaires",
        bullets: [
          "Better-prepared investment teams",
          "Faster due diligence processes",
          "Stronger governance across portfolios",
        ],
      },
    ],
    trainingCta: { label: "Register your company", href: CALENDLY_REG },

    trustEyebrow: "They already trust us",
    trustHeadline: "Since 2021, the African ecosystem chooses ALF.",
    trustIntro:
      "Incubators, schools and impact structures across the continent have chosen ALF to train and legally secure their entrepreneurs.",
    trustPartners: [
      "Africinnov",
      "Meet Africa",
      "ARM Labs",
      "Kluster CFCIM",
      "212 Founders",
      "Incubivoir",
      "Réseau Entreprendre",
      "ReaBridge",
    ],

    ecosystemEyebrow: "Ecosystem",
    ecosystemHeadline: "A legal ecosystem that strengthens the entire chain.",
    ecosystemIntro:
      "Legal complexity is one of the major brakes on startup growth in Africa. ALF doesn't solve an isolated problem — we structure the whole ecosystem.",
    ecosystemPoints: [
      "Entrepreneurs: tools to create, protect and sign safely.",
      "Incubators: programs to structure cohorts ready to raise.",
      "Schools & investors: training and tools to professionalize the ecosystem.",
    ],
    ecosystemCta: { label: "Build with ALF", href: CALENDLY },

    faqEyebrow: "FAQ",
    faqHeadline: "Still have questions?",
    faq: [
      {
        q: "What is African Legal Factory?",
        a: "ALF is an AI-native legaltech dedicated to African entrepreneurs. We combine AI and a network of specialized lawyers to deliver essential legal services: company incorporation, trademark filing, contract review and training.",
      },
      {
        q: "Who are your services for?",
        a: "Entrepreneurs, startups, investors, incubators and institutions structuring their activities in Africa.",
      },
      {
        q: "Which countries do you cover?",
        a: "Primarily Francophone Africa under OHADA, plus select local jurisdictions for trademark filing, structuring and contracts.",
      },
      {
        q: "How does contract review work?",
        a: "Submit your contract via our form. We run an AI-assisted analysis validated by a lawyer. You get clear, structured, actionable feedback within 24 hours. Covered: SaaS, partnerships, NDAs, service agreements.",
      },
      {
        q: "How long does incorporation take?",
        a: "Typically a few days to two weeks depending on country and file complexity. We provide statutes, registration formalities and administrative documents.",
      },
      {
        q: "How long does trademark filing take?",
        a: "Several months — but your protection begins as of filing.",
      },
      {
        q: "Are my documents confidential?",
        a: "Yes. We apply strict confidentiality and data protection standards.",
      },
      {
        q: "Can I contact you before ordering?",
        a: "Of course. Email hello@africanlegalfactory.com with any question.",
      },
    ],
  },
  newsletter: {
    eyebrow: "Newsletter",
    headline: "Receive our best deals and African tech & legal news.",
    button: "Subscribe",
  },
};
