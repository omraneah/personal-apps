import "server-only";
import type { Dictionary } from "../_content/dictionary";

const loaders = {
  fr: () => import("../_content/fr").then((m) => m.fr),
  en: () => import("../_content/en").then((m) => m.en),
} as const;

export type Locale = keyof typeof loaders;

export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

export const hasLocale = (value: string): value is Locale => value in loaders;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  loaders[locale]();
