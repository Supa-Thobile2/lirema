import React from "react";
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";

function ContactPage() {
  return (
    <>
      <Header />

      {/* ================= PAGE HEADER ================= */}
      <section
        aria-labelledby="contact-heading"
        className="container mx-auto p-8 space-y-6 text-center md:text-left"
      >
        <p className="text-sm font-semibold text-gray-500 uppercase">Connect</p>

        <h1
          id="contact-heading"
          className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-neutral-900"
        >
          Contact Li Rema Engineering & Construction
        </h1>

        <p className="text-base leading-relaxed text-gray-700 max-w-xl mx-auto md:mx-0">
          Reach out to our expert team for comprehensive engineering and
          construction solutions tailored to your project goals.
        </p>

        {/* Quick Actions */}
        <div
          role="group"
          aria-label="Quick contact actions"
          className="flex gap-4 justify-center md:justify-start pt-6"
        >
          {[
            {
              label: "Email",
              href: "mailto:info@liremaeng.com",
              icon: <FaRegEnvelopeOpen />,
              color: "bg-blue-100 text-blue-600",
            },
            {
              label: "Call",
              href: "tel:+27123456789",
              icon: <FaPhoneAlt />,
              color: "bg-green-100 text-green-600",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/27123456789?text=Hello%20Li%20Rema%20Engineering",
              icon: <FaWhatsapp />,
              color: "bg-green-200 text-green-700",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/lirema-engineering",
              icon: <FaLinkedin />,
              color: "bg-blue-200 text-blue-800",
            },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
              className={`
                flex items-center justify-center
                w-14 h-14 rounded-full
                ${action.color}
                shadow-md
                transition-transform duration-200
                hover:scale-110 hover:shadow-lg
                focus-visible:ring-2 focus-visible:ring-offset-2
              `}
            >
              {action.icon}
            </a>
          ))}
        </div>
      </section>

      {/* ================= CONTACT DETAILS + FORM ================= */}
      <section
        id="contact"
        className="bg-gray-50 py-20"
        aria-labelledby="contact-section-heading"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* -------- CONTACT DETAILS -------- */}
          <article
            role="region"
            aria-labelledby="contact-info-heading"
            className="space-y-6"
          >
            <h2 id="contact-info-heading" className="text-xl font-bold text-neutral-900">
              Contact Information
            </h2>

            {[
              {
                icon: <FaRegEnvelopeOpen aria-hidden="true" />,
                title: "Email",
                value: "info@liremaeng.com",
                color: "text-blue-600",
              },
              {
                icon: <FaPhoneAlt aria-hidden="true" />,
                title: "Phone",
                value: "+27 123 456 789",
                color: "text-green-600",
              },
              {
                icon: <FaAddressCard aria-hidden="true" />,
                title: "Address",
                value: "Norkem Park North, Gauteng, South Africa",
                color: "text-yellow-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-white shadow hover:shadow-md transition-shadow"
              >
                <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </article>

          {/* -------- CONTACT FORM -------- */}
          <form
            aria-labelledby="contact-form-heading"
            className="p-8 rounded-xl shadow-lg bg-white space-y-4"
          >
            <h2 id="contact-form-heading" className="text-xl font-bold text-neutral-900">
              Contact Form
            </h2>

            {[
              { id: "name", type: "text", placeholder: "Your Name" },
              { id: "email", type: "email", placeholder: "Your Email" },
              { id: "subject", type: "text", placeholder: "Subject" },
            ].map((field) => (
              <div key={field.id} className="space-y-1">
                <label htmlFor={field.id} className="text-sm font-medium text-gray-700">
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

            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                placeholder="Describe your project in detail"
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
              text="Submit"
              ariaLabel="Submit contact form"
              className="w-full mt-2"
            />
          </form>
        </div>
      </section>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <a
        href="https://wa.me/27123456789?text=Hello%20Li%20Rema%20Engineering"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          w-16 h-16 rounded-full bg-green-600 text-white
          flex items-center justify-center text-2xl
          shadow-lg hover:scale-110 hover:shadow-2xl
          transition-transform duration-200
        "
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  );
}

export default ContactPage;
