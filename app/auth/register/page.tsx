import type { Metadata } from "next";
import { AuthShell } from "@/features/auth/components/auth-shell";
import AuthTabs from "@/features/auth/components/auth-tabs";
import RegisterForm from "@/features/auth/components/register-form";

export const metadata: Metadata = { title: "ثبت‌نام" };

export default function Page() {
  return (
    <AuthShell
      title="ثبت‌نام"
      subtitle="یک حساب بسازید تا سریع‌تر خرید کنید."
    >
      <AuthTabs active="register" />
      <RegisterForm />
    </AuthShell>
  );
}
