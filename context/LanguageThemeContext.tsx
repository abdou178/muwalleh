"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface ILanguageContext {
  language: Language;
  direction: Direction;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T>(en: T, ar: T) => T;
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("preferred-language") as Language | null;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguageState(savedLang);
      document.documentElement.setAttribute("lang", savedLang);
      document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");
    } else {
      // Default to Arabic for Sharjah UAE local audience
      setLanguageState("ar");
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", lang);
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "ar" ? "en" : "ar";
    setLanguage(nextLang);
  };

  const direction: Direction = language === "ar" ? "rtl" : "ltr";
  const isRtl = language === "ar";

  const t = <T,>(en: T, ar: T): T => {
    return language === "ar" ? ar : en;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        isRtl,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </NextThemesProvider>
  );
}
