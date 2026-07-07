export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  bn: () => import("@/dictionaries/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const dictLoader =
    dictionaries[locale as keyof typeof dictionaries] ??
    dictionaries[defaultLocale];
  return dictLoader();
};
