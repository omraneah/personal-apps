import type { Locale } from "../../_lib/i18n";

type Expert = {
  name: string;
  flags: string;
  title: string;
  bio: string;
  linkedin: string;
};

type ExpertsPage = { h1: string; intro: string; experts: Expert[] };

const experts: Expert[] = [
  {
    name: "Sonia Mavouna", flags: "🇫🇷 🇰🇲", title: "Avocate au Barreau de Paris",
    bio: "Accompagnement juridique des startups et fonds d'investissement en Afrique francophone.",
    linkedin: "https://www.linkedin.com/in/soniamavouna/",
  },
  {
    name: "Léon Brandre", flags: "🇨🇮", title: "Data management & protection expert",
    bio: "Gestion et protection des données personnelles en Côte d'Ivoire.",
    linkedin: "https://www.linkedin.com/in/l%C3%A9on-brandre-bb8a5b3a/",
  },
  {
    name: "Kelly Hazan", flags: "🇫🇷 🇲🇦", title: "Avocate au Barreau de Paris",
    bio: "Protection des données personnelles, propriété intellectuelle, droit des technologies émergentes.",
    linkedin: "https://www.linkedin.com/in/kelly-hazan/",
  },
  {
    name: "Abdoulaye Diallo", flags: "🇫🇷", title: "Doctorant & entrepreneur blockchain",
    bio: "Doctorant et entrepreneur dans la technologie blockchain.",
    linkedin: "https://www.linkedin.com/in/abdoulayediallo77/",
  },
  {
    name: "Léa Evrard", flags: "🇫🇷", title: "Avocate au Barreau de Paris",
    bio: "Accompagnement des startups en France.",
    linkedin: "https://www.linkedin.com/in/levrard/",
  },
  {
    name: "Christian Ilizabaliza Juru", flags: "🇫🇷", title: "Juriste & développeur",
    bio: "Smart contracts (Ethereum / Solidity), finance décentralisée.",
    linkedin: "https://www.linkedin.com/in/ilizabaliza-juru-christian-consultant-juridique-blockchain-et-smart-contract-finance-d%C3%A9centralis%C3%A9e/",
  },
];

const expertsEN: Expert[] = [
  { ...experts[0], title: "Member of the Paris Bar", bio: "Legal support for start-ups and investment funds in French-speaking Africa." },
  { ...experts[1], title: "Management & data protection expert", bio: "Management and protection of personal data in Côte d'Ivoire." },
  { ...experts[2], title: "Member of the Paris Bar", bio: "Personal data protection, intellectual property, and new technologies." },
  { ...experts[3], title: "PhD student & blockchain entrepreneur", bio: "PhD student and blockchain entrepreneur." },
  { ...experts[4], title: "Member of the Paris Bar", bio: "Support for startups in France." },
  { ...experts[5], title: "Lawyer & developer", bio: "Smart contracts using Ethereum's Solidity language." },
];

export const expertsContent: Record<Locale, ExpertsPage> = {
  fr: { h1: "The ALF Squad", intro: "L'équipe d'experts et de formateurs d'African Legal Factory.", experts },
  en: { h1: "The ALF Squad", intro: "The ALF team of experts and trainers.", experts: expertsEN },
};
