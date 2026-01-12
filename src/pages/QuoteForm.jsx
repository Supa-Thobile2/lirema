import React from "react";
import { FaRegEnvelopeOpen, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";

function QuoteForm() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ================= HERO / PAGE HEADER ================= */}
        <section
          aria-labelledby="quote-heading"
          className="mx-auto max-w-7xl space-y-4 p-4"
        >
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-500">
              Quote
            </p>

            <h1
              id="quote-heading"
              className="text-md sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
            >
              Request a Project Quote
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-700 md:mx-0">
              Fill out the form below to receive a detailed quote from our expert
              team for your engineering or construction project.
            </p>
          </div>
        </section>

        {/* ================= QUICK CONTACT INFO ================= */}
        <section className="mx-auto max-w-7xl p-4">
          {/* 
            1 col (mobile) → 3 col (tablet+)
            Cards are tap-friendly and readable
          */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: <FaRegEnvelopeOpen aria-hidden="true" />,
                title: "Email",
                value: "quotes@liremaeng.com",
                color: "text-blue-600",
              },
              {
                icon: <FaPhoneAlt aria-hidden="true" />,
                title: "Phone",
                value: "+27 123 456 789",
                color: "text-green-600",
              },
              {
                icon: <FaBuilding aria-hidden="true" />,
                title: "Office",
                value: "Norkem Park North, Gauteng, South Africa",
                color: "text-yellow-600",
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition
                           motion-safe:hover:shadow-md"
              >
                <span className={`mt-1 text-2xl ${info.color}`}>
                  {info.icon}
                </span>

                <div className="">
                  <p className="font-semibold text-gray-800">
                    {info.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= QUOTE FORM ================= */}
        <section
          id="quote-form"
          aria-labelledby="quote-form-heading"
          className="bg-gray-50 p-4"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2
              id="quote-form-heading"
              className="mb-6 text-xl sm:text-2xl font-bold text-neutral-900"
            >
              Quote Request Form
            </h2>

            <form
              className="space-y-5 rounded-xl bg-white p-6 sm:p-8 shadow-lg"
            >
              {[
                { id: "name", type: "text", label: "Your Name" },
                { id: "email", type: "email", label: "Your Email" },
                { id: "company", type: "text", label: "Company / Organization" },
                { id: "phone", type: "tel", label: "Phone Number" },
              ].map((field) => (
                <div key={field.id} className="space-y-1">
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.id}
                    type={field.type}
                    required
                    className="min-h-[44px] w-full rounded-lg border border-gray-300 px-3 py-2
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="space-y-1">
                <label
                  htmlFor="project-details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>

                <textarea
                  id="project-details"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <fieldset className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-relaxed text-gray-600"
                >
                  I agree to the terms and conditions
                </label>
              </fieldset>

              {/* Full-width CTA for mobile confidence */}
              <Button
                text="Submit Quote Request"
                ariaLabel="Submit project quote request"
                className="w-full"
              />
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default QuoteForm;
