"use server";

import { AuthState } from "../types";
import { registerSchema } from "../schema/auth-schema";

export async function registerAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const company = String(formData.get("company") ?? "");

  
  if (company) {
    return { status: "error", message: "درخواست نامعتبر است." };
  }

  const rawData = {
    phone: String(formData.get("phone") ?? ""),
    password: String(formData.get("password") ?? ""),
    confirmPassword: String(formData.get("confirmPassword") ?? ""),
  };

  const result = registerSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    });

    return {
      status: "error",
      message: "اطلاعات ثبت‌نام صحیح نیست.",
      fieldErrors,
    };
  }


  await new Promise((r) => setTimeout(r, 500));

  return {
    status: "success",
    message: "حساب کاربری با موفقیت ایجاد شد.",
  };
}
