import { en } from "./locales/en";
import { th } from "./locales/th";

export type Locale = "en" | "th";

export const locales: Record<Locale, typeof en> = {
  en,
  th,
};

export const defaultLocale: Locale = "en"; // Default to English

export function getTranslations(locale: Locale) {
  return locales[locale] || locales[defaultLocale];
}
