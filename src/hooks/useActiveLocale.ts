import { useMemo } from "react";

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  SupportedLocale,
} from "@/helpers/locales";

import { parsedQueryString } from "./useParsedQueryString";

/**
 * Given a locale string (e.g. from user agent), return the best match for corresponding SupportedLocale
 * @param maybeSupportedLocale the fuzzy locale identifier
 */
function parseLocale(
  maybeSupportedLocale: unknown
): SupportedLocale | undefined {
  if (typeof maybeSupportedLocale !== "string") return undefined;
  const lowerMaybeSupportedLocale = maybeSupportedLocale.toLowerCase();

  return SUPPORTED_LOCALES.find(
    (locale) =>
      locale.toLowerCase() === lowerMaybeSupportedLocale ||
      locale.split("-")[0] === lowerMaybeSupportedLocale
  );
}

export function navigatorLocale(): SupportedLocale | undefined {
  if (!navigator || !navigator.language) return undefined;

  const [language, region] = navigator.language.split("-");

  if (region) {
    return (
      parseLocale(`${language}-${region.toUpperCase()}`) ??
      parseLocale(language)
    );
  }

  return parseLocale(language);
}

export function localStore(): SupportedLocale | undefined {
  if (typeof window !== "undefined") {
    const language = localStorage?.getItem("language") as any;
    const userLocale = language ? JSON.parse(language) : undefined;

    return userLocale ?? undefined;
  }

  return undefined;
}

/**
 * Returns the currently active locale, from a combination of user agent, query string, and user settings stored in redux
 * Stores the query string locale in redux (if set) to persist across sessions
 */
export function useActiveLocale(): SupportedLocale {
  const initialLocale =
    parseLocale(parsedQueryString().lng) ?? localStore() ?? DEFAULT_LOCALE;

  return useMemo(() => initialLocale, [initialLocale]);
}
