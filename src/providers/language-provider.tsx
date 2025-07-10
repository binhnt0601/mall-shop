import { useCallback } from "react";

import { DEFAULT_LOCALE, SupportedLocale } from "@/helpers/locales";
import { useActiveLocale } from "@/hooks/useActiveLocale";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import { ExI18nProvider } from "./i18n";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useActiveLocale();

  const [lang, setLangLocal] = useLocalStorage("language", DEFAULT_LOCALE);

  const onActivate = useCallback(
    (locale: SupportedLocale) => {
      if (lang === locale && typeof window !== "undefined") {
        document.documentElement.setAttribute("lang", locale);
        setLangLocal(locale);
      } else {
        setLangLocal(locale);
      }
    },
    [lang, setLangLocal]
  );

  return (
    <ExI18nProvider key={locale} locale={locale} onActivate={onActivate}>
      {children}
    </ExI18nProvider>
  );
}
