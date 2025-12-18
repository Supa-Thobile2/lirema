import React from "react";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaPlug,
  FaTools,
  FaShieldAlt,
  FaSolarPanel,
  FaVideo,
  FaHome,
  FaCogs,
} from "react-icons/fa";

function ElectricalSolutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      icon: <FaBolt />,
      title: "HT Switching and Authorization",
      description:
        "Advanced high tension electrical management with strict safety protocols and expert technical implementation.",
    },
    {
      icon: <FaPlug />,
      title: "Transformer Maintenance",
      description:
        "Ensuring continuous electrical performance through expert diagnostic and preventive strategies.",
    },
    {
      icon: <FaTools />,
      title: "Switchgear Maintenance",
      description:
        "Precision management for safe and efficient electrical distribution.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.section
        className="px-6 md:px-12 py-16 flex flex-col items-center text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="electrical-hero-heading"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold tracking-wide text-gray-700"
        >
          Electrify
        </motion.p>
        <motion.h1
          id="electrical-hero-heading"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-extrabold leading-snug"
        >
          Electrical Services Refined
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-600 max-w-2xl">
          Reliable infrastructure designed to support your business operations with cutting-edge expertise.
        </motion.p>
        <motion.div variants={fadeUp} className="flex gap-4">
          <Button text="Explore" icon={<FaBolt aria-hidden="true" />} />
          <Button text="Learn" icon={<FaPlug aria-hidden="true" />} />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="px-6 md:px-12 py-16 space-y-12"
        variants={containerVariants}
      >
        <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-bold text-center md:text-left">
          Comprehensive Electrical Solutions for Every Need
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl text-center md:text-left">
          We deliver precision electrical services across multiple sectors and applications.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4"
            >
              <div className="text-blue-600 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="px-6 md:px-12 py-16 space-y-12"
        variants={containerVariants}
      >
        <motion.h2 variants={fadeUp} className="text-sm font-semibold text-gray-700">
          Expertise
        </motion.h2>
        <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-bold">
          HT Switching and Authorization
        </motion.h3>
        <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl">
          Precision electrical management for complex industrial environments.
        </motion.p>
        <motion.ul variants={fadeUp} className="list-disc list-inside text-gray-600 space-y-2">
          <li>Advanced safety protocols</li>
          <li>Certified technical personnel</li>
          <li>Comprehensive risk management</li>
        </motion.ul>
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 mt-4">
          <Button text="Learn" icon={<FaTools />} />
          <Button text="Contact" icon={<FaShieldAlt />} />
        </motion.div>
      </motion.section>

      {/* Add other sections similarly using motion.div and icons */}
      {/* Placeholder images can be added with <img src={placeholder} alt="description" /> */}

      {/* Team, Quote, Contact and Footer */}
      <Team />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default ElectricalSolutions;
