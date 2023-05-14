import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import uk from './uk';
import es from './es';

export const resources = {
  uk: { translation: uk },
  en: { translation: en },
  es: { translation: es },
};

export const appLocales = Object.keys(resources);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: appLocales,
    react: {
      useSuspense: true
    },
  });

export default i18n;
