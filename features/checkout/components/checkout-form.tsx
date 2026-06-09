"use client";

import { CheckoutFormValues, CheckoutFormErrors } from "@/features/checkout/types";

interface Props {
  form: CheckoutFormValues;
  errors: CheckoutFormErrors;
  touched: Record<keyof CheckoutFormValues, boolean>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  isFormValid: boolean;
}

export function CheckoutForm({
  form,
  errors,
  touched,
  onChange,
  onBlur,
  onSubmit,
  loading,
  isFormValid
}: Props) {

  const inputClasses = (name: keyof CheckoutFormValues) => `
    w-full rounded-xl p-4 text-sm transition-all duration-300 outline-none border
    ${touched[name] && errors[name] 
      ? "bg-rose-50 border-rose-300 focus:border-rose-400" 
      : "bg-white border-stone-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-100"}
    text-stone-900 placeholder:text-stone-400
  `;

  return (
    <form id="checkout-form" onSubmit={onSubmit} className="space-y-6">

      {/* Step 1 */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h2 className="text-lg font-bold">مشخصات تحویل‌گیرنده</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-500">نام و نام خانوادگی</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              onBlur={onBlur}
              className={inputClasses("fullName")}
              placeholder="سارا احمدی"
            />
            {touched.fullName && errors.fullName && (
              <p className="text-[11px] text-rose-600">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-500">شماره تماس</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              onBlur={onBlur}
              dir="ltr"
              className={inputClasses("phone")}
              placeholder="09123456789"
            />
            {touched.phone && errors.phone && (
              <p className="text-[11px] text-rose-600">{errors.phone}</p>
            )}
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h2 className="text-lg font-bold">نشانی و محل تحویل</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            name="province"
            value={form.province}
            onChange={onChange}
            onBlur={onBlur}
            className={inputClasses("province")}
            placeholder="استان"
          />
          {touched.province && errors.province && (
            <p className="text-[11px] text-rose-600">{errors.province}</p>
          )}

          <input
            name="city"
            value={form.city}
            onChange={onChange}
            onBlur={onBlur}
            className={inputClasses("city")}
            placeholder="شهر"
          />
          {touched.city && errors.city && (
            <p className="text-[11px] text-rose-600">{errors.city}</p>
          )}
        </div>

        <textarea
          name="address"
          value={form.address}
          onChange={onChange}
          onBlur={onBlur}
          className={`${inputClasses("address")} resize-none`}
          rows={3}
          placeholder="پلاک، واحد، آدرس دقیق"
        />
        {touched.address && errors.address && (
          <p className="text-[11px] text-rose-600">{errors.address}</p>
        )}
      </section>

      {/* Step 3 */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h2 className="text-lg font-bold">روش پرداخت</h2>
        </div>

        <label className="cursor-pointer flex items-center p-4 border-2 rounded-xl border-pink-600 bg-pink-50/30">
          <input type="radio" checked readOnly className="hidden" />
          <div className="flex flex-col">
            <span className="font-bold text-sm">پرداخت آنلاین</span>
            <span className="text-[11px] text-stone-500 mt-1">تمام کارت‌های شتاب</span>
          </div>
          <span className="mr-auto w-4 h-4 rounded-full border-4 border-pink-600"></span>
        </label>
      </section>

      <button
        type="submit"
        disabled={loading || !isFormValid}
        className={`
          w-full py-4 rounded-xl font-bold text-white transition-all
          ${loading ? "bg-stone-400" : "bg-pink-600 hover:bg-pink-700"}
        `}
      >
        {loading ? "در حال پردازش..." : "تکمیل و پرداخت نهایی"}
      </button>

      {!isFormValid && (
        <p className="text-[10px] text-rose-500 text-center mt-2">
          لطفاً اطلاعات ضروری را وارد کنید
        </p>
      )}
    </form>
  );
}
