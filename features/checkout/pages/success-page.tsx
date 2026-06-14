"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/features/cart/context/cart-context";

export function SuccessPage() {
  const { clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    clearCart();
    const saved = sessionStorage.getItem("last_order_number");
    if (saved) setOrderNumber(saved);
  }, [clearCart]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-4 bg-stone-50/50">
      <div className="w-full max-w-[400px] rounded-[2rem] border border-stone-200/60 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.04)] md:p-7">
        
        {/* آیکن موفقیت */}
        <div className="mb-5 inline-flex">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-50/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>

        {/* متن */}
        <div className="mb-6 space-y-2">
          <h1 className="text-xl font-black tracking-tight text-stone-900">
            سفارش شما ثبت شد
          </h1>
          <p className="text-sm leading-6 text-stone-500">
            تاییدیه سفارش و جزئیات ارسال به‌زودی برای شما پیامک خواهد شد.
          </p>
        </div>

        {/* شماره پیگیری */}
        <div className="mb-6 rounded-2xl border border-stone-100 bg-stone-50 px-5 py-4">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-stone-400">
            شماره پیگیری
          </span>
          <span className="text-lg font-bold text-stone-900">
            #{orderNumber || "---"}
          </span>
        </div>

        {/* دکمه‌ها */}
        <div className="space-y-2.5">
          <Link
            href="/"
            className="block w-full rounded-xl bg-stone-900 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-pink-600 active:scale-[0.98]"
          >
            بازگشت به خانه
          </Link>

          <Link
            href="/profile/orders"
            className="block w-full py-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-pink-600"
          >
            مشاهده تاریخچه سفارشات
          </Link>
        </div>

        {/* فوتر */}
        <div className="mt-5 border-t border-stone-100 pt-4 text-[12px] text-stone-400">
          سوال یا مشکلی دارید؟{" "}
          <Link
            href="/contact"
            className="text-stone-600 underline decoration-stone-200 underline-offset-4 hover:text-pink-600 transition-colors"
          >
            تماس بگیرید
          </Link>
        </div>
      </div>
    </main>
  );
}
