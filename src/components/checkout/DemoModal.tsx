"use client";

import { useTranslations } from "next-intl";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: Props) {
  const t = useTranslations("checkout");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark/50" onClick={onClose} />
      <div className="relative bg-white rounded-[20px] p-8 max-w-sm w-full text-center shadow-float">
        <h3 className="font-playfair text-dark text-xl font-semibold mb-3">
          {t("demoTitle")}
        </h3>
        <p className="text-stone text-sm mb-6 leading-relaxed">
          {t("demoText")}
        </p>
        <div className="space-y-3">
          <a
            href="https://wa.me/420602813310"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint w-full justify-center"
          >
            {t("demoWhatsapp")}
          </a>
          <button onClick={onClose} className="btn-outline w-full justify-center">
            {t("demoClose")}
          </button>
        </div>
      </div>
    </div>
  );
}
