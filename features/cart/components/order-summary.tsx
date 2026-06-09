"use client";

import { useCart } from "@/features/cart/context/cart-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatPrice } from "@/lib/utils/price";

export function OrderSummary() {
  const { totalPrice, totalItems, totalSavings } = useCart();
  const pathname = usePathname();

  const isCheckoutPage = pathname === "/checkout";
  const shippingFee = totalPrice > 500000 || totalPrice === 0 ? 0 : 45000;
  const finalPrice = totalPrice + shippingFee;

  return (
    <div className="bg-stone-50 rounded-2xl p-6 sticky top-24 border border-stone-100">
      <h2 className="text-lg font-bold text-stone-900 mb-6">خلاصه سفارش</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-sm text-stone-600">
          <span>تعداد کالاها:</span>
          <span>{totalItems.toLocaleString("fa-IR")} عدد</span>
        </div>

        <div className="flex justify-between text-sm text-stone-600">
          <span>مجموع سبد خرید:</span>
          <span>{formatPrice(totalPrice + totalSavings)} تومان</span>
        </div>

        {totalSavings > 0 && (
          <div className="flex justify-between text-sm text-emerald-600 font-medium">
            <span>سود شما از این خرید:</span>
            <span>{formatPrice(totalSavings)} تومان</span>
          </div>
        )}

        <div className="flex justify-between text-sm text-stone-600">
          <span>هزینه ارسال:</span>
          <span className={shippingFee === 0 && totalPrice > 0 ? "text-green-600 font-medium" : ""}>
            {totalPrice === 0 ? "۰" : shippingFee === 0 ? "رایگان" : `${formatPrice(shippingFee)} تومان`}
          </span>
        </div>

        <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
          <span className="font-bold text-stone-900">مبلغ قابل پرداخت:</span>
          <div className="flex flex-col items-end">
            <span className="text-xl font-black text-stone-900">
              {formatPrice(finalPrice)}
              <span className="text-xs font-normal mr-1 text-stone-500">تومان</span>
            </span>
          </div>
        </div>
      </div>

      {!isCheckoutPage && (
        <Link
          href="/checkout"
          className="w-full mt-8 bg-stone-900 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 active:scale-[0.98]"
        >
          ادامه جهت تسویه حساب
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      )}
    </div>
  );
}
