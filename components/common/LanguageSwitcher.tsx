"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Locale } from "@/lib/i18n/config";

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => handleLanguageChange("th")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          locale === "th"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          locale === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
