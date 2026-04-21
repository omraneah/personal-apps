import type { Block } from "../blocks";
import type { Locale } from "../../_lib/i18n";

type OffresPage = {
  h1: string;
  intro: Block[];
  sections: { title: string; partners?: string; blocks: Block[]; cta: { label: string; href: string } }[];
};

const CALENDLY = "https://calendly.com/soniamavouna/alf";
const CALENDLY_INV = "https://calendly.com/soniamavouna/alf?month=2026-01";
const BASE = "/african-legal-factory";

const fr: OffresPage = {
  h1: "Nos offres juridiques, selon ton stade et tes enjeux.",
  intro: [
    { t: "p", c: "Depuis 2021, African Legal Factory met à disposition une infrastructure juridique pensée pour un usage terrain : structurer les opérations juridiques, sécuriser les deals, anticiper les exigences des investisseurs." },
  ],
  sections: [
    {
      title: "Pour les startups",
      blocks: [
        { t: "p", c: "Créer une startup en Afrique francophone sans bases juridiques solides expose à des risques majeurs : blocages contractuels, conflits entre associés, levées de fonds retardées ou annulées." },
        { t: "ul", c: [
          "Structurer juridiquement le projet et la société",
          "Sécuriser les contrats essentiels du quotidien",
          "Préparer les étapes clés : incubation, partenariats, levée de fonds",
        ]},
      ],
      cta: { label: "Accéder aux solutions pour startups", href: CALENDLY },
    },
    {
      title: "Pour les investisseurs et incubateurs",
      blocks: [
        { t: "p", c: "En Afrique francophone, de nombreux deals échouent non pas à cause du business, mais à cause de fondations juridiques insuffisantes découvertes trop tard." },
        { t: "ul", c: [
          "Former les équipes et les cohortes aux standards juridiques attendus",
          "Préparer les startups aux exigences de la due diligence",
          "Sécuriser les opérations d'investissement et les structurations cross-border",
        ]},
      ],
      cta: { label: "Accéder aux solutions pour investisseurs", href: CALENDLY_INV },
    },
    {
      title: "Universités et écoles",
      blocks: [
        { t: "p", c: "African Legal Factory développe des programmes pédagogiques sur mesure, comme celui mis en place avec l'école 3A depuis 3 ans afin de former les étudiants aux enjeux juridiques spécifiques des entreprises à impact." },
        { t: "ul", c: [
          "La structuration d'entreprises sociales",
          "La gouvernance responsable",
          "La propriété intellectuelle",
          "Les mécanismes de financement à impact",
        ]},
      ],
      cta: { label: "Rejoindre l'ALF Academy — Université & École", href: `${BASE}/fr/contact` },
    },
  ],
};

const en: OffresPage = {
  h1: "Our legal offers, tailored to your stage and stakes.",
  intro: [
    { t: "p", c: "Since 2021, African Legal Factory has operated legal infrastructure built for the field — to structure operations, secure deals, and anticipate investor requirements." },
  ],
  sections: [
    {
      title: "For startups",
      blocks: [
        { t: "p", c: "Founding an African startup without a solid legal foundation leads to contractual blocks, shareholder conflicts, and failed fundraising — often discovered too late." },
        { t: "ul", c: [
          "Structure your company and project",
          "Secure the contracts you use every day",
          "Prepare for incubation, partnerships, fundraising",
        ]},
      ],
      cta: { label: "Access startup solutions", href: CALENDLY },
    },
    {
      title: "For investors and incubators",
      blocks: [
        { t: "p", c: "In Francophone Africa, many deals fail — not because of the business, but because weak legal foundations surface too late in due diligence." },
        { t: "ul", c: [
          "Train teams and cohorts to meet expected legal standards",
          "Prepare startups for due diligence requirements",
          "Secure investment operations and cross-border structuring",
        ]},
      ],
      cta: { label: "Access investor solutions", href: CALENDLY_INV },
    },
    {
      title: "Universities & schools",
      blocks: [
        { t: "p", c: "ALF develops bespoke academic programs, including a three-year partnership with École 3A that trains students on the legal realities of impact-oriented businesses." },
        { t: "ul", c: [
          "Social enterprise structuring",
          "Responsible governance",
          "Intellectual property",
          "Impact financing mechanisms",
        ]},
      ],
      cta: { label: "Join the ALF Academy — University & School", href: `${BASE}/en/contact` },
    },
  ],
};

export const offresContent: Record<Locale, OffresPage> = { fr, en };
