"use client";

import { useTranslations } from "next-intl";

export default function ValueProps() {
  const t = useTranslations("values");

  const values = [
    { icon: "🌸", text: t("fresh") },
    { icon: "✨", text: t("handmade") },
    { icon: "⭐", text: t("rating") },
    { icon: "🎀", text: t("packaging") },
  ];

  return (
    <section className="section-container pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {values.map((v, i) => (
          <div key={i} className="card-elevated p-5 text-center">
            <div className="text-2xl mb-2">{v.icon}</div>
            <div className="text-sm font-medium text-dark">{v.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
