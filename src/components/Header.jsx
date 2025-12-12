import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLogin = () => console.log("Login button pressed");

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  // Floating shapes animation
  const float = {
    animate: {
      y: [0, -8, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="relative fixed top-0 left-0 w-full z-50">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Shapes */}
      <motion.div className="absolute top-2 left-10 w-10 h-10 rounded-full bg-purple-300 opacity-40 blur-2xl" animate={float.animate} />
      <motion.div className="absolute top-8 right-20 w-16 h-16 rounded-full bg-blue-300 opacity-30 blur-3xl" animate={float.animate} />
      <motion.div className="absolute bottom-4 left-1/4 w-12 h-12 rounded-full bg-pink-300 opacity-25 blur-2xl" animate={float.animate} />

      {/* Header content */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-6 relative z-10">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900">
          Li Rema Engineering & Construction
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm md:text-base uppercase hover:text-gray-800 transition">
            Home
          </Link>
          <Link to="/services" className="text-sm md:text-base uppercase hover:text-gray-800 transition">
            Services
          </Link>
          <Link to="/about" className="text-sm md:text-base uppercase hover:text-gray-800 transition">
            About
          </Link>
          <Link to="/contacts" className="text-sm md:text-base uppercase hover:text-gray-800 transition">
            Contact
          </Link>
          <Link to="#team" className="text-sm md:text-base uppercase hover:text-gray-800 transition">
            Our Team
          </Link>
          <button
            onClick={handleLogin}
            className="px-6 py-2 rounded-full border font-semibold text-sm hover:bg-gray-100 transition"
          >
            Log In
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-40 p-8 flex flex-col gap-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-gray-800 transition">
              Home
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-gray-800 transition">
              Services
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-gray-800 transition">
              About
            </Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-gray-800 transition">
              Contact
            </Link>
            <Link to="#team" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-gray-800 transition">
              Our Team
            </Link>
            <button
              onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}
              className="px-6 py-2 rounded-full border font-semibold text-lg hover:bg-gray-100 transition"
            >
              Log In
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
