import { getFilteredProducts } from "@/lib/api/products";
import { notFound } from "next/navigation";
import { ProductListPage } from "@/features/products/pages/product-list-page";

interface CategoryPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!slug?.length) notFound();

  const [category, subcategory] = slug;

  const products = await getFilteredProducts(category, subcategory).catch(() => []);

  const title = (subcategory || category).replace(/-/g, " ");

  const description = `مجموعه‌ای از بهترین و باکیفیت‌ترین محصولات ${title} که با دقت انتخاب شده‌اند.`;

  return (
    <ProductListPage
      title={title}
      description={description}
      products={products}
      subcategory={subcategory}
    />
  );
}
