import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

/*
  SIGNUP PAGE FEATURES
  - Mobile-first responsive layout
  - Full form validation
  - Password & confirm password visibility toggles
  - Touch-friendly UI
  - Accessible labels and errors
*/

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

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

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Signup successful:", form);
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
            Create Account
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Join us to get started
          </p>
        </header>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* -------- NAME -------- */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className={`
                w-full rounded-xl border
                px-4 py-3 text-sm sm:text-base
                focus:outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300 focus:ring-neutral-900"
                }
              `}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

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

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-500"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* -------- CONFIRM PASSWORD -------- */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className={`
                  w-full rounded-xl border
                  px-4 py-3 pr-12
                  text-sm sm:text-base
                  focus:outline-none focus:ring-2
                  ${
                    errors.confirmPassword
                      ? "border-red-500 focus:ring-red-500"
                      : "border-neutral-300 focus:ring-neutral-900"
                  }
                `}
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-500"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* -------- TERMS -------- */}
          <label className="flex items-start gap-2 text-sm text-neutral-600">
            <input type="checkbox" required className="mt-1" />
            I agree to the{" "}
            <a href="#" className="font-medium text-neutral-900 hover:underline">
              Terms & Conditions
            </a>
          </label>

          {/* -------- SUBMIT -------- */}
          <button
            type="submit"
            className="
              w-full rounded-xl
              bg-neutral-900
              px-6 py-3
              text-sm sm:text-base
              font-semibold text-white
              transition hover:opacity-90
            "
          >
            Create Account
          </button>
        </form>

        {/* ================= FOOTER ================= */}
        <footer className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-neutral-900 hover:underline">
              Sign in
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
