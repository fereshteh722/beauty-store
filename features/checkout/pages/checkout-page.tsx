"use client";

import { useCart } from "@/features/cart/context/cart-context";
import { useCheckoutForm } from "@/features/checkout/hooks/use-checkout-form";
import { CheckoutForm } from "@/features/checkout/components/checkout-form";
import { OrderSummary } from "@/features/cart/components/order-summary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CheckoutPage() {
  const { items, isInitialized } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    form,
    errors,
    touched,
    isValid,
    setTouched,
    handleBlur,
    handleChange
  } = useCheckoutForm();

  useEffect(() => {
    if (isInitialized && items.length === 0) {
      router.replace("/products");
    }
  }, [items, isInitialized, router]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      phone: true,
      province: true,
      city: true,
      address: true,
      paymentMethod: true
    });

    if (!isValid) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    const num = `${Date.now()}-${Math.floor(100000 + Math.random() * 900000)}`;
    sessionStorage.setItem("last_order_number", num);

    router.push("/checkout/success");
  };

  if (!isInitialized || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-t-pink-600 border-stone-300 animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8">
          <CheckoutForm
            form={form}
            errors={errors}
            touched={touched}
            loading={loading}
            isFormValid={isValid}
            onBlur={handleBlur}
            onChange={handleChange}
            onSubmit={submitHandler}
          />
        </div>

        <aside className="lg:col-span-4">
          <OrderSummary />
        </aside>

      </div>
    </main>
  );
}
