"use client";

import Image from "next/image";
import { useCart, type CartItem as CartItemType } from "@/features/cart/context/cart-context";
import { calculateDiscountedPrice, formatPrice } from "@/lib/utils/price";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const discountedPrice = calculateDiscountedPrice(item.price, item.discount);
  const hasDiscount = Boolean(item.discount);

  return (
    <div className="flex items-center gap-4 py-4 border-b border-stone-100 last:border-0">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <h3 className="text-sm sm:text-base font-medium text-stone-800 line-clamp-1">
          {item.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-600 font-bold">
            {formatPrice(discountedPrice)}
          </span>

          {hasDiscount && (
            <span className="text-[10px] text-stone-400 line-through">
              {formatPrice(item.price)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-stone-200 rounded-md bg-white shadow-sm">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 hover:bg-stone-50 text-stone-600"
              aria-label="کم کردن تعداد"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>

            <span className="w-8 text-center text-sm font-bold border-x border-stone-200">
              {item.quantity}
            </span>

            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 hover:bg-stone-50 text-stone-600"
              aria-label="زیاد کردن تعداد"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-stone-300 hover:text-red-500 transition-colors p-1"
            aria-label="حذف از سبد خرید"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden sm:block text-left min-w-[100px]">
        <span className="text-sm font-black text-stone-900">
          {formatPrice(discountedPrice * item.quantity)}
          <span className="text-[10px] mr-1 font-normal text-stone-500">تومان</span>
        </span>
      </div>
    </div>
  );
}
