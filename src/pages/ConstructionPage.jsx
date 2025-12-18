import React from "react";
import { motion } from "framer-motion";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";

function ConstructionPage() {
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

  return (
    <div>
      <Header />

      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 lg:space-y-20 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="construction-hero-heading"
      >
        {/* Hero Section */}
        <motion.p
          className="text-sm font-semibold text-gray-500 uppercase"
          variants={fadeUp}
        >
          Construction Solutions
        </motion.p>
        <motion.h1
          id="construction-hero-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
          variants={fadeUp}
        >
          Construction Solutions
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-lg text-center text-gray-700 max-w-3xl"
          variants={fadeUp}
        >
          Building innovative solutions that transform infrastructure and drive
          technological progress across multiple sectors.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-6"
          variants={fadeUp}
        >
          <Button text="Learn" ariaLabel="Learn more about construction solutions" />
          <Button text="Contact" ariaLabel="Contact Li Rema Construction" />
        </motion.div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="construction-expertise-heading"
      >
        <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
          Construction
        </motion.p>
        <motion.h2
          id="construction-expertise-heading"
          className="text-xl md:text-2xl font-bold text-center"
          variants={fadeUp}
        >
          Construction Expertise
        </motion.h2>
        <motion.p className="text-sm md:text-base text-gray-700 text-center max-w-2xl" variants={fadeUp}>
          We provide end-to-end construction services with precision, safety, and
          reliability to deliver projects on time and within budget.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-6"
          variants={fadeUp}
        >
          <Button text="Learn" ariaLabel="Learn more about our expertise" />
          <Button text="Learn" ariaLabel="Learn more about our expertise" />
        </motion.div>
      </motion.section>

      {/* Project Examples Section */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="construction-projects-heading"
      >
        <motion.h2 id="construction-projects-heading" className="text-xl md:text-2xl font-bold" variants={fadeUp}>
          Sample Projects
        </motion.h2>
        <motion.p className="text-gray-700 max-w-3xl text-center" variants={fadeUp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4 justify-center mt-6" variants={fadeUp}>
          <Button text="Learn" ariaLabel="Learn more about project 1" />
          <Button text="Learn" ariaLabel="Learn more about project 2" />
        </motion.div>
      </motion.section>

      {/* Highlight Section */}
      <motion.section
        className="py-12 px-4 md:px-12 space-y-6 flex flex-col items-center bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
          Construction Solutions
        </motion.p>
        <motion.h2 className="text-lg md:text-xl font-bold" variants={fadeUp}>
          Delivering Reliable Construction Services
        </motion.h2>
      </motion.section>

      {/* Common Sections */}
      <Team />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default ConstructionPage;
