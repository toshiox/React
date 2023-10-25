import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Languages: {
            English: 'English',
            Portuguese: 'Portuguese'
          },
          Buttons: {
            Search: 'Search'
          },
          Inputs:{
            PlaceHolders:{
              KeyWord: "Keyword"
            }
          }
        },
      },
      pt: {
        translation: {
          Languages: {
            English: 'Inglês',
            Portuguese: 'Português'
          },
          Buttons: {
            Search: 'Procurar'
          },
          Inputs:{
            PlaceHolders:{
              KeyWord: "Palavra chave"
            }
          }
        },
      },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;