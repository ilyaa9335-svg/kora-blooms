"use client";

import { useTranslations } from "next-intl";

export default function DeliveryCard() {
  const t = useTranslations("delivery");

  return (
    <section className="section-container pb-12">
      <div className="card-elevated p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-blush rounded-[14px] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l-4 8H8m0-8l-2-4H2m6 4v8m0 0a2 2 0 104 0m-4 0a2 2 0 004 0m6 0a2 2 0 104 0 2 2 0 01-4 0" />
          </svg>
        </div>
        <div>
          <h3 className="font-playfair text-dark text-xl font-semibold mb-2">
            {t("title")}
          </h3>
          <p className="text-stone text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div className="md:ml-auto flex-shrink-0 text-center md:text-left">
          <span className="inline-block bg-mint/10 text-mint text-sm font-medium px-4 py-2 rounded-full">
            {t("badge")}
          </span>
        </div>
      </div>
    </section>
  );
}
