import { z } from "zod";

const iranMobileRegex = /^(\+98|0)?9\d{9}$/;

export const loginSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(iranMobileRegex, "شماره موبایل معتبر نیست."),

  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
});

export const registerSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(iranMobileRegex, "شماره موبایل معتبر نیست."),

  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),

  confirmPassword: z
    .string()
    .min(6, "تکرار رمز عبور معتبر نیست."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تکرار آن یکسان نیستند.",
  path: ["confirmPassword"],
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
