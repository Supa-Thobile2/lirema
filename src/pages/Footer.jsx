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

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 space-y-10">
        {/* Brand */}
        <header>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Construction engineering technology"
              className="w-10 h-10 rounded-lg border border-neutral-200 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-neutral-900">
              Li Rema Construction
            </span>
          </Link>
        </header>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
        >
          <ul className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/contacts', label: 'Contact' },
              { to: '/teams', label: 'Our Team' }
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-base font-medium text-neutral-700 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Button
                text="Login"
                ariaLabel="Login to your account"
                className="focus-visible:ring-2 focus-visible:ring-offset-2"
              />
            </li>
          </ul>
        </nav>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600">
          <p className="text-sm leading-relaxed">
            © 2025{' '}
            <strong className="font-semibold text-neutral-900">
              Li Rema Construction
            </strong>
            . All Rights Reserved.
          </p>

          <div className="flex gap-4 md:gap-6">
            <Link
              to="/privacy"
              className="text-sm hover:text-neutral-800 focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm hover:text-neutral-800 focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
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
