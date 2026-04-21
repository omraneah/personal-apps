import type { Block } from "../blocks";
import type { Locale } from "../../_lib/i18n";

type AcademyPage = {
  h1: string;
  intro: Block[];
  partners: string[];
  sections: { title: string; blocks: Block[]; cta?: { label: string; href: string } }[];
};

const BASE = "/african-legal-factory";
const BROCHURE = "https://www.africanlegalfactory.com/wp-content/uploads/2022/12/ALF-Brochure-incubateur.pdf";

const fr: AcademyPage = {
  h1: "The ALF Academy",
  intro: [
    { t: "p", c: "Depuis 2021, African Legal Factory a pour mission de bâtir un véritable écosystème juridique en Afrique francophone, afin de sécuriser les entrepreneurs et d'offrir aux investisseurs un cadre serein pour développer leurs projets." },
    { t: "p", c: "À travers l'ALF Academy, nous formons startups, investisseurs et avocats sur les thématiques clés : propriété intellectuelle, levées de fonds, protection des données personnelles, et bien plus encore." },
    { t: "p", c: "Nos programmes se déploient déjà au Maroc, en Côte d'Ivoire, au Nigeria et en Tunisie, et continuent de s'étendre à l'ensemble du continent." },
    { t: "p", c: "Nos formations sont proposées en présentiel comme à distance. Nous offrons également des sessions de coaching, collectives ou individuelles, pour accompagner chaque acteur de l'écosystème selon ses besoins." },
  ],
  partners: [
    "Africinnov", "Meet Africa", "ARM Labs", "Kluster CFCIM", "212 Founders",
    "Incubivoir", "Réseau Entreprendre", "ReaBridge", "Fiatope", "École 3A", "Techstars", "SideQuest",
  ],
  sections: [
    {
      title: "Incubateurs & investisseurs",
      blocks: [
        { t: "p", c: "Depuis 2021, ALF s'associe aux meilleurs incubateurs et accélérateurs pour offrir aux startups africaines un accompagnement juridique concret et opérationnel." },
        { t: "p", c: "Structurer une société, protéger une marque, sécuriser un pacte d'associés, préparer une levée : autant d'étapes clés où un faux pas peut tout compromettre." },
        { t: "p", c: "Avec ALF, les entrepreneurs formés dès l'incubation posent des bases solides et gagnent en crédibilité face aux investisseurs. Notre mission : transformer le droit en un véritable levier de croissance." },
      ],
      cta: { label: "Consulter la brochure incubateur", href: BROCHURE },
    },
    {
      title: "Avocats & juristes",
      blocks: [
        { t: "p", c: "La formation continue des avocats et juristes au droit des startups comporte plusieurs bénéfices :" },
        { t: "ul", c: [
          "Structurer une startup de manière optimale en tenant compte des lois applicables et de ses besoins spécifiques.",
          "Négocier et conclure des contrats avec clients, fournisseurs et partenaires en protégeant les intérêts de la startup.",
          "Accompagner la création d'emplois en Afrique par le conseil juridique et la représentation en contentieux.",
        ]},
      ],
      cta: { label: "Rejoindre l'ALF Academy — Cabinet & juriste", href: `${BASE}/fr/contact` },
    },
    {
      title: "Universités & écoles",
      blocks: [
        { t: "p", c: "ALF développe des programmes sur mesure, comme celui mis en place avec l'école 3A depuis trois ans pour former les étudiants aux enjeux juridiques des entreprises à impact." },
        { t: "ul", c: [
          "Structuration d'entreprises sociales",
          "Gouvernance responsable",
          "Propriété intellectuelle",
          "Mécanismes de financement à impact",
        ]},
        { t: "p", c: "Nous apprenons aux étudiants à structurer les dossiers de levée de fonds ainsi que les obligations de reporting auprès des institutions et investisseurs." },
        { t: "p", c: "L'objectif est double : préparer les futurs entrepreneurs à sécuriser leurs projets dès le départ et sensibiliser la nouvelle génération de juristes aux défis propres à l'économie sociale et solidaire en Afrique." },
      ],
      cta: { label: "Rejoindre l'ALF Academy — Université & École", href: `${BASE}/fr/contact` },
    },
  ],
};

const en: AcademyPage = {
  h1: "The ALF Academy",
  intro: [
    { t: "p", c: "The ALF Academy trains students and provides continuing education for lawyers. We legally arm the next generation to meet the challenges of today and tomorrow." },
  ],
  partners: ["SideQuest", "École 3A"],
  sections: [
    {
      title: "Universities & schools",
      blocks: [
        { t: "p", c: "Training students in business law contributes to:" },
        { t: "ul", c: [
          "Private sector development — business lawyers help company creation and development, help entrepreneurs understand applicable laws, structure businesses, and negotiate contracts.",
          "Attracting foreign investment — foreign investors favor countries with stable legal frameworks. Business lawyers help them understand laws, secure investments, and resolve disputes.",
          "Protecting investors' rights — counsel helps investors protect and enforce rights in disputes.",
        ]},
      ],
      cta: { label: "Join the ALF Academy — University & School", href: `${BASE}/en/contact` },
    },
    {
      title: "Lawyers & jurists",
      blocks: [
        { t: "p", c: "Continuing education for lawyers in business and startup law delivers concrete benefits:" },
        { t: "ul", c: [
          "Structure a startup optimally, considering applicable laws and specific needs.",
          "Negotiate and enter contracts with clients, suppliers, and partners while ensuring compliance and protection.",
          "Startups create jobs in Africa. Lawyers support them through counsel and litigation representation.",
        ]},
      ],
      cta: { label: "Join the ALF Academy — Law firm & lawyer", href: `${BASE}/en/contact` },
    },
  ],
};

export const academyContent: Record<Locale, AcademyPage> = { fr, en };
