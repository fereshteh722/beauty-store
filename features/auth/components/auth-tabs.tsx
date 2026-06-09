import Link from "next/link";

export default function AuthTabs({
  active,
}: {
  active: "login" | "register";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition";
  const activeCls = "bg-stone-900 text-white shadow-sm";
  const inactiveCls = "text-stone-600 hover:text-stone-900";

  return (
    <div className="mb-6 flex gap-2 rounded-full border border-black/5 bg-white p-1">
      <Link
        href="/auth/login"
        className={`${base} ${active === "login" ? activeCls : inactiveCls}`}
      >
        ورود
      </Link>
      <Link
        href="/auth/register"
        className={`${base} ${
          active === "register" ? activeCls : inactiveCls
        }`}
      >
        ثبت‌نام
      </Link>
    </div>
  );
}
