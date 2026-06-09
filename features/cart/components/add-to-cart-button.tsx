"use client";

import { useCart } from "@/features/cart/context/cart-context";
import { Product } from "@/types/product";
import Link from "next/link";

export function AddToCartButton({ product }: { product: Product }) {
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();

  // پیدا کردن محصول در سبد خرید
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const isInCart = quantity > 0;

  if (!isInCart) {
    return (
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-pink-600 active:scale-[0.98] shadow-lg shadow-stone-200"
      >
        افزودن به سبد خرید
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-100 animate-in fade-in zoom-in duration-300">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-emerald-600">در سبد شما</span>
        
        {/* کنترلر تعداد */}
        <div className="flex items-center bg-white rounded-lg border border-stone-200 shadow-sm overflow-hidden">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-4 py-2 hover:bg-stone-50 text-stone-600 transition-colors"
          >
            {quantity === 1 ? "×" : "-"}
          </button>
          
          <span className="px-4 py-2 font-bold text-stone-900 min-w-[40px] text-center">
            {quantity}
          </span>
          
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-4 py-2 hover:bg-stone-50 text-stone-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* لینک مشاهده سبد خرید */}
      <Link 
        href="/cart" 
        className="text-xs text-center text-pink-600 hover:text-pink-700 font-bold underline underline-offset-4 transition-all"
      >
        مشاهده سبد خرید
      </Link>
    </div>
  );
}
