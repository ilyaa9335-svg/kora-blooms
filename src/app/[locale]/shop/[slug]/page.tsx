"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import ProductCard from "@/components/product/ProductCard";
import type { Locale } from "@/types";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const { addItem } = useCart();

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="font-playfair text-dark text-3xl font-semibold mb-4">
          {t("products.notFound")}
        </h1>
        <Link href="/shop" className="btn-mint">
          {t("products.backToShop")}
        </Link>
      </div>
    );
  }

  const { slug: productSlug, photo, price, badge, category, translations } = product;
  const translation = translations[locale];
  const relatedProducts = products
    .filter((p) => p.slug !== productSlug)
    .slice(0, 3);

  function handleAddToCart() {
    addItem({
      slug: productSlug,
      name: translation.name,
      price: price,
      photo: photo,
      quantity: 1,
    });
  }

  return (
    <div className="section-container py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-stone mb-8">
        <Link href="/" className="hover:text-mint transition-colors">{t("nav.home")}</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-mint transition-colors">{t("nav.shop")}</Link>
        <span>/</span>
        <span className="text-dark">{translation.name}</span>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
        {/* Image */}
        <div className="relative rounded-[20px] overflow-hidden">
          <div className="aspect-square bg-mint-light/30">
            <img
              src={photo}
              alt={translation.name}
              className="w-full h-full object-cover"
            />
          </div>
          {badge && (
            <div className="absolute top-4 left-4">
              <Badge
                type={badge}
                label={
                  badge === "bestseller"
                    ? t("products.bestseller")
                    : t("products.new")
                }
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="section-label mb-2">
            {t(`categories.${category}`)}
          </div>
          <h1 className="font-playfair text-dark text-3xl sm:text-4xl font-semibold mb-4">
            {translation.name}
          </h1>
          <p className="text-stone text-base leading-relaxed mb-6">
            {translation.description}
          </p>

          <div className="font-playfair text-rose text-3xl font-semibold mb-8">
            {formatPrice(price)}
          </div>

          <button
            onClick={handleAddToCart}
            className="btn-mint text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            {t("products.addToCart")}
          </button>

          {/* Delivery info */}
          <div className="mt-8 p-4 bg-mint-light/30 rounded-[12px]">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l-4 8H8m0-8l-2-4H2m6 4v8m0 0a2 2 0 104 0m-4 0a2 2 0 004 0m6 0a2 2 0 104 0 2 2 0 01-4 0" />
              </svg>
              <span className="text-dark text-sm">{t("delivery.badge")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <div className="section-label mb-4">{t("products.related")}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
