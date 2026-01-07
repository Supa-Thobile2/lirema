import React from "react";
import { FaRegEnvelopeOpen, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";

function QuoteForm() {
  return (
    <>
      <Header />

      {/* ================= HERO / PAGE HEADER ================= */}
      <section
        aria-labelledby="quote-heading"
        className="container mx-auto p-8 text-center md:text-left space-y-6"
      >
        <p className="text-sm font-semibold text-gray-500 uppercase">Quote</p>
        <h1
          id="quote-heading"
          className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Request a Project Quote
        </h1>
        <p className="text-base leading-relaxed text-gray-700 max-w-xl mx-auto md:mx-0">
          Fill out the form below to receive a detailed quote from our expert team for your engineering or construction project.
        </p>
      </section>

      {/* ================= QUICK CONTACT INFO ================= */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            className="flex items-start gap-4 p-4 rounded-lg bg-white shadow hover:shadow-md transition-shadow"
          >
            <span className={`text-2xl ${info.color}`}>{info.icon}</span>
            <div>
              <p className="font-semibold text-gray-800">{info.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{info.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= QUOTE FORM ================= */}
      <section
        id="quote-form"
        className="bg-gray-50 py-16"
        aria-labelledby="quote-form-heading"
      >
        <div className="container mx-auto px-6 md:max-w-3xl">
          <h2
            id="quote-form-heading"
            className="text-xl md:text-2xl font-bold text-neutral-900 mb-6"
          >
            Quote Request Form
          </h2>

          <form className="bg-white p-8 rounded-xl shadow-lg space-y-4">
            {[
              { id: "name", type: "text", placeholder: "Your Name" },
              { id: "email", type: "email", placeholder: "Your Email" },
              { id: "company", type: "text", placeholder: "Company / Organization" },
              { id: "phone", type: "tel", placeholder: "Phone Number" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.placeholder}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="project-details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Details
              </label>
              <textarea
                id="project-details"
                rows={6}
                required
                placeholder="Describe your project and requirements"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <fieldset className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="accent-blue-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions
              </label>
            </fieldset>

            <Button
              text="Submit Quote Request"
              ariaLabel="Submit project quote request"
              className="w-full mt-2"
            />
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default QuoteForm;
