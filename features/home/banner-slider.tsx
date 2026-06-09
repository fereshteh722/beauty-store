"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroBanner() {
  const bannerData = [
    {
      src: "/pics-project/hero banner/4.jpg",
      link: "/",
      alt: "مجموعه جدید پاییزه"
    },
    {
      src: "/pics-project/hero banner/1.jpeg",
      link: "/products/category/hair-care",
      alt: "محصولات تخصصی مراقبت از مو"
    },
    {
      src: "/pics-project/hero banner/1.webp",
      link: "/products/category/skin-care",
      alt: "تکنولوژی نوین مراقبت از پوست"
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-4 lg:px-2 py-2">
      <div className="relative group overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl shadow-stone-200/50">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade" // حس لوکس‌تر با محو شدن اسلایدها
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-pink-600 !w-6 !rounded-full transition-all duration-300',
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[250px] sm:h-[300px] lg:h-[400px]"
        >
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <Link href={banner.link} className="block w-full h-full relative group/item">
                {/* Overlay برای بهبود کنتراست */}
                <div className="absolute inset-0 bg-black/5 group-hover/item:bg-black/0 transition-colors duration-500 z-10" />
                
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  className="object-fill transition-transform duration-[2000ms] ease-out group-hover/item:scale-110"
                  sizes="(max-width: 1440px) 100vw, 1440px"
                />
              </Link>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons - Hidden on Mobile, Visible on Hover */}
          <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-stone-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg border border-stone-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-stone-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg border border-stone-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </Swiper>

        {/* Custom Pagination Style Overrides */}
        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.7;
            width: 8px;
            height: 8px;
            margin: 0 5px !important;
          }
          .swiper-pagination {
            bottom: 24px !important;
          }
        `}} />
      </div>
    </section>
  );
}
