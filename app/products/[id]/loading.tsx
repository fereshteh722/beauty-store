// src/app/products/[id]/loading.tsx
import { Container } from "@/component/layout/container";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function SkeletonBox({ className = "" }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-2xl bg-stone-200/80", className)} />;
}

function TrustItemSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <SkeletonBox className="h-4 w-4 rounded-full bg-stone-300/70" />
      <SkeletonBox className="h-3 w-24 rounded-full" />
    </div>
  );
}

function RelatedCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
      <SkeletonBox className="mb-3 aspect-square w-full rounded-xl" />
      <SkeletonBox className="mb-2 h-4 w-3/4" />
      <SkeletonBox className="mb-3 h-4 w-1/2" />
      <div className="flex items-center justify-between">
        <SkeletonBox className="h-5 w-20 rounded-full" />
        <SkeletonBox className="h-9 w-9 rounded-full" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <main className="bg-stone-50/40">
      <Container className="pb-16 pt-6 md:pb-24 md:pt-10">
        {/* top spacing / editorial layout */}
        <section className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
            {/* image column */}
            <div className="mx-auto w-full max-w-[260px] md:max-w-[300px] lg:max-w-[340px]">
              <div className="relative overflow-hidden rounded-[24px] border border-stone-200/70 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="relative aspect-square overflow-hidden rounded-[18px] bg-stone-100">
                  <SkeletonBox className="absolute inset-0 rounded-[18px]" />
                </div>

                {/* discount badge placeholder (kept subtle to avoid noise) */}
                <SkeletonBox className="absolute left-4 top-4 h-6 w-16 rounded-full bg-pink-200/70" />
              </div>
            </div>

            {/* content column */}
            <div className="flex flex-col">
              <div className="space-y-3 md:space-y-4">
                {/* category pill */}
                <SkeletonBox className="h-6 w-28 rounded-full bg-pink-100/80" />

                {/* title + brand */}
                <div className="space-y-2">
                  <SkeletonBox className="h-7 w-full max-w-[28rem] rounded-xl" />
                  <SkeletonBox className="h-3 w-28 rounded-full" />
                </div>

                {/* description */}
                <div className="space-y-2">
                  <SkeletonBox className="h-4 w-full max-w-lg rounded-full" />
                  <SkeletonBox className="h-4 w-11/12 max-w-md rounded-full" />
                  <SkeletonBox className="h-4 w-4/5 max-w-sm rounded-full" />
                </div>
              </div>

              {/* price */}
              <div className="mt-6 flex items-end gap-3 md:mt-7">
                <SkeletonBox className="h-9 w-44 rounded-xl" />
                <SkeletonBox className="h-5 w-24 rounded-full" />
              </div>

              {/* CTA */}
              <div className="mt-6 w-full max-w-[240px]">
                <SkeletonBox className="h-11 w-full rounded-full bg-pink-200/70" />
              </div>

              {/* trust row */}
              <div className="mt-7 border-t border-stone-200/70 pt-5">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl bg-white/80 p-3 ring-1 ring-stone-100">
                  <TrustItemSkeleton />
                  <div className="hidden h-4 w-px bg-stone-200 md:block" />
                  <TrustItemSkeleton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* related products skeleton */}
        <section className="mx-auto mt-14 max-w-6xl border-t border-stone-200/70 pt-10 md:mt-20 md:pt-12">
          {/* related title placeholder (if RelatedProducts has a header) */}
          <div className="mb-6 flex items-center justify-between">
            <SkeletonBox className="h-7 w-40 rounded-full" />
            <SkeletonBox className="h-5 w-24 rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <RelatedCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
