"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCart } from "@/features/cart/context/cart-context";
import { formatPrice, calculateDiscountedPrice } from "@/lib/utils/price";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, discount, image, brand } = product;
  const { addToCart } = useCart();
  
  const finalPrice = calculateDiscountedPrice(price, discount);
  const hasDiscount = typeof discount === "number" && discount > 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      href={`/products/${id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)]"
    >
      {/* Image Container */}
      <div className="relative mb-3 aspect-[0.95/1] w-full overflow-hidden rounded-xl bg-stone-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        {hasDiscount && (
          <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-pink-600 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
            %{discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-0.5">
        <span className="mb-1 text-[10px] font-medium tracking-wide text-stone-400 uppercase">
          {brand || "Beauty Store"}
        </span>

        <h3 className="line-clamp-2 min-h-[2.5rem] text-[13px] font-semibold leading-5 text-stone-800 transition-colors duration-300 group-hover:text-pink-600">
          {name}
        </h3>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-[11px] text-stone-400 line-through">
                {formatPrice(price)}
              </span>
            )}
            <span className="text-[14px] font-bold text-stone-900">
              {formatPrice(finalPrice)}{" "}
              <span className="text-[11px] font-medium text-stone-500">تومان</span>
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            aria-label={`افزودن ${name} به سبد خرید`}
            className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition-all duration-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
