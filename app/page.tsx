// src/app/page.tsx
import { getProducts } from "@/lib/api/products";
import HeroBanner from "@/features/home/banner-slider";
import { Container } from "@/components/layout/container";
import PopularBrands from "@/features/home/brand-marquee";
import { Product } from "@/types/product";
import { CategoryBanners } from "@/features/home/category-banners";
import { ProductsStrip } from "@/features/home/product-row";

export default async function HomePage() {
  const allProducts: Product[] = await getProducts();

  const specialOffers = allProducts.filter((p) => p.isSpecialOffer);
  const newProducts = allProducts.filter((p) => p.isNew);

  return (
    <div className="space-y-16 pb-10">
      {/* 1. Hero Section */}
      <section className="mt-6">
        <Container>
          <HeroBanner />
        </Container>
      </section>

      {/* 2. Category Banners */}
      <section className="mt-6">
        <Container>
          <CategoryBanners />
        </Container>
      </section>

      {/* 3. Special Offers */}
      <section className="mt-6">
        <Container>
          <ProductsStrip
            title="محصولات شگفت‌انگیز"
            href="/special-offers"
            products={specialOffers}
            navId="offer"
            variant="offer"
          />
        </Container>
      </section>

      {/* 4. New Arrivals */}
      <section className="mt-6">
        <Container>
          <ProductsStrip
            title="جدیدترین محصولات"
            href="/new-products"
            products={newProducts}
            navId="new"
            variant="new"
          />
        </Container>
      </section>

      {/* 5. Brands Section */}
      <section className="mt-6">
        <PopularBrands />
      </section>
    </div>
  );
}
