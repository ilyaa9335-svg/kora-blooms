"use client";

import { useTranslations } from "next-intl";

interface Props {
  onNext: () => void;
}

export default function CustomerForm({ onNext }: Props) {
  const t = useTranslations("checkout");

  return (
    <div className="card-elevated p-6 max-w-lg mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">{t("name")}</label>
          <input type="text" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">{t("email")}</label>
          <input type="email" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">{t("phone")}</label>
          <input type="tel" className="w-full border border-mint-light rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-mint transition-colors" />
        </div>
      </div>
      <button onClick={onNext} className="btn-mint w-full justify-center mt-6">
        {t("next")}
      </button>
    </div>
  );
}
