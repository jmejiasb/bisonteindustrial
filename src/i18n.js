import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta idioma del navegador automáticamente
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Header/Hero
          "hero.title": "Bisonte Industrial USA LLC",
          "hero.subtitle": "Your wholesaler supplier for federal, state and local agencies.",
          
          // Services
          "services.title": "Our Products",
          "services.subtitle": "And Services",
          "services.pumps": "Pumps and Motors",
          "services.hay": "Alfalfa and Other Hay",
          "services.medical": "Medical Supplies",
          "services.lab": "Lab Equipment",
          "services.chemicals": "Chemicals",
          
          // About
          "about.title": "About Us",
          
          // Contact
          "contact.title": "Contact Us",
        }
      },
      es: {
        translation: {
          // Header/Hero
          "hero.title": "Bisonte Industrial USA LLC",
          "hero.subtitle": "Tu proveedor mayorista para agencias federales, estatales y locales.",
          
          // Services
          "services.title": "Nuestros Productos",
          "services.subtitle": "Y Servicios",
          "services.pumps": "Bombas y Motores",
          "services.hay": "Alfalfa y Otros Henos",
          "services.medical": "Suministros Médicos",
          "services.lab": "Equipo de Laboratorio",
          "services.chemicals": "Químicos",
          
          // About
          "about.title": "Sobre Nosotros",
          
          // Contact
          "contact.title": "Contáctanos",
        }
      }
    },
    fallbackLng: 'en', // Idioma por defecto si no detecta ninguno
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;