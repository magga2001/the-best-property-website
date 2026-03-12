"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Locale, getTranslations, defaultLocale } from "./config";
import type { Translations } from "./locales/en";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>(
    getTranslations(defaultLocale)
  );

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setTranslations(getTranslations(newLocale));
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", newLocale);
    }
  }, []);

  // Load saved locale on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("preferred-locale") as Locale;
      if (savedLocale && (savedLocale === "en" || savedLocale === "th")) {
        setLocale(savedLocale);
      }
    }
  }, [setLocale]);

  return (
    <LanguageContext.Provider value={{ locale, t: translations, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
