"use server";

import { loginSchema } from "../schema/auth-schema";
import { AuthState, AuthFieldErrors } from "../types";


const fieldErrors: AuthFieldErrors = {};


export async function loginAction(
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
  };

  const result = loginSchema.safeParse(rawData);

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
      message: "اطلاعات ورود صحیح نیست.",
      fieldErrors,
    };
  }

  // ✅ TODO: connect to DB + create session
  await new Promise((r) => setTimeout(r, 500));

  return {
    status: "success",
    message: "با موفقیت وارد شدید.",
  };
}
