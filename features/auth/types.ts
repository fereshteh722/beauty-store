export type AuthFieldErrors = {
  phone?: string;
  password?: string;
  confirmPassword?: string;
};

export type AuthState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: AuthFieldErrors;
};
