import i18n from "i18n-js";
import loadash from "lodash";

export const translationGetters = {
  en: () => require("./en.json"),
  es: () => require("./fr.json")
};
/**
 * Get string according to current locale.
 */
export const translate = loadash.memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

//set locale
export const setI18nConfig = (language = "en") => {
  translate.cache.clear();
  i18n.translations = { [language]: translationGetters[language]() };
  i18n.locale = language;
};
