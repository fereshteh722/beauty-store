import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد"),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  province: z
    .string()
    .min(2, "استان را وارد کنید"),

  city: z
    .string()
    .min(2, "شهر را وارد کنید"),

  address: z
    .string()
    .min(10, "آدرس باید حداقل ۱۰ کاراکتر باشد"),

  postalCode: z
    .string()
    .regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
});
