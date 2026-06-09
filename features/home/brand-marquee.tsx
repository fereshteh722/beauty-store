import Image from "next/image";

export default function PopularBrands() {
  const brandImages = [
    "/pics-project/brands/1.png",
    "/pics-project/brands/2.png",
    "/pics-project/brands/3.png",
    "/pics-project/brands/4.png",
    "/pics-project/brands/1.jpg",
    "/pics-project/brands/2.jpg",
    "/pics-project/brands/3.jpg",
    "/pics-project/brands/4.jpg",
  ];

  return (
    <section className="w-full bg-stone-50">
      <div className="container mx-auto px-4">
        {/* عنوان مینیمال با خط زیرین درخشان */}
        <div className="flex flex-col items-center mb-10 w-fit mx-auto">
          <h2 className="text-xl font-bold text-stone-900 tracking-wide">
            محبوب‌ترین برندها
          </h2>
          {/* خط صورتی با افکت Shadow ملایم */}
          <div className="w-full h-0.5 bg-pink-600 mt-2 shadow-[0_0_8px_rgba(219,39,119,0.6)] rounded-full"></div>
        </div>

        {/* گرید برندها */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brandImages.map((src, index) => (
            <div
              key={index}
              className="relative h-20 flex items-center justify-center p-3 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative w-full h-full grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={src}
                  alt={`برند ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 12vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
