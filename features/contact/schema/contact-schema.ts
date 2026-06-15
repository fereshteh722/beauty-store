import { z } from "zod";

const iranMobileRegex = /^(\+98|0)?9\d{9}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "نام را کامل وارد کنید."),

  phone: z
    .string()
    .trim()
    .regex(iranMobileRegex, "شماره موبایل معتبر وارد کنید."),

  message: z
    .string()
    .trim()
    .min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشد."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
