import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/features/cart/context/cart-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "فروشگاه زیبایی | BeautyStore",
  description: "بهترین محصولات مراقبت از پوست و مو",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-background font-sans text-foreground">
        <CartProvider>
          <Header />

          <main className="min-h-[calc(100vh-4rem)]">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
