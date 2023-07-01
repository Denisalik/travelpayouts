import i18n from 'i18next';
import enTranslation from './en.json';
import ruTranslation from './ru.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};
export const initI18next = () => {
  i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      defaultNS: 'translation',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      resources,
    });
  return i18n;
};
