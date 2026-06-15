"use client";

import { useActionState } from "react";
import { registerAction } from "../actions/register-action";
import { AuthState } from "../types";

const initial: AuthState = { status: "idle" };

export default function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, initial);

  return (
    <form action={action} className="space-y-5">

      {/* honeypot */}
      <input
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* phone */}
      <div>
        <input
          name="phone"
          type="tel"
          placeholder="شماره موبایل"
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none"
        />

        {state.status === "error" && state.fieldErrors?.phone && (
          <p className="mt-2 text-xs text-rose-600">
            {state.fieldErrors.phone}
          </p>
        )}
      </div>

      {/* password */}
      <div>
        <input
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none"
        />

        {state.status === "error" && state.fieldErrors?.password && (
          <p className="mt-2 text-xs text-rose-600">
            {state.fieldErrors.password}
          </p>
        )}
      </div>

      {/* confirm password */}
      <div>
        <input
          name="confirmPassword"
          type="password"
          placeholder="تکرار رمز عبور"
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none"
        />

        {state.status === "error" && state.fieldErrors?.confirmPassword && (
          <p className="mt-2 text-xs text-rose-600">
            {state.fieldErrors.confirmPassword}
          </p>
        )}
      </div>

      {/* global message */}
      {state.status !== "idle" && !state.fieldErrors && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-900"
              : "bg-rose-50 text-rose-900"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-2xl bg-stone-900 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-60"
      >
        {pending ? "در حال ثبت‌نام..." : "ثبت‌نام"}
      </button>
    </form>
  );
}
