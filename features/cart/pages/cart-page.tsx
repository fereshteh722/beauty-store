import { Metadata } from "next";
import { CartContainer } from "@/features/cart/components/cart-container";

export const metadata: Metadata = {
  title: "سبد خرید",
  description: "مدیریت و نهایی‌سازی محصولات انتخاب شده در سبد خرید",
};

export function CartPage() {
  return (
    <main className="min-h-screen bg-stone-50/50">
      <div className="container mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 border-b border-stone-200/70 pb-6 md:mb-10 md:pb-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-600 ring-1 ring-pink-100">
              Checkout
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
                سبد خرید
              </h1>

              <p className="text-sm leading-7 text-stone-600 md:text-[15px]">
                محصولات انتخاب‌شده‌ی خود را بررسی کنید، تعداد را تغییر دهید و برای نهایی‌سازی سفارش آماده شوید.
              </p>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-stone-200/70 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.10)] md:p-6 lg:p-8">
          <CartContainer />
        </section>
      </div>
    </main>
  );
}
