import Link from "next/link";
import { Container } from "@/components/layout/container"

const FOOTER_LINKS = {
  customer: [
    { label: "نحوه ثبت سفارش", href: "/order-guide" },
    { label: "شیوه‌های پرداخت", href: "/payment" },
    { label: "رویه ارسال سفارش", href: "/shipping" },
    { label: "رویه بازگرداندن کالا", href: "/return-policy" },
  ],
  legal: [
    { label: "حریم خصوصی", href: "/privacy" },
    { label: "شرایط و قوانین", href: "/terms" },
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 pt-8 pb-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-pink-600 tracking-tight">BeautyStore</h2>
            <div className="w-16 h-0.5 bg-pink-600" />
            <p className="text-stone-600 text-xs leading-relaxed max-w-sm">
              در BeautyStore، زیبایی و سلامت شما در اولویت است. ما با وسواس، محصولاتی را انتخاب می‌کنیم که حس لوکس بودن و بهترین نتایج را برای شما به ارمغان بیاورند.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">خدمات مشتریان</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.customer.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-stone-600 hover:text-pink-600 transition-colors text-xs">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info (Simplified) */}
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">تماس با ما</h4>
              <address className="text-stone-600 text-xs space-y-2 not-italic">
                <p>تهران، خیابان فرشته، پلاک ۱۰</p>
                <p className="font-semibold text-stone-900">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-stone-600">
          <p>© ۱۴۰۳ تمامی حقوق محفوظ است.</p>
          <nav className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-pink-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
