import type { Locale } from "../../_lib/i18n";

type NewsletterPage = {
  h1: string;
  tagline: string;
  bullets: string[];
  buttonLabel: string;
  archiveLabel: string;
  archiveNote: string;
};

const fr: NewsletterPage = {
  h1: "Newsletter",
  tagline:
    "Chaque mois, African Legal Factory analyse les levées de fonds, les erreurs de structuration et les stratégies juridiques qui transforment une startup fragile en actif structuré.",
  bullets: [
    "Décryptage des levées de fonds en Afrique",
    "Actualité juridique pour les startups",
    "Dates des prochaines formations",
  ],
  buttonLabel: "S'abonner",
  archiveLabel: "Archives",
  archiveNote: "Plus de 30 numéros publiés depuis octobre 2022.",
};

const en: NewsletterPage = {
  h1: "Newsletter",
  tagline: "ALF's mission is to make the law accessible to the builders of tomorrow's Africa.",
  bullets: [
    "News on fundraising in Africa",
    "Legal news concerning startups",
    "Dates of upcoming training courses",
  ],
  buttonLabel: "Subscribe",
  archiveLabel: "Archives",
  archiveNote: "More than 30 issues published since October 2022.",
};

export const newsletterContent: Record<Locale, NewsletterPage> = { fr, en };
