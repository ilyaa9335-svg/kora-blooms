"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import StepIndicator from "@/components/checkout/StepIndicator";
import CustomerForm from "@/components/checkout/CustomerForm";
import DeliveryForm from "@/components/checkout/DeliveryForm";
import OrderReview from "@/components/checkout/OrderReview";
import PaymentForm from "@/components/checkout/PaymentForm";
import DemoModal from "@/components/checkout/DemoModal";

export default function CheckoutPage() {
  const t = useTranslations("checkout");
  const [step, setStep] = useState(1);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="section-container py-10">
      <h1 className="font-playfair text-dark text-3xl font-semibold mb-6 text-center">
        {t("title")}
      </h1>
      <StepIndicator currentStep={step} />

      {step === 1 && <CustomerForm onNext={() => setStep(2)} />}
      {step === 2 && <DeliveryForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <OrderReview onNext={() => setStep(4)} onBack={() => setStep(2)} />}
      {step === 4 && <PaymentForm onPay={() => setShowDemo(true)} onBack={() => setStep(3)} />}

      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
}
