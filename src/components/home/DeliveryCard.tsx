"use client";

import { useTranslations } from "next-intl";

export default function DeliveryCard() {
  const t = useTranslations("delivery");

  return (
    <section className="section-container pb-12">
      <div className="card-elevated p-5 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="bg-blush rounded-[12px] w-12 h-12 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 md:w-10 md:h-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l-4 8H8m0-8l-2-4H2m6 4v8m0 0a2 2 0 104 0m-4 0a2 2 0 004 0m6 0a2 2 0 104 0 2 2 0 01-4 0" />
            </svg>
          </div>
          <h3 className="md:hidden font-playfair text-dark text-lg font-semibold leading-tight">
            {t("title")}
          </h3>
        </div>
        <div className="flex-1">
          <h3 className="hidden md:block font-playfair text-dark text-xl font-semibold mb-2">
            {t("title")}
          </h3>
          <p className="text-stone text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div className="md:ml-auto flex-shrink-0">
          <span className="inline-block bg-mint/10 text-mint text-sm font-medium px-4 py-2 rounded-full">
            {t("badge")}
          </span>
        </div>
      </div>
    </section>
  );
}
