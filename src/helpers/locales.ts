import { t } from "@lingui/macro";

export const SUPPORTED_LOCALES = ["en-US", "vi-VN"];
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number] | "pseudo";

export const DEFAULT_LOCALE: SupportedLocale = "en-US";

export function LOCALE_LABEL(locale: SupportedLocale): string {
  switch (locale) {
    case "en-US":
      return t`English`;
    case "vi-VN":
      return t`Vietnamese`;
    default:
      return locale;
  }
}
