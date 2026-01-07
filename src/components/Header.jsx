import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Scroll-based elevation */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body scroll lock for mobile menu */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contacts" },
    { label: "Our Team", to: "/teams" },
  ];

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        bg-white
        transition-shadow
        ${isScrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="flex items-center gap-2 font-bold text-neutral-900"
          >
            <img
              src={logo}
              alt="Construction engineering technology"
              className="h-10 w-10 rounded-lg border border-neutral-200 object-cover shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `
                    text-sm font-medium uppercase transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
                    ${
                      isActive
                        ? "text-neutral-900 underline underline-offset-4"
                        : "text-neutral-700 hover:text-neutral-900"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              type="button"
              className="rounded-full border border-neutral-300 px-6 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              Log In
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-xl text-neutral-900 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        aria-label="Mobile navigation"
        className={`
          fixed top-0 right-0 z-40 h-full w-3/4 max-w-sm bg-white p-8 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `
                  text-lg font-semibold transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
                  ${
                    isActive
                      ? "text-neutral-900 underline underline-offset-4"
                      : "text-neutral-700 hover:text-neutral-900"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 rounded-full border border-neutral-300 px-6 py-2 text-lg font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
