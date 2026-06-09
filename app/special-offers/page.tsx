import { getProducts } from "@/lib/api/products";
import { ProductListPage } from "@/features/products/pages/product-list-page";
import { Product } from "@/types/product";

export default async function SpecialOffersPage() {
  const all: Product[] = await getProducts();
  const specialOffers = all.filter((p) => p.isSpecialOffer);

  return (
    <ProductListPage
      title="پیشنهادهای شگفت‌انگیز"
      description="محصولات دارای تخفیف و آفر ویژه"
      products={specialOffers}
    />
  );
}
