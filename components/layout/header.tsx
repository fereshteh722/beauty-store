"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/context/cart-context";
import { navItems } from "@/data/navigation";
import { useProductSearch } from "@/features/search/hooks/use-product-search";
import { SearchResults } from "@/features/search/components/search-results";
import { Container } from "@/components/layout/container";

import db from "@/data/db.json";
import { Product } from "@/types/product";

import {
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";

const products = (db as { products: Product[] }).products;

export function Header() {
  const { totalItems, openCart, isInitialized } = useCart();

  const { query, setQuery, results, isSearching } =
    useProductSearch(products);

  return (
    <header className="sticky top-0 z-[100] w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
      <Container className="flex h-20 items-center justify-between gap-8">
        <div className="flex items-center gap-12 flex-1">
          <Link
            href="/"
            className="text-2xl font-bold text-stone-900 tracking-tighter hover:text-pink-600 transition-colors shrink-0"
          >
            BEAUTY<span className="text-pink-600 font-black">STORE</span>
          </Link>

          <div className="relative hidden md:block max-w-sm w-full group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در محصولات..."
              className="w-full py-2.5 pl-4 pr-12 rounded-full bg-stone-200/40 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50/50 transition-all duration-300 text-sm text-stone-900"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-pink-600 transition-colors">
              {isSearching ? (
                <div className="h-5 w-5 border-2 border-pink-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="h-5 w-5" strokeWidth={1.5} />
              )}
            </div>

            <SearchResults
              results={results}
              query={query}
              closeSearch={() => setQuery("")}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/auth"
            className="flex items-center gap-2 text-stone-700 font-medium transition-all duration-300 px-4 py-2 rounded-full border border-stone-200 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50"
          >
            <User className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden lg:inline text-[13px]">
              ورود | ثبت‌نام
            </span>
          </Link>

          <Link
            href="/cart"
            className="relative p-2.5 text-stone-900 hover:bg-stone-200/50 rounded-full transition-all group"
          >
            <ShoppingBag
              className="h-6 w-6 group-hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />

            {isInitialized && totalItems > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-pink-600 px-1 text-[10px] text-white font-bold ring-2 ring-stone-50">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </Container>

      <nav className="flex items-center gap-1 -mb-px">
        {navItems.map((item) => (
          <div key={item.name} className="group relative">
            <Link
              href={item.href}
              className="flex items-center gap-1.5 px-4 pb-3.5 text-stone-600 group-hover:text-pink-600 font-medium text-[13px]"
            >
              {item.name}
              {item.children && (
                <ChevronDown className="h-3 w-3 opacity-40 group-hover:rotate-180 transition-all" />
              )}
            </Link>

            {item.children && (
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[110]">
                <div className="w-52 bg-white border border-stone-100 shadow-lg rounded-2xl p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center px-4 py-2.5 text-[13px] text-stone-600 hover:bg-pink-50 hover:text-pink-600 rounded-xl"
                    >
                      <span className="flex-1">{child.name}</span>
                      <ChevronLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
