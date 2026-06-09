"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/context/cart-context";
import { useEffect, useState } from "react";

export function SuccessPage() {
  const { clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("last_order_number");
    if (saved) setOrderNumber(saved);
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-stone-50">
      <div className="max-w-sm w-full bg-white border border-stone-100 rounded-3xl p-8 text-center shadow-xl">

        <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-stone-900 mb-3">سفارش با موفقیت ثبت شد</h1>

        <div className="bg-stone-50 rounded-2xl p-5 mb-8 border border-stone-100/50">
          <div className="text-xs text-stone-500 mb-2">شماره سفارش</div>
          <div className="text-xl font-bold text-stone-900">#{orderNumber}</div>
        </div>

        <Link href="/" className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold transition-all">
          بازگشت به خانه
        </Link>
      </div>
    </main>
  );
}
