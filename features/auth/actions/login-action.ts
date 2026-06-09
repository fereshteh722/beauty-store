"use server";

import { AuthState } from "../types";

function isIranMobile(input: string) {
  const s = input.replace(/\s|-/g, "");
  return /^(\+98|0)?9\d{9}$/.test(s);
}

export async function loginAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const phone = String(formData.get("phone") ?? "");
  const password = String(formData.get("password") ?? "");
  const company = String(formData.get("company") ?? "");

  if (company) {
    return { status: "error", message: "درخواست نامعتبر است." };
  }

  const errors: Record<string, string> = {};

  if (!isIranMobile(phone)) {
    errors.phone = "شماره موبایل معتبر نیست.";
  }

  if (password.length < 6) {
    errors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
  }

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "اطلاعات ورود صحیح نیست.",
      fieldErrors: errors,
    };
  }

  // TODO: connect to DB + create session
  await new Promise((r) => setTimeout(r, 500));

  return {
    status: "success",
    message: "با موفقیت وارد شدید.",
  };
}
