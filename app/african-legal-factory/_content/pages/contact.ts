import type { Locale } from "../../_lib/i18n";

type ContactPage = {
  h1: string;
  body: string;
  address: string;
  phone: string;
  email: string;
  formLabel: string;
  privacyNotice: string;
};

const fr: ContactPage = {
  h1: "Contact",
  body: "Nous vous accompagnons juridiquement dans toutes vos problématiques liées au droit des affaires. Remplissez le formulaire ou écrivez-nous — notre équipe vous recontacte rapidement.",
  address: "14 rue Le Sueur, 75016 Paris",
  phone: "+33 6 68 32 83 14",
  email: "formation@africanlegalfactory.com",
  formLabel: "Écrivez-nous",
  privacyNotice:
    "En remplissant ce formulaire, ALF recueille et traite vos données à caractère personnel en tant que responsable de traitement afin de répondre à vos demandes. Vous disposez d'un droit d'accès, de rectification, d'opposition, d'effacement, de limitation, de portabilité et de directives post-mortem sur vos données.",
};

const en: ContactPage = {
  h1: "Contact",
  body: "We support you legally across all your business-law questions. Send a message or write to us — our team gets back to you quickly.",
  address: "14 rue Le Sueur, 75016 Paris",
  phone: "+33 6 68 32 83 14",
  email: "formation@africanlegalfactory.com",
  formLabel: "Write to us",
  privacyNotice:
    "By submitting this form, ALF collects and processes your personal data as data controller to answer your request. You have the right to access, rectify, object, erase, restrict, port and set post-mortem directives on your data.",
};

export const contactContent: Record<Locale, ContactPage> = { fr, en };
