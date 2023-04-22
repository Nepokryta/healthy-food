import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import uk from './uk';
import es from './es';

export const resources = {
  uk: { translation: uk },
  en: { translation: en },
  es: { translation: es },
};

export const appLocales = Object.keys(resources);
const selectedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: selectedLanguage || 'uk',
    fallbackLng: appLocales,
    react: {
      useSuspense: true
    },
  });

export default i18n;
