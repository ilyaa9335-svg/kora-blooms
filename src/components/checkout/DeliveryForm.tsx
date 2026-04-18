"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function DeliveryForm({ onNext, onBack }: Props) {
  const t = useTranslations("checkout");
  const [isPickup, setIsPickup] = useState(false);

  return (
    <div className="card-elevated p-6 max-w-lg mx-auto">
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setIsPickup(false)}
          className={`flex-1 py-3 rounded-[10px] text-sm font-medium transition-colors ${
            !isPickup ? "bg-mint text-white" : "bg-mint-light text-dark"
          }`}
        >
          {t("deliveryOption")}
        </button>
        <button
          onClick={() => setIsPickup(true)}
          className={`flex-1 py-3 rounded-[10px] text-sm font-medium transition-colors ${
            isPickup ? "bg-mint text-white" : "bg-mint-light text-dark"
          }`}
        >
          {t("pickup")}
        </button>
      </div>

      {!isPickup && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1">{t("address")}</label>
            <input type="text" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-dark mb-1">{t("city")}</label>
              <input type="text" defaultValue="Praha" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-1">{t("zip")}</label>
              <input type="text" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
            </div>
          </div>
        </div>
      )}

      {isPickup && (
        <div className="text-center py-6 text-stone text-sm">
          <p className="font-medium text-dark mb-1">KORA Blooms</p>
          <p>Thámova 136/8, Praha 8 – Karlín · +420 737 482 377</p>
          <p className="text-xs mt-1">{t("openHours")}</p>
        </div>
      )}

      <div className="flex gap-3 mt-6">
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
