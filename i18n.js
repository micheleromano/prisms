import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'], // Add more languages as needed
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { 
        useSuspense: false, // This line disables Suspense 
      },
    resources: {
        en: {
            translation: {
                "teacherDashboard": "Teacher Dashboard",
                "timeSpent": "Time Spent on In-Progress Tasks",
                "realTimeTasksBarChart": "Real Time Tasks",
                "historicalClassData": "Historical Class Data",
                "realTimeAssistance": "Needs Assistance",
                "realTimeStudentsIdle": "Student Idle time"
            }
        }
    }
  });

export default i18n;