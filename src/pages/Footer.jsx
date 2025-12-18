import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { motion } from "framer-motion";
import { FaHome, FaTools, FaInfoCircle, FaEnvelope, FaUsers } from "react-icons/fa";

function Footer() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  const linkHover = { scale: 1.05, color: "#1e40af" };

  const footerLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/services", label: "Services", icon: <FaTools /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/contacts", label: "Contact", icon: <FaEnvelope /> },
    { to: "#team", label: "Our Team", icon: <FaUsers /> },
  ];

  return (
    <footer className="relative overflow-hidden w-full px-6 py-20 md:py-24 bg-gray-50">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-blue-200 to-purple-100"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Shapes */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-10 left-10 w-12 h-12 rounded-full bg-purple-300 opacity-40 blur-2xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-blue-300 opacity-30 blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-pink-300 opacity-25 blur-2xl"
      />

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto space-y-8 text-center md:text-left relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">
          Li Rema Engineering & Construction
        </motion.h2>

        <motion.ul
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 space-y-2 md:space-y-0"
        >
          {footerLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={linkHover}
              className="flex items-center gap-2 text-lg cursor-pointer transition-colors duration-300"
            >
              <Link to={item.to} className="flex items-center gap-2">
                <motion.span
                  animate={{
                    y: [0, -4, 0], // Subtle vertical movement
                  }}
                  transition={{
                    duration: 3 + index * 0.5, // Slightly different speed per icon
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.span>
                {item.label}
              </Link>
            </motion.li>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text="Login" ariaLabel="Login to your account" />
          </motion.div>
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-between text-gray-600 mt-6 gap-4 md:gap-0"
        >
          <p className="text-sm">
            © 2025 <strong>Li Rema Construction</strong>. All Rights Reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <p className="text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </p>
            <p className="text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Terms of Service
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
