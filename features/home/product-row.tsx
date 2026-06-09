"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/features/products/components/product-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type ProductsStripVariant = "offer" | "new";

type ProductsStripProps = {
  title: string;
  href: string;
  products: Product[];

  /** شناسه یکتا برای کلاس‌های دکمه‌های next/prev (مثلاً "offer" یا "new") */
  navId: string;

  /** تم ظاهری برای متفاوت شدن باکس‌ها */
  variant?: ProductsStripVariant;

  /** در صورت نیاز override کامل wrapper */
  wrapperClassName?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function ProductsStrip({
  title,
  href,
  products,
  navId,
  variant = "offer",
  wrapperClassName,
}: ProductsStripProps) {
  if (!products?.length) return null;

  const prevClass = `${navId}-prev`;
  const nextClass = `${navId}-next`;

  const isOffer = variant === "offer";

  // Wrapper theme
  const wrapperBase = "overflow-hidden rounded-3xl";
  const wrapperTheme = isOffer
    ? "bg-pink-600 text-white"
    : "bg-rose-100 text-stone-900";

  // Focus ring theme (important for a11y)
  const ringOffset = isOffer ? "focus-visible:ring-offset-pink-600" : "focus-visible:ring-offset-rose-100";
  const ringColor = isOffer ? "focus-visible:ring-white/80" : "focus-visible:ring-stone-900/30";

  // Link theme
  const linkTheme = isOffer
    ? "text-white/90 decoration-white/60 hover:text-white hover:border-white/40"
    : "text-stone-700 decoration-stone-500/40 hover:text-stone-900 hover:border-stone-900/20";

  // Nav buttons theme
  const navBtnTheme = isOffer
    ? "bg-white/80 text-stone-900 border-stone-100 hover:bg-white"
    : "bg-white/70 text-stone-900 border-white/60 hover:bg-white";

  return (
    <section className="w-full">
      <div className={cn(wrapperBase, wrapperClassName ?? wrapperTheme)}>
        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[200px_1fr] lg:gap-6 items-stretch">
            {/* Right content */}
            <div className="flex h-full flex-col justify-between items-start">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight leading-snug whitespace-nowrap">
                {title}
              </h2>

              <Link
                href={href}
                className={cn(
                  `
                  inline-flex items-center rounded-full
                  border border-transparent
                  px-3 py-1.5
                  text-sm font-medium
                  underline underline-offset-4
                  transition-all duration-300
                  hover:no-underline
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2
                  `,
                  ringColor,
                  ringOffset,
                  linkTheme
                )}
              >
                مشاهده همه
              </Link>
            </div>

            {/* Slider */}
            <div className="relative min-w-0 overflow-hidden group">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: `.${nextClass}`,
                  prevEl: `.${prevClass}`,
                }}
                spaceBetween={12}
                slidesPerView="auto"
                className="w-full"
              >
                {products.map((p) => (
                  <SwiperSlide
                    key={p.id}
                    className="!w-[170px] sm:!w-[200px] md:!w-[220px] lg:!w-[240px]"
                  >
                    <div className="pb-2">
                      <ProductCard product={p} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Buttons */}
              <button
                aria-label="قبلی"
                type="button"
                className={cn(
                  `
                  ${prevClass} hidden sm:flex
                  absolute left-3 top-1/2 -translate-y-1/2 z-20
                  w-11 h-11 items-center justify-center rounded-full
                  backdrop-blur-md
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  shadow-lg border
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2
                  `,
                  navBtnTheme,
                  ringColor,
                  ringOffset
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="بعدی"
                type="button"
                className={cn(
                  `
                  ${nextClass} hidden sm:flex
                  absolute right-3 top-1/2 -translate-y-1/2 z-20
                  w-11 h-11 items-center justify-center rounded-full
                  backdrop-blur-md
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  shadow-lg border
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2
                  `,
                  navBtnTheme,
                  ringColor,
                  ringOffset
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
