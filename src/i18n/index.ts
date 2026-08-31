import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fr from './fr'
import en from './en'
import pathologiesFr, { summaries as summariesFr } from './pathologies.fr'
import pathologiesEn, { summaries as summariesEn } from './pathologies.en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: { ...fr, pathologies: pathologiesFr, pathologySummaries: summariesFr } },
      en: { translation: { ...en, pathologies: pathologiesEn, pathologySummaries: summariesEn } },
    },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
  })

export default i18n
