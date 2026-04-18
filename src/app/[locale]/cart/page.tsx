"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";
import CartItemRow from "@/components/cart/CartItemRow";
import OrderSummary from "@/components/cart/OrderSummary";

export default function CartPage() {
  const t = useTranslations("cart");
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="font-playfair text-dark text-3xl font-semibold mb-4">
          {t("title")}
        </h1>
        <p className="text-stone mb-8">{t("empty")}</p>
        <Link href="/" className="btn-mint">
          {t("emptyAction")}
        </Link>
      </div>
    );
  }

  return (
    <div className="section-container py-10">
      <h1 className="font-playfair text-dark text-3xl font-semibold mb-8">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <CartItemRow key={item.slug} item={item} />
          ))}
          <Link href="/" className="inline-block text-mint text-sm hover:underline mt-4">
            ← {t("continueShopping")}
          </Link>
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
