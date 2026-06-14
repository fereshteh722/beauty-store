"use client";

import {
  CheckoutFormValues,
  CheckoutFormErrors,
  CheckoutFormTouched,
} from "@/features/checkout/types/checkout-type";
import { FormField } from "@/features/checkout/components/form-field";

interface Props {
  form: CheckoutFormValues;
  errors: CheckoutFormErrors;
  touched: CheckoutFormTouched;
  onChange: (field: keyof CheckoutFormValues, value: string) => void;
  onBlur: (field: keyof CheckoutFormValues) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  isFormValid: boolean;
  submitted?: boolean;
}

export function CheckoutForm({
  form,
  errors,
  touched,
  onChange,
  onBlur,
  onSubmit,
  loading,
  isFormValid,
  submitted = false,
}: Props) {
  // دکمه فقط هنگام ارسال لودینگ غیرفعال می‌شود
  const isButtonDisabled = loading;

  return (
    <form id="checkout-form" onSubmit={onSubmit} className="space-y-6">

      {/* بخش ۱: مشخصات تحویل‌گیرنده */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900 text-white font-bold text-sm">
            ۱
          </span>
          <h2 className="text-lg font-bold">مشخصات تحویل‌گیرنده</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="نام و نام خانوادگی"
            name="fullName"
            value={form.fullName}
            placeholder="مثلاً: سارا احمدی"
            errors={errors}
            touched={touched}
            onChange={(e) => onChange("fullName", e.target.value)}
            onBlur={() => onBlur("fullName")}
          />

          <FormField
            label="شماره تماس"
            name="phone"
            type="tel"
            value={form.phone}
            placeholder="09123456789"
            dir="ltr"
            errors={errors}
            touched={touched}
            onChange={(e) => onChange("phone", e.target.value)}
            onBlur={() => onBlur("phone")}
          />
        </div>
      </section>

      {/* بخش ۲: نشانی و محل تحویل */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900 text-white font-bold text-sm">
            ۲
          </span>
          <h2 className="text-lg font-bold">نشانی و محل تحویل</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            label="استان"
            name="province"
            value={form.province}
            placeholder="تهران"
            errors={errors}
            touched={touched}
            onChange={(e) => onChange("province", e.target.value)}
            onBlur={() => onBlur("province")}
          />

          <FormField
            label="شهر"
            name="city"
            value={form.city}
            placeholder="تهران"
            errors={errors}
            touched={touched}
            onChange={(e) => onChange("city", e.target.value)}
            onBlur={() => onBlur("city")}
          />
        </div>

        <FormField
          label="آدرس دقیق"
          name="address"
          textarea
          value={form.address}
          placeholder="پلاک، واحد، کوچه، خیابان"
          errors={errors}
          touched={touched}
          onChange={(e) => onChange("address", e.target.value)}
          onBlur={() => onBlur("address")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FormField
            label="کد پستی"
            name="postalCode"
            type="text"
            dir="ltr"
            value={form.postalCode}
            placeholder="1234567890"
            errors={errors}
            touched={touched}
            onChange={(e) => onChange("postalCode", e.target.value)}
            onBlur={() => onBlur("postalCode")}
          />
        </div>
      </section>

      {/* بخش ۳: روش پرداخت */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900 text-white font-bold text-sm">
            ۳
          </span>
          <h2 className="text-lg font-bold">روش پرداخت</h2>
        </div>

        <div className="p-4 border-2 border-stone-100 rounded-xl bg-stone-50/40 flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-stone-900">پرداخت آنلاین (درگاه بانکی)</p>
            <p className="text-[11px] text-stone-500 mt-1">
              قابل پرداخت با تمام کارت‌های عضو شتاب
            </p>
          </div>
          <div className="h-5 w-5 rounded-full border-4 border-pink-600 bg-white" />
        </div>
      </section>

      {/* دکمه نهایی */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 active:scale-[0.98] ${
            isButtonDisabled
              ? "bg-stone-300 cursor-not-allowed"
              : "bg-stone-900 hover:bg-pink-600 shadow-lg shadow-stone-200"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              در حال پردازش...
            </span>
          ) : (
            "ثبت و پرداخت نهایی"
          )}
        </button>

        {!isFormValid && submitted && (
          <p className="text-[13px] font-medium text-rose-600 text-center mt-4 bg-rose-50 py-2 rounded-lg border border-rose-100">
            برخی از فیلدها نیاز به اصلاح دارند. لطفاً فرم را چک کنید.
          </p>
        )}
      </div>
    </form>
  );
}
