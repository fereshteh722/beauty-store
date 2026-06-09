"use client";

import { useActionState } from "react";
import { registerAction } from "../actions/register-action";
import { AuthState } from "../types";

const initial: AuthState = { status: "idle" };

export default function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, initial);

  return (
    <form action={action} className="space-y-4">
      <input name="company" className="hidden" tabIndex={-1} />

      <input name="name" placeholder="نام کامل" />
      <input name="phone" placeholder="شماره موبایل" />
      <input name="password" type="password" placeholder="رمز عبور" />

      {state.status !== "idle" && <p>{state.message}</p>}

      <button disabled={pending}>
        {pending ? "در حال ثبت‌نام..." : "ثبت‌نام"}
      </button>
    </form>
  );
}
