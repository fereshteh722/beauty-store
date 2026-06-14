"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckoutForm } from "@/features/checkout/components/checkout-form";
import { useCheckoutForm } from "@/features/checkout/hooks/use-checkout-form";

function generateOrderNumber() {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${Date.now().toString().slice(-6)}-${random}`;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    form,
    errors,
    touched,
    submitted,
    handleChange,
    handleBlur,
    handleSubmitAttempt,
    isValid,
  } = useCheckoutForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const isValidForm = handleSubmitAttempt();

    if (!isValidForm) {
      return;
    }

    try {
      setLoading(true);

      const orderNumber = generateOrderNumber();
      sessionStorage.setItem("last_order_number", orderNumber);

      router.push("/checkout/success");
    } catch {
      setSubmitError("ثبت سفارش با مشکل مواجه شد. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50/50 px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center md:mb-10">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400">
            Checkout
          </span>

          <h1 className="text-2xl font-black tracking-tight text-stone-900 md:text-4xl">
            تکمیل سفارش
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-500 md:text-base">
            اطلاعات ارسال و تماس خود را بررسی کنید تا سفارش شما نهایی شود.
          </p>
        </div>

        {submitError ? (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        ) : null}

        <CheckoutForm
          form={form}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          loading={loading}
          isFormValid={isValid}
          submitted={submitted}
        />
      </div>
    </main>
  );
}
