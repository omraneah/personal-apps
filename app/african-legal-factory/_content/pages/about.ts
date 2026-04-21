import type { Block } from "../blocks";
import type { Locale } from "../../_lib/i18n";

type AboutPage = {
  h1: string;
  sections: { title: string; blocks: Block[] }[];
  values: { title: string; body: string }[];
  team: string[];
};

const fr: AboutPage = {
  h1: "ALF makes the African legal revolution happen.",
  sections: [
    {
      title: "Une plateforme innovante pour aider les plus grands innovateurs",
      blocks: [
        { t: "p", c: "African Legal Factory est la première plateforme de services et de contenus juridiques dédiée exclusivement aux entrepreneurs africains." },
        { t: "p", c: "Notre mission : fournir un accompagnement juridique aux entrepreneurs, afin que les entreprises bien gouvernées obtiennent de meilleures valorisations. Créée par Mavouna Avocats, la plateforme combine expertise juridique et innovation technologique." },
      ],
    },
    {
      title: "Une communauté d'entrepreneurs et de juristes",
      blocks: [
        { t: "p", c: "Nous construisons une infrastructure virtuelle reliant entrepreneurs et professionnels du droit à travers le continent — avec un accent sur l'accessibilité via l'efficacité technologique." },
      ],
    },
  ],
  values: [
    { title: "Le courage", body: "Encourager les entrepreneurs à dépasser leurs peurs et limitations par une exécution déterminée." },
    { title: "Le don", body: "Pay it forward est notre mantra. Partager ses connaissances sans attendre de retour." },
  ],
  team: ["Sonia MAVOUNA", "Kelly HAZAN", "Fatima MOUDJAOUI", "Boris DOSSOUVI"],
};

const en: AboutPage = {
  h1: "ALF makes the African legal revolution happen.",
  sections: [
    {
      title: "An innovative platform for top innovators",
      blocks: [
        { t: "p", c: "African Legal Factory operates as a dedicated legal content and services platform for African entrepreneurs. The organization aims to equip founders with essential legal resources to navigate entrepreneurial challenges successfully." },
        { t: "p", c: "The platform emerged from Mavouna Avocats, a law firm specializing in African entrepreneur support, founded by attorneys experienced across European and African markets who merged legal expertise with technological innovation." },
      ],
    },
    {
      title: "A community of entrepreneurs and lawyers",
      blocks: [
        { t: "p", c: "The platform builds virtual infrastructure enabling continental entrepreneurs to overcome legal obstacles. Services emphasize information sharing, practical guidance, and affordable legal assistance through technology-enhanced efficiency." },
      ],
    },
  ],
  values: [
    { title: "The courage", body: "Dare to act. Defy convention. Go beyond your own limits despite risk and fear." },
    { title: "The donation", body: "Pay it forward is our mantra — knowledge sharing and generous contribution without expectation." },
  ],
  team: ["Sonia MAVOUNA", "Kelly HAZAN", "Fatima MOUDJAOUI", "Boris DOSSOUVI"],
};

export const aboutContent: Record<Locale, AboutPage> = { fr, en };
