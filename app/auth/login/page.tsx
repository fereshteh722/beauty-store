import type { Metadata } from "next";
import { AuthShell } from "@/features/auth/components/auth-shell";
import AuthTabs from "@/features/auth/components/auth-tabs";
import LoginForm from "@/features/auth/components/login-form";

export const metadata: Metadata = { title: "ورود" };

export default function Page() {
  return (
    <AuthShell
      title="ورود"
      subtitle="برای ادامه خرید وارد حساب خود شوید."
    >
      <AuthTabs active="login" />
      <LoginForm />
    </AuthShell>
  );
}
