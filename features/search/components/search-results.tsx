import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils/price";

interface SearchResultsProps {
  results: Product[];
  query: string;
  closeSearch: () => void;
}

export function SearchResults({ results, query, closeSearch }: SearchResultsProps) {
  if (results.length === 0 && query.length >= 2) {
    return (
      <div
        role="status"
        className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200 rounded-2xl p-4 shadow-xl text-center text-stone-500 text-sm"
      >
        محصولی یافت نشد 🧐
      </div>
    );
  }

  if (!results.length) return null;

  return (
    <div
      role="listbox"
      className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xl z-[150]"
    >
      <div className="p-2">
        {results.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            onClick={closeSearch}
            role="option"
            className="flex items-center gap-4 p-3 hover:bg-stone-50 rounded-xl transition-colors group"
          >
            <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-stone-100 shrink-0">
              <Image
                src={product.image || "/images/placeholder.png"}
                alt={product.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[13px] font-bold text-stone-900 truncate group-hover:text-pink-600 transition-colors">
                {product.name}
              </h4>
              <p className="text-[11px] text-stone-400 truncate">
                {product.category}
              </p>
            </div>

            <span className="text-[13px] font-black text-stone-900">
              {formatPrice(product.price)} تومان
            </span>
          </Link>
        ))}
      </div>

      <Link
        href={`/search?q=${encodeURIComponent(query)}`}
        onClick={closeSearch}
        className="block w-full py-3 bg-stone-50 border-t border-stone-100 text-center text-[12px] font-bold text-stone-500 hover:text-pink-600 transition-colors"
      >
        مشاهده تمام نتایج
      </Link>
    </div>
  );
}
