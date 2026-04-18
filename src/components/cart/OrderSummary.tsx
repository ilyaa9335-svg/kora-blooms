"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function OrderSummary() {
  const t = useTranslations("cart");
  const { state } = useCart();

  return (
    <div className="card-elevated p-6">
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-stone">{t("subtotal")}</span>
          <span className="text-dark font-medium">{formatPrice(state.total)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-stone">{t("delivery")}</span>
          <span className="text-dark font-medium">{t("deliveryEstimate")}</span>
        </div>
        <div className="border-t border-mint-light pt-3 flex justify-between">
          <span className="font-playfair text-dark font-semibold text-lg">{t("total")}</span>
          <span className="font-playfair text-dark font-semibold text-lg">
            {formatPrice(state.total)}
          </span>
        </div>
      </div>
      <Link href="/checkout" className="btn-mint w-full justify-center text-base py-3.5">
        {t("checkout")}
      </Link>
    </div>
  );
}
