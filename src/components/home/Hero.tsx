"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="px-3 sm:px-4 lg:px-6 pt-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[20px] overflow-hidden min-h-[350px] md:min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/photos/hero-bg.jpg"
              alt="KORA Blooms — Prague flower studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-dark/30 to-dark/15" />
          </div>

          <div className="relative text-center px-4 sm:px-6 py-10 sm:py-12">
            <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto font-inter">
              {t("subtitle")}
            </p>
            <a
              href="#products"
              className="btn-pill text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
