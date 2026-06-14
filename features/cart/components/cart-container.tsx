"use client";

import { useCart } from "@/features/cart/context/cart-context";
import { CartItem } from "@/features/cart/components/cart-item";
import { OrderSummary } from "@/features/cart/components/order-summary";
import { EmptyState } from "@/components/ui/empty-state";

export function CartContainer() {
  const { items } = useCart();

  // اگر سبد خالی باشد
  if (items.length === 0) {
    return (
      <EmptyState
        title="سبد خرید شما خالی است!"
        description="می‌توانید برای مشاهده محصولات به فروشگاه بازگردید."
        actionLabel="بازگشت به فروشگاه"
        actionHref="/"
      />
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
