"use client";

import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProductShowcase() {
  const t = useTranslations("products");

  return (
    <section id="products" className="section-container py-16">
      <SectionHeader label={t("title")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
