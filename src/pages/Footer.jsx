import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'
import logo from '../images/logo.png'

function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full border-t border-neutral-200 bg-white"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-12
          py-16 sm:py-20 lg:py-24
          space-y-10
        "
      >
        {/* ================= BRAND ================= */}
        <header className="flex justify-center md:justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Construction engineering technology"
              className="h-10 w-10 rounded-lg border border-neutral-200 object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900">
              Li Rema Construction
            </span>
          </Link>
        </header>

        {/* ================= NAVIGATION ================= */}
        <nav aria-label="Footer navigation">
          <ul
            className="
              flex flex-col items-center gap-4
              md:flex-row md:items-center md:justify-between
            "
          >
            {/* Links */}
            <li className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/contacts', label: 'Contact' },
                { to: '/teams', label: 'Our Team' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    text-sm sm:text-base font-medium
                    text-neutral-700 hover:text-neutral-900
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                    rounded-md px-2 py-1
                  "
                >
                  {item.label}
                </Link>
              ))}
            </li>

            {/* CTA */}
            <li>
              <Button
                text="Login"
                ariaLabel="Login to your account"
                className="
                  px-6 py-2 sm:py-3
                  text-sm sm:text-base
                  focus-visible:ring-2 focus-visible:ring-offset-2
                "
              />
            </li>
          </ul>
        </nav>

        {/* ================= FOOTER BOTTOM ================= */}
        <div
          className="
            flex flex-col items-center gap-4
            md:flex-row md:justify-between
            text-neutral-600
          "
        >
          <p className="text-sm text-center md:text-left">
            © 2025{' '}
            <strong className="font-semibold text-neutral-900">
              Li Rema Construction
            </strong>
            . All Rights Reserved.
          </p>

          <div className="flex gap-4 md:gap-6">
            <Link
              to="/policy"
              className="
                text-sm hover:text-neutral-800
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2
                rounded-md px-2 py-1
              "
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="
                text-sm hover:text-neutral-800
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2
                rounded-md px-2 py-1
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
