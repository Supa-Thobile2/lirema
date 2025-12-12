import React from "react";
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";
import { motion } from "framer-motion";

function ContactPage() {
  // --- ANIMATION VARIANTS ---
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <motion.section
        aria-labelledby="contact-heading"
        className="py-16 px-4 md:px-12 mt-14 space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeUp} className="text-sm font-medium text-gray-500 uppercase">
          Connect
        </motion.p>
        <motion.h1
          id="contact-heading"
          variants={fadeUp}
          className="text-2xl md:text-4xl font-bold leading-snug"
        >
          Contact Li Rema Engineering and Construction
        </motion.h1>
        <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-700 max-w-xl">
          Reach out to our expert team for comprehensive engineering and construction
          solutions tailored to your project goals.
        </motion.p>

        {/* Quick Actions */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4" role="group" aria-label="Quick contact actions">
          <motion.div variants={buttonAnim} whileHover={{ scale: 1.05 }}>
            <Button text="Email" ariaLabel="Send email to Li Rema Engineering" />
          </motion.div>
          <motion.div variants={buttonAnim} whileHover={{ scale: 1.05 }}>
            <Button text="Call" ariaLabel="Call Li Rema Engineering" />
          </motion.div>
          <motion.div variants={buttonAnim} whileHover={{ scale: 1.05 }}>
            <Button text="WhatsApp" ariaLabel="Chat with Li Rema Engineering on WhatsApp" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CONTACT DETAILS + FORM */}
      <motion.section
        id="contact"
        className="py-16 px-4 md:px-12 bg-gray-50 space-y-12 md:space-y-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12" variants={container}>
          {/* CONTACT CARDS */}
          <motion.div className="flex flex-col gap-6" role="region" aria-labelledby="contact-cards-heading">
            <h2 id="contact-cards-heading" className="sr-only">
              Contact Information
            </h2>
            {[{
              icon: <FaRegEnvelopeOpen className="text-xl text-blue-600" aria-hidden="true" />,
              title: "Email",
              text: "info@liremaeng.com"
            }, {
              icon: <FaPhoneAlt className="text-xl text-green-600" aria-hidden="true" />,
              title: "Phone",
              text: "+27 123 456 789"
            }, {
              icon: <FaAddressCard className="text-xl text-yellow-600" aria-hidden="true" />,
              title: "Address",
              text: "Norkem Park North, Gauteng, South Africa"
            }].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                {item.icon}
                <div>
                  <p className="font-semibold text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeUp}
            aria-labelledby="contact-form-heading"
          >
            <h2 id="contact-form-heading" className="sr-only">
              Contact Form
            </h2>

            <motion.label htmlFor="name" variants={fadeUp} className="sr-only">
              Name
            </motion.label>
            <motion.input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={fadeUp}
            />

            <motion.label htmlFor="email" variants={fadeUp} className="sr-only">
              Email
            </motion.label>
            <motion.input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={fadeUp}
            />

            <motion.label htmlFor="subject" variants={fadeUp} className="sr-only">
              Subject
            </motion.label>
            <motion.input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              variants={fadeUp}
            />

            <motion.label htmlFor="message" variants={fadeUp} className="sr-only">
              Message
            </motion.label>
            <motion.textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Describe your project in detail"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={fadeUp}
            />

            <motion.fieldset className="flex items-center gap-2" variants={fadeUp}>
              <input type="checkbox" id="terms" className="accent-blue-600" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions
              </label>
            </motion.fieldset>

            <motion.div variants={buttonAnim} whileHover={{ scale: 1.05 }}>
              <Button text="Submit" ariaLabel="Submit contact form" />
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default ContactPage;

