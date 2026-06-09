"use client";

import { useState, useMemo } from "react";

export type PaymentMethod = "online";

export interface FormValues {
  fullName: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  paymentMethod: PaymentMethod;
}

export function useCheckoutForm() {
  const [form, setForm] = useState<FormValues>({
    fullName: "",
    phone: "",
    province: "",
    city: "",
    address: "",
    paymentMethod: "online",
  });

  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    fullName: false,
    phone: false,
    province: false,
    city: false,
    address: false,
    paymentMethod: false,
  });

  const phoneRegex = /^09\d{9}$/;

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormValues, string>> = {};
    if (form.fullName.trim().length < 3) e.fullName = "نام معتبر نیست";
    if (!phoneRegex.test(form.phone.trim())) e.phone = "شماره موبایل اشتباه است";
    if (form.province.trim().length < 2) e.province = "استان را وارد کنید";
    if (form.city.trim().length < 2) e.city = "شهر را وارد کنید";
    if (form.address.trim().length < 10) e.address = "آدرس دقیق‌تر نیاز است";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  return {
    form,
    touched,
    errors,
    isValid,
    setTouched,
    handleChange,
    handleBlur,
  };
}
