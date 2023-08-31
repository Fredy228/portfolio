import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './lang/en.json';
import ukTranslation from './lang/uk.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  uk: {
    translation: ukTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // язык по умолчанию
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
