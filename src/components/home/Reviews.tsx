"use client";

import { useTranslations, useLocale } from "next-intl";
import { reviews } from "@/data/reviews";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Locale } from "@/types";

export default function Reviews() {
  const t = useTranslations("reviews");
  const locale = useLocale() as Locale;

  return (
    <section className="section-container pb-16">
      <SectionHeader label={t("title")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-blush rounded-[16px] p-6">
            <div className="text-rose text-sm mb-3">
              {"★".repeat(review.rating)}
            </div>
            <p className="text-dark/80 text-sm leading-relaxed italic mb-4">
              &ldquo;{review.text[locale]}&rdquo;
            </p>
            <div className="text-dark font-medium text-sm">
              — {review.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
