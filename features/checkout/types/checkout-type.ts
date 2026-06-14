import { z } from "zod";
import { checkoutSchema } from "../schema/checkout-schema";

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export type CheckoutFormErrors = Partial<
  Record<keyof CheckoutFormValues, string>
>;

export type CheckoutFormTouched = Partial<
  Record<keyof CheckoutFormValues, boolean>
>;
