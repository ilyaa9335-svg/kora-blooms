"use client";

import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function OrderReview({ onNext, onBack }: Props) {
  const t = useTranslations("checkout");
  const { state } = useCart();

  return (
    <div className="card-elevated p-6 max-w-lg mx-auto">
      <h3 className="font-playfair text-dark text-lg font-semibold mb-4">{t("orderSummary")}</h3>
      <div className="space-y-3 mb-6">
        {state.items.map((item) => (
          <div key={item.slug} className="flex justify-between text-sm">
            <span className="text-dark">
              {item.name} × {item.quantity}
            </span>
            <span className="text-dark font-medium">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
        <div className="border-t border-mint-light pt-3 flex justify-between">
          <span className="font-semibold text-dark">{t("step3")}</span>
          <span className="font-semibold text-dark">{formatPrice(state.total)}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={onBack} className="btn-outline flex-1 justify-center">
          {t("back")}
        </button>
        <button onClick={onNext} className="btn-mint flex-1 justify-center">
          {t("next")}
        </button>
      </div>
    </div>
  );
}
