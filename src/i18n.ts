import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'bera-lang',
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  const short = lng.startsWith('en') ? 'en' : 'pt';
  document.documentElement.lang = short === 'en' ? 'en-US' : 'pt-BR';
});

export default i18n;
