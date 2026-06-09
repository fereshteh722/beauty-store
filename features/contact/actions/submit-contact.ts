"use server";

import { ContactState } from "@/features/contact/types";

function isIranMobile(input: string) {
  const s = input.replace(/\s|-/g, "");
  return /^(\+98|0)?9\d{9}$/.test(s);
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return { status: "error", message: "درخواست نامعتبر است." };
  }

  const fieldErrors: Record<string, string> = {};

  if (name.length < 3) {
    fieldErrors.name = "نام را کامل وارد کنید.";
  }

  if (!isIranMobile(phone)) {
    fieldErrors.phone = "شماره موبایل معتبر وارد کنید.";
  }

  if (message.length < 10) {
    fieldErrors.message = "متن پیام باید حداقل ۱۰ کاراکتر باشد.";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "لطفاً موارد مشخص‌شده را اصلاح کنید.",
      fieldErrors,
    };
  }

  await new Promise((r) => setTimeout(r, 600));

  return {
    status: "success",
    message: "پیام شما با موفقیت ارسال شد.",
  };
}
