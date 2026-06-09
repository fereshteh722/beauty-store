import { getProducts } from "@/lib/api/products";
import { ProductListPage } from "@/features/products/pages/product-list-page";
import { Product } from "@/types/product";

export default async function NewProductsPage() {
  const all: Product[] = await getProducts();
  const newProducts = all.filter((p) => p.isNew);

  return (
    <ProductListPage
      title="جدیدترین محصولات"
      description="محصولاتی که با برچسب جدید مشخص شده‌اند"
      products={newProducts}
    />
  );
}
