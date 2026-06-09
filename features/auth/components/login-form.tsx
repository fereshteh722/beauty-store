"use client";

import { useActionState } from "react";
import { loginAction } from "../actions/login-action";
import { AuthState } from "../types";

const initial: AuthState = { status: "idle" };

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initial);

  return (
    <form action={action} className="space-y-4">
      <input name="company" className="hidden" tabIndex={-1} />

      <input name="phone" placeholder="شماره موبایل" />
      <input name="password" type="password" placeholder="رمز عبور" />

      {state.status !== "idle" && <p>{state.message}</p>}

      <button disabled={pending}>
        {pending ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}
