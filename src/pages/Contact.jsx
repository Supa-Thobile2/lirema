import React from 'react'
import img from '../assets/keyGuy.png'
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa'
import { Button } from '../components'

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        space-y-16
      "
    >
      {/* ================= HEADER ================= */}
      <header className="mx-auto max-w-xl text-center space-y-3">
        <h2
          id="contact-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Contact
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-600">
          We’re ready to discuss your engineering &amp; construction needs.
        </p>
      </header>

      {/* ================= MAIN GRID ================= */}
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* ================= CONTACT DETAILS ================= */}
        <article className="space-y-6">
          {[
            {
              icon: <FaRegEnvelopeOpen />,
              title: 'Email',
              value: 'info@liremaeng.com',
              href: 'mailto:info@liremaeng.com',
            },
            {
              icon: <FaPhoneAlt />,
              title: 'Phone',
              value: '+27 123 456 789',
              href: 'tel:+27123456789',
            },
            {
              icon: <FaAddressCard />,
              title: 'Address',
              value: 'Norkem Park North, Gauteng, South Africa',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                flex items-start gap-4
                rounded-2xl border border-neutral-200
                bg-white
                p-5 sm:p-6
                shadow-sm
              "
            >
              <span
                aria-hidden="true"
                className="mt-1 text-xl sm:text-2xl text-neutral-700"
              >
                {item.icon}
              </span>

              <div className="space-y-1">
                <p className="text-sm sm:text-base font-semibold text-neutral-900">
                  {item.title}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="
                      text-sm sm:text-base text-neutral-600
                      hover:underline
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    "
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </article>

        {/* ================= CONTACT FORM ================= */}
        <article
          className="
            rounded-2xl border border-neutral-200
            bg-white
            p-6 sm:p-8
            shadow-sm
          "
        >
          <form
            aria-label="Contact form"
            className="space-y-4"
          >
            {/* Name */}
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              className="
                w-full rounded-xl border border-neutral-300
                px-4 py-3 min-h-[44px]
                text-sm sm:text-base
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            />

            {/* Email */}
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="email"
              className="
                w-full rounded-xl border border-neutral-300
                px-4 py-3 min-h-[44px]
                text-sm sm:text-base
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            />

            {/* Message */}
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              className="
                w-full resize-none rounded-xl
                border border-neutral-300
                px-4 py-3
                text-sm sm:text-base
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            />

            {/* Submit */}
            <Button
              text="Submit message"
              ariaLabel="Submit contact form"
              className="
                w-full py-3 sm:py-4
                text-sm sm:text-base
                focus-visible:ring-2 focus-visible:ring-offset-2
              "
            />
          </form>
        </article>
      </div>

      {/* ================= DECORATIVE IMAGE ================= */}
      <figure
        aria-hidden="true"
        className="flex justify-center lg:justify-end"
      >
        <img
          src={img}
          alt=""
          loading="lazy"
          className="
            w-full max-w-sm sm:max-w-md
            rounded-2xl
            border border-neutral-200
            shadow-sm
          "
        />
      </figure>
    </section>
  )
}

export default Contact
