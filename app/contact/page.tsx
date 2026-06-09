import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import ContactForm from "@/features/contact/components/contact-form";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای دریافت مشاوره، پیگیری سفارش یا هرگونه سوال با ما در ارتباط باشید.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50/30 pb-16 sm:pb-20">
      <Container className="pt-10 sm:pt-12 lg:pt-14">
        <div className="mx-auto max-w-6xl">

          <header className="mb-10 text-center">
            <h1 className="text-3xl font-black text-stone-900 sm:text-4xl">
              تماس با ما
              <span className="text-pink-600">.</span>
            </h1>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-5">
              {/* contact info */}
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </section>

        </div>
      </Container>
    </main>
  );
}
