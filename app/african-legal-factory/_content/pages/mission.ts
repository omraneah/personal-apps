import type { Block } from "../blocks";
import type { Locale } from "../../_lib/i18n";

type MissionPage = {
  h1: string;
  mission: string;
  vision: string;
  values: string[];
  story: Block[];
  valueDefs: { title: string; body: string }[];
  philosophy: { title: string; body: string }[];
};

const fr: MissionPage = {
  h1: "ALF — une legaltech qui outille juridiquement les entrepreneurs africains vers leurs succès.",
  mission: "Faciliter le succès des entrepreneurs et des investisseurs africains en leur offrant un accès simplifié à des outils et informations juridiques essentiels, via une plateforme unique.",
  vision: "Bâtir la plus grande legaltech africaine afin de supprimer tous les obstacles juridiques et permettre aux entrepreneurs et investisseurs de bâtir une Afrique prospère et inclusive.",
  values: [
    "Excellence", "Justice", "Courage", "Intégrité", "Efficacité", "Responsabilité",
    "Accessibilité", "Diversité", "Communauté", "Empowerment", "Résilience", "Générosité", "Bienveillance",
  ],
  story: [
    { t: "p", c: "Sonia Mavouna, fondatrice et avocate au barreau de Paris, a précédemment exercé chez Clifford Chance, conseillant de grands fonds d'investissement sur des transactions africaines dans les secteurs bancaire, éducatif et agroalimentaire." },
    { t: "h3", c: "Le constat" },
    { t: "p", c: "En Afrique francophone, l'accès au droit reste un luxe, et l'information juridique accessible aux entrepreneurs est quasi inexistante." },
    { t: "h3", c: "La réponse" },
    { t: "p", c: "African Legal Factory est née d'une conviction : le juridique ne doit plus être un frein, mais un instrument de liberté et de puissance." },
    { t: "h3", c: "ADN" },
    { t: "p", c: "ALF fusionne droit, technologie et impact humain." },
  ],
  valueDefs: [
    { title: "Courage", body: "Oser, bousculer les conventions, aller là où personne ne va." },
    { title: "Générosité & partage", body: "La connaissance est libre et abondante ; culture du partage entre experts et novices." },
    { title: "Innovation", body: "Utiliser la technologie pour créer des services juridiques accessibles, efficaces et abordables." },
    { title: "Communauté & soutien mutuel", body: "Une infrastructure qui favorise la collaboration et l'échange." },
    { title: "Empowerment", body: "Fournir aux entrepreneurs les connaissances juridiques et le soutien nécessaires à leur réussite." },
    { title: "Éthique", body: "Respect strict des standards éthiques dans la délivrance des services juridiques." },
  ],
  philosophy: [
    { title: "Accessibilité", body: "Services juridiques abordables grâce à l'efficacité." },
    { title: "Conseil pratique", body: "Des informations juridiques qui empêchent le droit de devenir un obstacle." },
    { title: "Communauté forte", body: "Collaboration entre entrepreneurs et juristes." },
    { title: "Création de valeur", body: "Améliorer la solidité juridique des entreprises." },
    { title: "Innovation service", body: "Technologie au service de la rapidité et du coût." },
  ],
};

const en: MissionPage = {
  h1: "ALF — a legaltech that equips African entrepreneurs with the legal tools for success.",
  mission: "Facilitate the success of African entrepreneurs and investors by offering simplified access to essential legal tools and information, through a single platform.",
  vision: "Drive innovation and economic development in Africa — remove legal barriers for entrepreneurs and investors, and foster an era of inclusive, sustainable prosperity.",
  values: [
    "Justice", "Courage", "Integrity", "Efficiency", "Excellence", "Accountability",
    "Accessibility", "Diversity", "Community", "Empowerment", "Resilience", "Generosity", "Cheerfulness",
  ],
  story: [
    { t: "p", c: "Sonia Mavouna, lawyer and founder, recognized that legal services were prohibitively expensive for African entrepreneurs and that accessible online resources were scarce. She launched ALF to bridge this gap through training and legal support — a movement dedicated to making law accessible across the continent." },
  ],
  valueDefs: [
    { title: "Courage", body: "Act boldly, question convention, and overcome fears in order to improve and succeed." },
    { title: "Giving & sharing", body: "A culture of generosity and sharing between experts and novices. Knowledge is freely abundant." },
    { title: "Innovation", body: "Leverage technology to make legal services more accessible, efficient, and profitable for entrepreneurs." },
    { title: "Community & mutual aid", body: "Environments where collaboration and knowledge exchange between entrepreneurs and lawyers flourish." },
    { title: "Empowerment", body: "Equipping entrepreneurs with legal knowledge to facilitate their entry and success in business." },
    { title: "Ethics", body: "Adhere to ethical standards and principles in the provision of legal services." },
  ],
  philosophy: [
    { title: "Accessibility", body: "Make legal services affordable through technology-enhanced efficiency." },
    { title: "Practical guidance", body: "Provide information so legal considerations become success tools." },
    { title: "Community support", body: "Foster collaboration through virtual infrastructure connecting entrepreneurs and lawyers." },
    { title: "Value creation", body: "Help improve company legal structures and overall entity valuation." },
    { title: "Legal service innovation", body: "Use technology for faster, cost-effective solutions." },
  ],
};

export const missionContent: Record<Locale, MissionPage> = { fr, en };
