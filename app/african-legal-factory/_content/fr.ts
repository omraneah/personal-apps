import type { Dictionary } from "./dictionary";

const CALENDLY = "https://calendly.com/soniamavouna/alf";
const CONTRACTS_TYPEFORM = "https://a7p4d0x41r9.typeform.com/to/eU3doZwB";

export const fr: Dictionary = {
  meta: {
    siteName: "African Legal Factory",
    tagline: "Services juridiques pour l'écosystème startup africain",
  },
  nav: {
    home: "Accueil",
    offres: "Nos offres",
    academy: "Academy",
    about: "À propos",
    mission: "Mission & valeurs",
    experts: "Nos experts",
    gallery: "Galerie",
    contact: "Contact",
    newsletter: "Newsletter",
    articles: "Articles",
    langSwitch: { fr: "Français", en: "English" },
  },
  footer: {
    contactLabel: "Contact",
    phone: "+33 6 68 32 83 14",
    email: "formation@africanlegalfactory.com",
    rights: "© 2023 African Legal Factory. Tous droits réservés.",
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
    heroEyebrow: "Depuis 2021",
    heroHeadline: "Former l'écosystème startup africain aux essentiels juridiques.",
    heroSubhead:
      "Partenaire formation des incubateurs avant que leurs cohortes lèvent, des fonds qui veulent aider leurs participations à scaler, et des écoles qui forment les prochains entrepreneurs.",
    heroCta: { label: "Discuter avec nous", href: CALENDLY },

    pillarsEyebrow: "Trois piliers",
    pillarsHeadline: "Une infrastructure juridique complète pour l'écosystème tech africain.",
    pillars: [
      {
        title: "Pour les entrepreneurs",
        body: "Des outils juridiques accessibles pour créer, protéger, et signer en toute sécurité.",
      },
      {
        title: "Pour les incubateurs et investisseurs",
        body: "Des formations pour structurer des cohortes prêtes à lever et accélérer la due diligence.",
      },
      {
        title: "Pour les universités",
        body: "Des programmes académiques sur mesure pour les prochaines générations d'entrepreneurs et de juristes.",
      },
    ],

    toolsEyebrow: "Nos outils",
    toolsHeadline: "Les outils juridiques pour sécuriser votre startup.",
    toolsQuote:
      "Trop de fondateurs négligent leur socle juridique. Pourtant, c'est lui qui protège leur structure, leur marque, leur levée.",
    tools: [
      {
        title: "Créer votre société en quelques jours",
        body: [
          "Statuts, enregistrement, documents administratifs.",
          "Conforme OHADA et aux spécificités locales.",
        ],
      },
      {
        title: "Protéger votre marque",
        body: [
          "Dépôt OAPI et ARIPO.",
          "Accompagnement complet, de la recherche d'antériorité à l'enregistrement.",
        ],
      },
      {
        title: "Analyser vos contrats",
        body: [
          "Revue sous 24 heures.",
          "Assistée par IA, validée par avocat.",
          "Prix fixe, sans surprise.",
        ],
      },
    ],
    toolsCta: { label: "Discuter de mon besoin juridique", href: CALENDLY },

    trainingEyebrow: "Formation & écosystème",
    trainingHeadline: "Former les entrepreneurs, sécuriser l'écosystème.",
    trainingIntro:
      "Nous accompagnons incubateurs, écoles et investisseurs pour structurer des startups juridiquement solides.",
    trainingTracks: [
      {
        title: "Incubateurs & accélérateurs",
        partners: "212 Founders, ARM Labs",
        bullets: [
          "Formation des cohortes de startups",
          "Startups prêtes pour les investisseurs",
          "Deal flow de meilleure qualité",
        ],
      },
      {
        title: "Écoles & universités",
        partners: "HEC Africa, 3A",
        bullets: [
          "Formation pratique au droit des startups",
          "Accès aux outils juridiques ALF",
          "Profils opérationnels dès la sortie",
        ],
      },
      {
        title: "Investisseurs & fonds",
        partners: "AFDB, Investisseurs & Partenaires",
        bullets: [
          "Équipes d'investissement mieux préparées",
          "Due diligence accélérée",
          "Gouvernance sécurisée à l'échelle du portefeuille",
        ],
      },
    ],
    trainingCta: { label: "Je veux devenir partenaire", href: CONTRACTS_TYPEFORM },

    trustEyebrow: "Ils nous font confiance",
    trustHeadline: "Depuis 2021, l'écosystème africain choisit ALF.",
    trustIntro:
      "Des incubateurs, des écoles et des structures à impact à travers tout le continent ont choisi ALF pour former et sécuriser juridiquement leurs entrepreneurs.",
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

    ecosystemEyebrow: "Écosystème",
    ecosystemHeadline: "Un écosystème juridique qui renforce toute la chaîne.",
    ecosystemIntro:
      "La complexité juridique est l'un des freins majeurs à la croissance des startups en Afrique. ALF ne résout pas un problème isolé — nous structurons tout l'écosystème.",
    ecosystemPoints: [
      "Entrepreneurs : des outils pour créer, protéger, signer en toute sécurité.",
      "Incubateurs : des programmes pour structurer des cohortes prêtes à lever.",
      "Écoles & investisseurs : des formations et outils pour professionnaliser l'écosystème.",
    ],
    ecosystemCta: { label: "Construire avec ALF", href: CONTRACTS_TYPEFORM },

    faqEyebrow: "FAQ",
    faqHeadline: "Encore des questions ?",
    faq: [
      {
        q: "Qu'est-ce qu'African Legal Factory ?",
        a: "ALF est une legaltech AI-native dédiée aux entrepreneurs africains. Nous combinons intelligence artificielle et un réseau d'avocats spécialisés pour délivrer les services juridiques essentiels : création de société, dépôt de marque, revue de contrats et formation.",
      },
      {
        q: "À qui s'adressent vos services ?",
        a: "Aux entrepreneurs, startups, investisseurs, incubateurs et institutions qui souhaitent structurer juridiquement leurs activités en Afrique.",
      },
      {
        q: "Quels pays couvrez-vous ?",
        a: "Principalement les pays d'Afrique francophone sous régime OHADA, ainsi que certaines juridictions locales selon les besoins (dépôt de marque, structuration, contrats).",
      },
      {
        q: "Comment fonctionne la revue de contrat ?",
        a: "Vous soumettez votre contrat via notre formulaire. Nous réalisons une analyse assistée par IA, puis validée par un avocat. Vous recevez un retour clair, structuré et actionnable sous 24 heures. Contrats couverts : SaaS, partenariat, NDA, prestation.",
      },
      {
        q: "Combien de temps pour une création de société ?",
        a: "En général entre quelques jours et deux semaines selon le pays et la complexité du dossier. Nous fournissons l'ensemble des documents : statuts, formalités d'enregistrement, documents administratifs.",
      },
      {
        q: "Combien de temps pour un dépôt de marque ?",
        a: "Plusieurs mois, mais votre protection commence dès le dépôt.",
      },
      {
        q: "Mes documents sont-ils confidentiels ?",
        a: "Oui. Nous appliquons des standards stricts de confidentialité et de protection des données.",
      },
      {
        q: "Puis-je vous contacter avant de commander ?",
        a: "Bien sûr. Écrivez-nous à hello@africanlegalfactory.com pour toute question.",
      },
    ],
  },
  newsletter: {
    eyebrow: "Newsletter",
    headline: "Recevez nos bons plans et l'actualité tech & juridique africaine.",
    button: "S'abonner",
  },
};
