"use client";

import { useTranslations } from "next-intl";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

export default function CategoryCards() {
  const t = useTranslations("categories");

  return (
    <section className="section-container -mt-10 relative z-10">
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href="#products"
            className="card-float px-3 sm:px-4 md:px-6 py-4 text-center hover:-translate-y-1 transition-all duration-300 flex-1 min-w-0 max-w-[120px] sm:max-w-[160px] md:max-w-[180px]"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-mint-light">
              <img
                src={cat.photo}
                alt={t(cat.slug as "roses" | "bouquets" | "boxes")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-playfair text-dark font-semibold text-sm md:text-base">
              {t(cat.slug as "roses" | "bouquets" | "boxes")}
            </div>
            <div className="text-rose text-xs md:text-sm mt-1">
              {t("from")} {formatPrice(cat.minPrice)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
