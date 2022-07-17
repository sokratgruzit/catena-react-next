import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '/public/locales/en/en.json';
import ge from '/public/locales/ge/ge.json';
import fr from '/public/locales/fr/fr.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ge', 'fr'];
const resources = {
    en: { translation: en },
    ge: { translation: ge },
    fr: { translation: fr }
};

i18n
.use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
.use(LanguageDetector) // detect user language
.use(initReactI18next) // pass the i18n instance to react-i18next.
.init({
    fallbackLng, // fallback language is english.
    resources,
    detection: {
        checkWhitelist: true, // options for language detection
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
        escapeValue: false, // no need for react. it escapes by default
    }
});

export default i18n;