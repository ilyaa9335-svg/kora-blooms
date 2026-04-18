"use client";

import { useTranslations } from "next-intl";

interface Props {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: Props) {
  const t = useTranslations("checkout");
  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 overflow-x-auto px-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              i + 1 <= currentStep
                ? "bg-mint text-white"
                : "bg-mint-light text-stone"
            }`}
          >
            {i + 1}
          </div>
          <span
            className={`text-sm hidden sm:inline ${
              i + 1 <= currentStep ? "text-dark font-medium" : "text-stone"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <div className={`w-6 sm:w-8 h-px flex-shrink-0 ${i + 1 < currentStep ? "bg-mint" : "bg-mint-light"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
