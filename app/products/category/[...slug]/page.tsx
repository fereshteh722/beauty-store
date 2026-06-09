import { getFilteredProducts } from "@/lib/api/products";
import { ProductCard } from "@/features/products/components/product-card";
import { notFound } from "next/navigation";
import { CategoryBreadcrumb } from "@/features/products/components/category-breadcrumb";
import { EmptyState } from "@/components/ui/empty-state";

interface CategoryPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  if (!slug?.length) notFound();

  const [category, subcategory] = slug;
  const products = await getFilteredProducts(category, subcategory).catch(() => []);
  const title = (subcategory || category).replace(/-/g, " ");

  return (
    <div className="bg-stone-50/30 min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <CategoryBreadcrumb category={category} subcategory={subcategory} />

        <div className="relative mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 capitalize tracking-tighter mb-4">
              {title}
              <span className="text-pink-600">.</span>
            </h1>
            <p className="text-stone-500 text-sm md:text-base font-medium leading-relaxed">
              مجموعه‌ای از بهترین و باکیفیت‌ترین محصولات {title} که با دقت انتخاب شده‌اند.
            </p>
          </div>

          <div className="flex items-center gap-3 text-stone-400 text-sm font-medium bg-white px-4 py-2 rounded-full border border-stone-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {products.length} محصول موجود
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="هنوز محصولی اینجا نیست"
            description="ما مدام در حال به‌روزرسانی کالکشن‌ها هستیم. بزودی محصولات فوق‌العاده‌ای به این بخش اضافه خواهد شد."
            actionLabel="مشاهده سایر دسته‌بندی‌ها"
            actionHref="/products"
          />
        )}
      </div>
    </div>
  );
}
