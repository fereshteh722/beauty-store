import Link from "next/link";
import { Container } from "@/components/layout/container";

function SadMark() {
  return (
    <svg
      viewBox="0 0 320 140"
      className="h-16 w-56 sm:h-20 sm:w-72 lg:h-24 lg:w-[22rem]"
      role="img"
      aria-label="نشان ناراحتی"
    >
      {/* frown curve */}
      <path
        d="M40 110 C 95 55, 225 55, 280 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        className="text-pink-600/25"
      />

      {/* optional tiny end caps glow (very subtle) */}
      <circle cx="40" cy="110" r="6" className="fill-pink-600/18" />
      <circle cx="280" cy="110" r="6" className="fill-pink-600/18" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-stone-200/50 lg:rounded-[3rem]">
          {/* subtle background, consistent with your system */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white to-white" />

          <div className="relative px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 flex justify-center">
                <SadMark />
              </div>

              <p className="text-lg font-medium tracking-[0.2em] text-stone-500 sm:text-sm lg:text-lg">
                404
              </p>

              <h1 className="mt-3 text-lg font-semibold tracking-tight text-stone-900 sm:text-2xl lg:text-2xl">
                صفحه‌ای که دنبالش بودید پیدا نشد
              </h1>


              <div className="mt-8 flex justify-center">
                <Link
                  href="/"
                  className="
                    inline-flex items-center justify-center rounded-full
                    bg-pink-600 px-6 py-3 text-sm font-medium text-white
                    transition duration-300 hover:bg-pink-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600/40
                    focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  "
                >
                  بازگشت به صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
