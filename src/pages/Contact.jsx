import React, { useRef } from "react";
import img from "../assets/keyGuy.png";
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../components";
import { motion, useScroll, useTransform } from "framer-motion";

function Contact() {
  const imageRef = useRef(null);

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-6xl mx-auto space-y-12"
      aria-labelledby="contact-title"
    >
      {/* HEADER */}
      <motion.div
        className="text-center space-y-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          id="contact-title"
          className="text-3xl md:text-4xl font-bold"
          variants={fadeUp}
        >
          Contact
        </motion.h2>
        <motion.p className="text-sm md:text-base text-gray-700" variants={fadeUp}>
          We're ready to discuss your engineering & construction needs.
        </motion.p>
      </motion.div>

      {/* MAIN CONTACT GRID */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-start"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT - Contact Info */}
        <motion.div className="space-y-6" variants={fadeUp}>
          {/* Email */}
          <div className="flex items-start gap-3">
            <FaRegEnvelopeOpen className="text-xl mt-1" />
            <p className="text-sm text-gray-700">General Inquiries: litabaletsatsi@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl mt-1" />
            <p className="text-sm text-gray-700">General Inquiries: 074 089 6568</p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaAddressCard className="text-xl mt-1" />
            <p className="text-sm text-gray-700">
              General Inquiries: No. # Lorna Street, Birchleigh North, Kempton Park
            </p>
          </div>
        </motion.div>

        {/* RIGHT - Contact Form */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <form className="space-y-4" aria-label="Contact form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-2xl border border-gray-300 outline-none"
              aria-label="Enter your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-2xl border border-gray-300 outline-none"
              aria-label="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-2xl border border-gray-300 outline-none h-32 resize-none"
              aria-label="Enter your message"
            ></textarea>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button text="Submit" ariaLabel="Submit contact form" />
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* OPTIONAL IMAGE WITH PARALLAX */}
      <motion.div
        ref={imageRef}
        style={{ y: parallaxY }}
        className="mt-12 w-full flex justify-center"
      >
        <img
          src={img}
          alt="Key team member"
          className="w-full max-w-md object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Contact;
