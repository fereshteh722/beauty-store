import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "../components/product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Container } from "@/components/layout/container";

interface ProductListPageProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductListPage({
  title,
  description,
  products,
}: ProductListPageProps) {
  return (
    <div className="min-h-screen bg-stone-50/30 pb-20">
      <Container className="pt-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone-400">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            خانه
          </Link>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="text-stone-900 font-semibold">{title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
              {title}
              <span className="text-pink-600">.</span>
            </h1>
            <p className="mt-2 text-sm text-stone-500">{description}</p>
          </div>

          <div className="text-sm font-medium text-stone-500 bg-white px-4 py-2 rounded-full border border-stone-100 shadow-sm">
            {products.length} محصول
          </div>
        </div>

        {products.length === 0 ? (
          <EmptyState
            title="محصولی برای نمایش وجود ندارد"
            description="به‌زودی محصولات جدیدی به این بخش اضافه می‌شود."
            actionLabel="بازگشت به فروشگاه"
            actionHref="/products"
          />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
