import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

/*
  FEATURES
  - Mobile-first responsive layout
  - Email & password validation
  - Password visibility toggle
  - Accessible labels & errors
  - Touch-friendly controls
*/

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login successful:", form);
  };

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 sm:px-6">
      <section
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          shadow-md
          p-6 sm:p-8
        "
      >
        {/* ================= HEADER ================= */}
        <header className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Sign in to continue
          </p>
        </header>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* -------- EMAIL -------- */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700">
              Email address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className={`
                w-full rounded-xl border
                px-4 py-3 text-sm sm:text-base
                focus:outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300 focus:ring-neutral-900"
                }
              `}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* -------- PASSWORD -------- */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className={`
                  w-full rounded-xl border
                  px-4 py-3 pr-12
                  text-sm sm:text-base
                  focus:outline-none focus:ring-2
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-neutral-300 focus:ring-neutral-900"
                  }
                `}
                placeholder="••••••••"
              />

              {/* Password Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-neutral-500
                  p-2
                "
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* -------- REMEMBER / FORGOT -------- */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300"
              />
              Remember me
            </label>

            <a href="#" className="font-medium text-neutral-900 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* -------- SUBMIT BUTTON -------- */}
          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-neutral-900
              px-6 py-3
              text-sm sm:text-base
              font-semibold
              text-white
              transition
              hover:opacity-90
            "
          >
            Sign In
          </button>
        </form>

        {/* ================= FOOTER ================= */}
        <footer className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don’t have an account?{" "}
            <a href="#" className="font-semibold text-neutral-900 hover:underline">
              Sign up
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
