"use client";

import {
  CheckoutFormValues,
  CheckoutFormErrors,
  CheckoutFormTouched,
} from "../types/checkout-type";

interface Props {
  label?: string;
  name: keyof CheckoutFormValues;
  value: string;
  placeholder?: string;
  errors: CheckoutFormErrors;
  touched: CheckoutFormTouched;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  dir?: "ltr" | "rtl";
  type?: string;
}

export function FormField({
  label,
  name,
  value,
  placeholder,
  errors,
  touched,
  onChange,
  onBlur,
  textarea,
  dir,
  type = "text",
}: Props) {
  const hasError = touched[name] && errors[name];

  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const inputClasses = `
w-full rounded-xl p-4 text-sm outline-none border transition-all duration-200
${hasError
      ? "bg-rose-50 border-rose-300 focus:border-rose-400"
      : "bg-white border-stone-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-100"}
text-stone-900 placeholder:text-stone-400
`;

  return (
    <div className="space-y-2">

      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-stone-500"
        >
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          dir={dir}
          rows={3}
          className={`${inputClasses} resize-none`}
          aria-invalid={!!hasError}
          aria-describedby={hasError ? errorId : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          dir={dir}
          className={inputClasses}
          aria-invalid={!!hasError}
          aria-describedby={hasError ? errorId : undefined}
        />
      )}

      {hasError && (
        <p
          id={errorId}
          className="text-xs text-rose-600"
        >
          {errors[name]}
        </p>
      )}
    </div>
  );
}
