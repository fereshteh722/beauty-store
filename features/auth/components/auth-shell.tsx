import Link from "next/link";
import { Container } from "@/components/layout/container";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function AuthShell({ title, subtitle, children }: Props) {
  return (
    <main className="min-h-screen bg-stone-50/30 pb-16 sm:pb-20">
      <Container className="pt-10 sm:pt-12 lg:pt-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <section className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Account
            </p>

            <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
              {title}
              <span className="text-pink-600">.</span>
            </h1>

            {subtitle && (
              <p className="mt-4 max-w-md text-sm leading-7 text-stone-600 sm:text-base">
                {subtitle}
              </p>
            )}

            <div className="mt-8">{children}</div>

            <div className="mt-8 text-xs text-stone-500">
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-pink-600"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </section>

          <aside className="hidden lg:block lg:col-span-6">
            <div className="h-full rounded-[2rem] border border-black/5 bg-white p-10 shadow-sm">
              <h2 className="text-lg font-bold">تجربه خرید شخصی‌سازی‌شده</h2>
              <p className="mt-3 text-sm text-stone-600">
                با ورود به حساب کاربری، سفارش‌ها را پیگیری کنید.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
