"use server";

import { ContactState } from "@/features/contact/types";
import { contactSchema } from "@/features/contact/schema/contact-schema";

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const rawData = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = contactSchema.safeParse(rawData);

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
