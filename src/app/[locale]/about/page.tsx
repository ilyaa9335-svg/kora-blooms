"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="section-container py-16">
      {/* Hero area */}
      <div className="relative rounded-[20px] overflow-hidden mb-12">
        <img
          src="/photos/about-coral-rose.jpg"
          alt="KORA Blooms — signature coral rose"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
          <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            {t("title")}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <div className="card-elevated p-6 sm:p-8 md:p-12 mb-8">
          <p className="text-dark text-base md:text-lg leading-relaxed mb-6">
            {t("text")}
          </p>
          <p className="text-stone text-sm leading-relaxed">
            {t("story")}
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card-elevated p-6 text-center">
            <img
              src="/photos/lavender-garden.jpg"
              alt=""
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 ring-2 ring-mint-light"
            />
            <h3 className="font-playfair text-dark font-semibold mb-2">{t("value1Title")}</h3>
            <p className="text-stone text-sm">{t("value1Text")}</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <img
              src="/photos/pink-whisper.jpg"
              alt=""
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 ring-2 ring-mint-light"
            />
            <h3 className="font-playfair text-dark font-semibold mb-2">{t("value2Title")}</h3>
            <p className="text-stone text-sm">{t("value2Text")}</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <img
              src="/photos/about-candles.jpg"
              alt=""
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 ring-2 ring-mint-light"
            />
            <h3 className="font-playfair text-dark font-semibold mb-2">{t("value3Title")}</h3>
            <p className="text-stone text-sm">{t("value3Text")}</p>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="bg-blush rounded-[16px] p-8 text-center">
          <h3 className="font-playfair text-dark text-xl font-semibold mb-3">{t("followTitle")}</h3>
          <p className="text-stone text-sm mb-5">{t("followText")}</p>
          <a
            href="https://instagram.com/kora.blooms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint text-sm px-6 py-3"
          >
            @kora.blooms
          </a>
        </div>
      </div>
    </div>
  );
}
