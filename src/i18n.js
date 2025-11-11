import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzJson from "../public/language/uz.json"
import enJson from "../public/language/en.json"
import ruJson from "../public/language/ru.json"


const resources = {
    uz: {
        translation: uzJson
    },
    ru: {
        translation: ruJson
    },
    en: {
        translation: enJson
    },
};

const savedLang = localStorage.getItem("lang") || "uz";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: "uz", 
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;