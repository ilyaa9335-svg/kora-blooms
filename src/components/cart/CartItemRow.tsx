"use client";

import { useTranslations } from "next-intl";
import { CartItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import QuantitySelector from "@/components/ui/QuantitySelector";

interface Props {
  item: CartItem;
}

export default function CartItemRow({ item }: Props) {
  const t = useTranslations("cart");
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="card-elevated p-4">
      <div className="flex gap-3 items-start">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] overflow-hidden bg-mint-light/30 flex-shrink-0">
          <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-playfair text-dark font-medium text-sm sm:text-base leading-snug">{item.name}</h3>
          <p className="text-rose font-semibold mt-0.5 text-sm">{formatPrice(item.price)}</p>
          <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
            <QuantitySelector
              quantity={item.quantity}
              onChange={(q) => updateQuantity(item.slug, q)}
            />
            <div className="flex items-center gap-3">
              <div className="font-playfair text-dark font-semibold text-sm sm:text-base">
                {formatPrice(item.price * item.quantity)}
              </div>
              <button
                onClick={() => removeItem(item.slug)}
                className="text-stone text-xs hover:text-rose transition-colors"
              >
                {t("remove")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
