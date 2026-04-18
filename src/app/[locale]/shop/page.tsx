"use client";

import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ShopPage() {
  const t = useTranslations("products");

  return (
    <div className="section-container py-12">
      <h1 className="font-playfair text-dark text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-2">
        {t("title")}
      </h1>
      <p className="text-stone text-center text-sm mb-10">
        {t("shopSubtitle")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
