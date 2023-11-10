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
          Nav: {
            AboutMe: "About Me",
            TextEditor: "TextEditor"
          },
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
          },
          Home:{
            ReadingTime: "Reading Time"
          }
        },
      },
      pt: {
        translation: {
          Nav: {
            AboutMe: "Sobre Mim",
            TextEditor: "Editor de Texto"
          },
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
          },
          Home:{
            ReadingTime: "Tempo de Leitura"
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