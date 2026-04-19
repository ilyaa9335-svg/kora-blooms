"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import type { Locale } from "@/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const t = useTranslations("products");
  const locale = useLocale() as Locale;
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const translation = product.translations[locale];

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      slug: product.slug,
      name: translation.name,
      price: product.price,
      photo: product.photo,
      quantity: 1,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  }

  return (
    <div className="card-elevated group overflow-hidden flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-mint-light/30">
          <img
            src={product.photo}
            alt={translation.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge
              type={product.badge}
              label={
                product.badge === "bestseller"
                  ? t("bestseller")
                  : t("new")
              }
            />
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-playfair text-dark text-lg font-medium leading-snug mb-1 hover:text-mint transition-colors">
            {translation.name}
          </h3>
        </Link>
        <p className="text-stone text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {translation.shortDescription}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
          <span className="font-playfair text-rose text-xl font-semibold">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={justAdded}
            className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 active:scale-95 ${
              justAdded
                ? "bg-rose text-white scale-105"
                : "bg-mint text-white hover:bg-mint/90"
            }`}
            aria-live="polite"
          >
            {justAdded ? (
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {t("added")}
              </span>
            ) : (
              t("addToCart")
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
