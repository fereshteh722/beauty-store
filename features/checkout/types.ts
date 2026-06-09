export type PaymentMethod = "online";

export interface CheckoutFormValues {
  fullName: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  paymentMethod: PaymentMethod;
}

export type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>;
