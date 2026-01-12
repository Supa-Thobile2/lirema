import React from "react"
import {
  FaAddressCard,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import { Button, Header } from "../components"
import Footer from "./Footer"

function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* ================= PAGE HEADER ================= */}
        <section
          aria-labelledby="contact-heading"
          className="
            mx-auto max-w-7xl
            p-4
            space-y-4
            text-center md:text-left
          "
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Connect
          </p>

          <h1
            id="contact-heading"
            className="
              text-md sm:text-3xl lg:text-4xl
              font-bold tracking-tight
              text-neutral-900
            "
          >
            Contact Li Rema Engineering & Construction
          </h1>

          <p
            className="
              max-w-xl
              mx-auto md:mx-0
              text-sm sm:text-base
              leading-relaxed
              text-neutral-600
            "
          >
            Reach out to our expert team for comprehensive engineering and
            construction solutions tailored to your project goals.
          </p>

          {/* Quick Actions */}
          <div
            role="group"
            aria-label="Quick contact actions"
            className="
              flex flex-wrap gap-4
              justify-center md:justify-start
              pt-6
            "
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
                  h-14 w-14
                  rounded-full
                  ${action.color}
                  shadow-md
                  transition
                  hover:scale-110 hover:shadow-lg
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-offset-2
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
          aria-labelledby="contact-section-heading"
          className="bg-neutral-50 p-4"
        >
          <div
            className="
              mx-auto max-w-7xl
              px-4 sm:px-6
              grid gap-12
              md:grid-cols-2
            "
          >
            {/* -------- CONTACT DETAILS -------- */}
            <article
              aria-labelledby="contact-info-heading"
              className="space-y-6"
            >
              <h2
                id="contact-info-heading"
                className="text-xl font-bold text-neutral-900"
              >
                Contact Information
              </h2>

              {[
                {
                  icon: <FaRegEnvelopeOpen />,
                  title: "Email",
                  value: "info@liremaeng.com",
                  color: "text-blue-600",
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+27 123 456 789",
                  color: "text-green-600",
                },
                {
                  icon: <FaAddressCard />,
                  title: "Address",
                  value: "Norkem Park North, Gauteng, South Africa",
                  color: "text-yellow-600",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    flex items-start gap-4
                    rounded-xl bg-white
                    p-5
                    shadow-sm
                    transition
                    hover:shadow-md
                  "
                >
                  <span
                    aria-hidden="true"
                    className={`text-2xl ${item.color}`}
                  >
                    {item.icon}
                  </span>

                  <div>
                    <p className="font-semibold text-neutral-800">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </article>

            {/* -------- CONTACT FORM -------- */}
            <form
              aria-labelledby="contact-form-heading"
              className="
                rounded-2xl bg-white
                p-6 sm:p-8
                shadow-lg
                
              "
            >
              <h2
                id="contact-form-heading"
                className="text-xl font-bold text-neutral-900"
              >
                Contact Form
              </h2>

              {[
                { id: "name", type: "text", label: "Your Name" },
                { id: "email", type: "email", label: "Your Email" },
                { id: "subject", type: "text", label: "Subject" },
              ].map((field) => (
                <div key={field.id} className="space-y-1">
                  <label
                    htmlFor={field.id}
                    className="text-sm font-medium text-neutral-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    className="
                      w-full rounded-lg
                      border border-neutral-300
                      px-4 py-3
                      text-sm sm:text-base
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      focus-visible:ring-offset-2
                    "
                  />
                </div>
              ))}

              <div className="">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="
                    w-full resize-none
                    rounded-lg
                    border border-neutral-300
                    px-4 py-3
                    text-sm sm:text-base
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                  "
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-neutral-600">
                <input type="checkbox" required className="mt-1 accent-blue-600" />
                I agree to the terms and conditions
              </label>

              <Button
                text="Submit"
                ariaLabel="Submit contact form"
                className="w-full mt-2"
              />
            </form>
          </div>
        </section>
      </main>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/27123456789?text=Hello%20Li%20Rema%20Engineering"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed bottom-5 right-5 sm:bottom-6 sm:right-6
          z-50
          h-14 w-14 sm:h-16 sm:w-16
          rounded-full
          bg-green-600 text-white
          flex items-center justify-center
          text-xl sm:text-2xl
          shadow-lg
          transition
          hover:scale-110 hover:shadow-2xl
        "
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  )
}

export default ContactPage
