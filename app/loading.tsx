import { Container } from "@/components/layout/container";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function SkeletonBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-neutral-200/80",
        className
      )}
    />
  );
}

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
      <SkeletonBox className="mb-3 aspect-square w-full rounded-xl" />
      <SkeletonBox className="mb-2 h-4 w-3/4" />
      <SkeletonBox className="mb-2 h-4 w-1/2" />
      <SkeletonBox className="mb-4 h-4 w-1/3" />
      <div className="flex items-center justify-between">
        <SkeletonBox className="h-5 w-20" />
        <SkeletonBox className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

function ProductsStripSkeleton({
  variant = "offer",
}: {
  variant?: "offer" | "new";
}) {
  const isOffer = variant === "offer";

  return (
    <section>
      <Container>
        <div
          className={cn(
            "overflow-hidden rounded-3xl",
            isOffer ? "bg-pink-200/70" : "bg-rose-100"
          )}
        >
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[200px_1fr] lg:gap-6 items-stretch">
              {/* Side content */}
              <div className="flex h-full flex-col justify-between items-start">
                <SkeletonBox
                  className={cn(
                    "h-7 w-36 rounded-full",
                    isOffer ? "bg-white/40" : "bg-stone-300/70"
                  )}
                />
                <SkeletonBox
                  className={cn(
                    "h-5 w-24 rounded-full",
                    isOffer ? "bg-white/30" : "bg-stone-300/60"
                  )}
                />
              </div>

              {/* Horizontal product skeletons */}
              <div className="grid grid-flow-col auto-cols-[170px] gap-3 overflow-hidden sm:auto-cols-[200px] md:auto-cols-[220px] lg:auto-cols-[240px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BrandsSkeleton() {
  return (
    <section>
      <Container>
        <div className="rounded-3xl border border-black/5 bg-white p-6">
          <div className="mb-6 flex items-center justify-center">
            <SkeletonBox className="h-8 w-40" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonBox
                key={index}
                className="h-20 w-full rounded-2xl"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Loading() {
  return (
    <div className="space-y-16 pb-10">
      {/* 1. Hero Section */}
      <section>
        <Container>
          <SkeletonBox className="h-[250px] w-full rounded-[2rem] lg:rounded-[3rem] sm:h-[300px] lg:h-[400px]" />
        </Container>
      </section>

      {/* 2. Category Banners */}
      <section>
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SkeletonBox className="h-[180px] w-full rounded-3xl md:h-[220px]" />
            <SkeletonBox className="h-[180px] w-full rounded-3xl md:h-[220px]" />
          </div>
        </Container>
      </section>

      {/* 3. Special Offers */}
      <ProductsStripSkeleton variant="offer" />

      {/* 4. New Arrivals */}
      <ProductsStripSkeleton variant="new" />

      {/* 5. Brands Section */}
      <BrandsSkeleton />
    </div>
  );
}
