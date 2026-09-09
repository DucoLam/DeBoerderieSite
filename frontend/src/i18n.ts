import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      common: {
        appName: 'De Boerderie',
      },
      welcome: {
        title: 'Welcome',
        description: 'This is the welcome page. Select a language from the navigation bar.',
      },
    },
  },
  nl: {
    translation: {
      common: {
        appName: 'De Boerderie',
      },
      welcome: {
        title: 'Welkom',
        description: 'Dit is de welkomstpagina. Kies een taal in de navigatiebalk.',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
