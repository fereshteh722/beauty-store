"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/context/cart-context";
import { CartItem } from "@/features/cart/components/cart-item";
import { OrderSummary } from "@/features/cart/components/order-summary";

export function CartContainer() {
  const { items } = useCart();

  // اگر سبد خالی باشد
  if (items.length === 0) {
    return (
      <div className="min-h-[40vh] flex flex-col items-center justify-center gap-6">
        <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-stone-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
            />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold text-stone-900">
            سبد خرید شما خالی است!
          </h1>
          <p className="text-stone-500 text-sm mt-2 font-medium">
            می‌توانید برای مشاهده محصولات به فروشگاه بازگردید.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  // اگر سبد خالی نباشد
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* لیست محصولات */}
      <div className="w-full lg:flex-1">
        <div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
          <h2 className="text-lg font-bold text-stone-800">اقلام سبد خرید</h2>

          <span className="text-xs font-bold bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
            {items.length} نوع کالا
          </span>
        </div>

        <div className="divide-y divide-stone-50">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* خلاصه سفارش */}
      <aside className="w-full lg:w-[380px]">
        <OrderSummary />
      </aside>
    </div>
  );
}
