"use client";

import { useActionState } from "react";
import { submitContact } from "@/features/contact/actions/submit-contact";
import { ContactState } from "@/features/contact/types";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm shadow-stone-200/40 md:p-8">
      <h2 className="mb-6 text-xl font-bold tracking-tight text-stone-900">
        فرم تماس
      </h2>

      {state.status !== "idle" && (
        <div
          className={[
            "mb-5 rounded-2xl border px-4 py-3 text-sm",
            state.status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900",
          ].join(" ")}
        >
          {state.message}
        </div>
      )}

      <form action={action} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">
            نام و نام خانوادگی
          </label>

          <input
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
          />

          {state.status === "error" && state.fieldErrors?.name && (
            <p className="mt-2 text-xs text-rose-600">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">
            شماره تماس
          </label>

          <input
            name="phone"
            type="tel"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
          />

          {state.status === "error" && state.fieldErrors?.phone && (
            <p className="mt-2 text-xs text-rose-600">
              {state.fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">
            پیام شما
          </label>

          <textarea
            name="message"
            rows={5}
            required
            className="w-full resize-none rounded-2xl border border-black/10 px-4 py-3 text-sm"
          />

          {state.status === "error" && state.fieldErrors?.message && (
            <p className="mt-2 text-xs text-rose-600">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-2xl bg-pink-600 py-3 text-sm font-bold text-white hover:bg-pink-700 disabled:opacity-60"
        >
          {pending ? "در حال ارسال..." : "ارسال پیام"}
        </button>
      </form>
    </div>
  );
}
