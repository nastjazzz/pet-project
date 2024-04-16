import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__,
        // debug: true,
        load: 'languageOnly',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
            crossDomain: true,
            withCredentials: true,
            // loadPath: path.resolve(__dirname, 'public', 'locales', '{{lng}}', '{{ns}}.json'),
        },
        keySeparator: false,
    });

export default i18n;
