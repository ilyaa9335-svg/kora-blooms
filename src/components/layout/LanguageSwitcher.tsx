"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const localeLabels: Record<string, string> = {
  cs: "CS",
  en: "EN",
  uk: "UK",
  ru: "RU",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      {Object.entries(localeLabels).map(([key, label]) => (
        <button
          key={key}
          onClick={() => switchLocale(key)}
          className={`px-2 py-1 text-sm rounded-md transition-colors ${
            key === locale
              ? "text-mint font-semibold bg-mint/10"
              : "text-dark/50 hover:text-mint"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
