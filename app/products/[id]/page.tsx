import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { getProductById, getRelatedProducts } from "@/lib/api/products";
import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";
import { RelatedProducts } from "@/features/products/components/related-products";
import { calculateDiscountedPrice, formatPrice } from "@/utils/price";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await getProductById(id).catch(() => null);
  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(
    product.category,
    product.id,
    10
  );

  const finalPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );

  const hasDiscount =
    typeof product.discount === "number" && product.discount > 0;

  return (
    <main className="bg-stone-50/40">
      <Container className="pb-16 pt-6 md:pb-24 md:pt-10">
        <section className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
            
            {/* Image */}
            <div className="mx-auto w-full max-w-[260px] md:max-w-[300px] lg:max-w-[340px]">
              <div className="relative overflow-hidden rounded-[24px] border border-stone-200/70 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="relative aspect-square overflow-hidden rounded-[18px] bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>

                {hasDiscount && (
                  <div className="absolute left-4 top-4 rounded-full bg-pink-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                    {product.discount}% تخفیف
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="space-y-3 md:space-y-4">
                <span className="inline-flex w-fit rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-600 ring-1 ring-pink-100">
                  {product.category}
                </span>

                <div className="space-y-2">
                  <h1 className="max-w-xl text-xl font-black leading-snug tracking-tight text-stone-900 md:text-2xl lg:text-[30px]">
                    {product.name}
                  </h1>

                  {product.brand && (
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                      {product.brand}
                    </p>
                  )}
                </div>

                <p className="max-w-lg text-[13px] leading-7 text-stone-600 md:text-sm">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-end gap-3 md:mt-7">
                <span className="text-2xl font-black tracking-tight text-stone-900 md:text-[28px]">
                  {formatPrice(finalPrice)}
                  <span className="mr-1 text-xs font-medium text-stone-500">
                    تومان
                  </span>
                </span>

                {hasDiscount && (
                  <span className="text-sm text-stone-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="mt-6 w-full max-w-[240px]">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mx-auto mt-14 max-w-6xl border-t border-stone-200/70 pt-10 md:mt-20 md:pt-12">
            <RelatedProducts products={relatedProducts} />
          </section>
        )}
      </Container>
    </main>
  );
}
