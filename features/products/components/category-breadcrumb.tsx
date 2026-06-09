import Link from "next/link";

export function CategoryBreadcrumb({ category, subcategory }: { category: string, subcategory?: string }) {
  return (
    <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-8">
      <Link href="/" className="hover:text-pink-600 transition-colors">خانه</Link>
      <span className="w-1 h-1 rounded-full bg-stone-300" />
      <Link href="/products" className="hover:text-pink-600 transition-colors">محصولات</Link>
      <span className="w-1 h-1 rounded-full bg-stone-300" />
      <span className="text-stone-900 font-semibold">{category}</span>
      {subcategory && (
        <>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="text-pink-600 font-bold">{subcategory}</span>
        </>
      )}
    </nav>
  );
}
