import i18n from "i18n-js";
import memoize from "lodash.memoize";

export const translationGetters = {
  en: () => require("./en.json.js.js"),
  es: () => require("./fr.json.js.js")
};
/**
 * Get string according to current locale.
 */
export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

//set locale 
export const setI18nConfig = (language = "en") => {
  translate.cache.clear();
  i18n.translations = { [language]: translationGetters[language]() };
  i18n.locale = language;
};
