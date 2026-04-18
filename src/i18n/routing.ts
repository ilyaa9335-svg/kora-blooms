import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["cs", "en", "ru", "uk"],
  defaultLocale: "cs",
  localePrefix: "always",
});
