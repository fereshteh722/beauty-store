"use client";

import { useState, useMemo } from "react";
import { checkoutSchema } from "../schema/checkout-schema";
import {
  CheckoutFormValues,
  CheckoutFormErrors,
  CheckoutFormTouched,
} from "../types/checkout-type";

const initialForm: CheckoutFormValues = {
  fullName: "",
  phone: "",
  province: "",
  city: "",
  address: "",
  postalCode: "",
};

export function useCheckoutForm() {
  const [form, setForm] = useState<CheckoutFormValues>(initialForm);
  const [touched, setTouched] = useState<CheckoutFormTouched>({});
  const [submitted, setSubmitted] = useState(false);

  const validation = useMemo(() => {
    const result = checkoutSchema.safeParse(form);

    if (result.success) {
      return {
        errors: {} as CheckoutFormErrors,
        isValid: true,
      };
    }

    const errors: CheckoutFormErrors = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof CheckoutFormValues;

      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }

    return {
      errors,
      isValid: false,
    };
  }, [form]);

  const handleChange = (
    field: keyof CheckoutFormValues,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBlur = (field: keyof CheckoutFormValues) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const touchAllFields = () => {
    const allTouched: CheckoutFormTouched = {};

    for (const key in form) {
      allTouched[key as keyof CheckoutFormValues] = true;
    }

    setTouched(allTouched);
  };

  const handleSubmitAttempt = () => {
    setSubmitted(true);
    touchAllFields();
    return validation.isValid;
  };

  return {
    form,
    errors: validation.errors,
    isValid: validation.isValid,
    touched,
    submitted,
    handleChange,
    handleBlur,
    handleSubmitAttempt,
  };
}
