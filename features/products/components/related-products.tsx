"use client";
import { useRef } from "react";
import { ProductCard } from "@/features/products/components/product-card";
import {Product} from "@/types/product"

export function RelatedProducts({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240; // کمی بیشتر از عرض هر کارت
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold text-stone-900 border-r-2 border-pink-600 pr-3">
          محصولات مرتبط
        </h2>
      </div>

      {/* کانتینر اسکرول با فلش‌ها روی خود ردیف محصولات */}
      <div className="relative">
        {/* فلش چپ (ابتدای لیست) */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-1.5 bg-white/95 border border-stone-200 rounded-full shadow-sm hover:bg-stone-50 transition duration-300"
          aria-label="اسکرول به چپ"
        >
          <svg
            className="w-4 h-4 text-stone-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* فلش راست (انتهای لیست) */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-1.5 bg-white/95 border border-stone-200 rounded-full shadow-sm hover:bg-stone-50 transition duration-300"
          aria-label="اسکرول به راست"
        >
          <svg
            className="w-4 h-4 text-stone-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* ردیف اسکرولی محصولات */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x"
        >
          {products.map((p) => (
            <div key={p.id} className="min-w-[160px] snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
