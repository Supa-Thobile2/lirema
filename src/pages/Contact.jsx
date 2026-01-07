import React from 'react'
import img from '../assets/keyGuy.png'
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa'
import { Button } from '../components'

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 space-y-16"
    >
      {/* HEADER */}
      <header className="mx-auto max-w-prose text-center space-y-4">
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Contact
        </h2>

        <p className="text-base leading-relaxed text-neutral-600">
          We’re ready to discuss your engineering &amp; construction needs.
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* CONTACT DETAILS */}
        <article className="space-y-6">
          {[
            {
              icon: <FaRegEnvelopeOpen aria-hidden="true" />,
              title: 'Email',
              value: 'info@liremaeng.com'
            },
            {
              icon: <FaPhoneAlt aria-hidden="true" />,
              title: 'Phone',
              value: '+27 123 456 789'
            },
            {
              icon: <FaAddressCard aria-hidden="true" />,
              title: 'Address',
              value: 'Norkem Park North, Gauteng, South Africa'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <span className="text-xl text-neutral-700">
                {item.icon}
              </span>

              <div className="space-y-1">
                <p className="font-semibold text-neutral-900">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </article>

        {/* CONTACT FORM */}
        <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <form
            aria-label="Contact form"
            className="space-y-4"
          >
            <label className="sr-only" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-300 p-3 text-sm focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            />

            <label className="sr-only" htmlFor="email">
              Your email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-neutral-300 p-3 text-sm focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            />

            <label className="sr-only" htmlFor="message">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              className="w-full resize-none rounded-xl border border-neutral-300 p-3 text-sm focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            />

            <Button
              text="Submit message"
              ariaLabel="Submit contact form"
              className="w-full focus-visible:ring-2 focus-visible:ring-offset-2"
            />
          </form>
        </article>
      </div>

      {/* DECORATIVE IMAGE */}
      <figure
        aria-hidden="true"
        className="flex justify-center"
      >
        <img
          src={img}
          alt=""
          className="w-full max-w-md rounded-xl border border-neutral-200 shadow-sm"
        />
      </figure>
    </section>
  )
}

export default Contact
