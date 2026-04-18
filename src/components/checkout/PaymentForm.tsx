"use client";

import { useTranslations } from "next-intl";

interface Props {
  onPay: () => void;
  onBack: () => void;
}

export default function PaymentForm({ onPay, onBack }: Props) {
  const t = useTranslations("checkout");

  return (
    <div className="card-elevated p-6 max-w-lg mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">{t("cardNumber")}</label>
          <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1">{t("cardExpiry")}</label>
            <input type="text" placeholder="MM/YY" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-1">{t("cardCvv")}</label>
            <input type="text" placeholder="123" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="btn-outline flex-1 justify-center">
          {t("back")}
        </button>
        <button onClick={onPay} className="btn-blush flex-1 justify-center">
          {t("pay")}
        </button>
      </div>
    </div>
  );
}
