import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    href: "/products/category/hair-care",
    src: "/pics-project/hero banner/banner1.webp",
    alt: "مراقبت از مو",
  },
  {
    href: "/products/category/skin-care",
    src: "/pics-project/hero banner/banner2.webp",
    alt: "مراقبت از پوست",
  },
];

export function CategoryBanners() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-4 lg:px-2 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
        {categories.map((cat, index) => (
          <Link
            key={cat.href}
            href={cat.href}
            aria-label={cat.alt}
            className="group block focus:outline-none"
          >
            <div
              className="
                relative overflow-hidden rounded-[2rem] lg:rounded-[2rem]
                border border-stone-200/80 bg-stone-50
                shadow-[0_10px_30px_rgba(28,25,23,0.06)]
                transition duration-300
                group-hover:shadow-[0_18px_45px_rgba(28,25,23,0.10)]
                group-focus-visible:ring-2 group-focus-visible:ring-pink-600 group-focus-visible:ring-offset-2
              "
            >
              <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px]">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                  className="object-fill transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
