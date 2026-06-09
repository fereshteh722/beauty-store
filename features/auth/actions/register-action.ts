"use server";

import { AuthState } from "../types";

export async function registerAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const password = String(formData.get("password") ?? "");
  const company = String(formData.get("company") ?? "");

  if (company) {
    return { status: "error", message: "درخواست نامعتبر است." };
  }

  const errors: Record<string, string> = {};

  if (name.length < 3) {
    errors.name = "نام حداقل باید ۳ کاراکتر باشد.";
  }

  if (password.length < 6) {
    errors.password = "رمز عبور ضعیف است.";
  }

  if (!/^(\+98|0)?9\d{9}$/.test(phone)) {
    errors.phone = "شماره موبایل معتبر نیست.";
  }

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "اطلاعات ثبت‌نام نامعتبر است.",
      fieldErrors: errors,
    };
  }

  // TODO: save user to DB
  await new Promise((r) => setTimeout(r, 600));

  return {
    status: "success",
    message: "ثبت‌نام با موفقیت انجام شد.",
  };
}
