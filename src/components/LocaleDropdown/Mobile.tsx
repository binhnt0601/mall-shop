import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

import { LOCALE_LABEL, SUPPORTED_LOCALES } from "@/helpers/locales";
import { useActiveLocale } from "@/hooks/useActiveLocale";

export default function LocaleDropdownMobile() {
  const activeLocale = useActiveLocale();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, lng: locale } },
      undefined,
      { shallow: true }
    );
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {/* Button */}
      <button
        className={clsx(
          "w-full flex items-center justify-between px-6 py-3 rounded-xl shadow-md",
          "font-semibold text-white text-xl leading-tight",
          "bg-[#1976d2] transition focus:outline-none",
          "mb-3"
        )}
        style={{
          minHeight: 60,
          boxShadow: "0 4px 12px 0 rgba(25,118,210,0.08)",
        }}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="font-semibold">{LOCALE_LABEL(activeLocale)}</span>
        <span className="flex items-center gap-2">
          <img
            className="h-6 w-9"
            src={`/flags/${activeLocale}.png`}
            alt={activeLocale}
          />
          <HiChevronDown
            size={22}
            className={clsx(
              "ml-1 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </span>
      </button>
      {/* Dropdown */}
      {isOpen && (
        <div
          className="w-full rounded-xl px-4 py-2"
          style={{
            background: "#2196f3", // nhẹ hơn chút khi dropdown (hoặc đổi sang #1976d2 luôn cũng được)
            minHeight: 90,
            boxShadow: "0 4px 12px 0 rgba(25,118,210,0.09)",
          }}
        >
          {SUPPORTED_LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={clsx(
                "flex items-center justify-between w-full px-4 py-3 rounded-lg transition",
                "mb-1",
                locale === activeLocale
                  ? "font-bold text-white bg-[#1976d2] shadow"
                  : "font-normal text-white/90 hover:bg-[#1976d2] hover:text-white"
              )}
              style={{
                minHeight: 48,
                textAlign: "left",
              }}
            >
              <span>{LOCALE_LABEL(locale)}</span>
              <img
                className="h-5 w-8"
                src={`/flags/${locale}.png`}
                alt={locale}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
