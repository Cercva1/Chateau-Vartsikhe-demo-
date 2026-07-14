import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "cv-locale";
const SUPPORTED = ["en", "ka"];

function initialLocale(fallback) {
  if (typeof window === "undefined") return fallback;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED.includes(saved) ? saved : fallback;
}

export function LanguageProvider({ children, defaultLocale = "en" }) {
  const [locale, setLocale] = useState(() => initialLocale(defaultLocale));

  // Remember the choice across reloads, and keep <html lang> honest so
  // screen readers and search engines see the right language.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Usage: const { locale } = useLanguage(); then pick text via content[locale]
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
