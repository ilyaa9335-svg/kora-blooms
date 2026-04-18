"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPreview() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-container pb-16">
      <div className="card-elevated p-6 md:p-8 flex flex-col md:flex-row gap-6">
        <div className="rounded-[12px] w-full md:w-64 h-64 md:h-auto overflow-hidden flex-shrink-0">
          <img
            src="/photos/about-coral-rose.jpg"
            alt="KORA Blooms — signature coral rose"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-playfair text-dark text-2xl font-semibold mb-3">
            {t("title")}
          </h3>
          <p className="text-stone text-sm leading-relaxed mb-5">
            {t("text")}
          </p>
          <div>
            <Link
              href="/about"
              className="btn-blush text-sm px-5 py-2.5"
            >
              {t("cta")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
