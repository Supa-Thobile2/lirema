import React from "react";
import { motion } from "framer-motion";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";

function Civil() {
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

  const hoverEffect = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
  };

  const buttonHover = {
    whileHover: { scale: 1.05, backgroundColor: "#2563EB", color: "#fff" },
    whileTap: { scale: 0.95 },
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="civil-hero-heading"
      >
        <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
          Civil
        </motion.p>
        <motion.h1
          id="civil-hero-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
          variants={fadeUp}
        >
          Civil Engineering Excellence
        </motion.h1>
        <motion.p className="text-sm md:text-base lg:text-lg text-center text-gray-700 max-w-3xl" variants={fadeUp}>
          Transform landscapes with precision engineering and innovative construction solutions that drive progress.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4 justify-center mt-6" variants={fadeUp}>
          <motion.div {...buttonHover}>
            <Button text="Explore" ariaLabel="Explore Civil Engineering services" />
          </motion.div>
          <motion.div {...buttonHover}>
            <Button text="Contact" ariaLabel="Contact Li Rema Civil Engineering" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="civil-expertise-heading"
      >
        <motion.div
          className="space-y-4 p-6 rounded-lg shadow-lg bg-white w-full md:max-w-4xl"
          variants={fadeUp}
          {...hoverEffect}
        >
          <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
            Services
          </motion.p>
          <motion.h2
            id="civil-expertise-heading"
            className="text-xl md:text-2xl font-bold text-center"
            variants={fadeUp}
          >
            Civil Construction Expertise
          </motion.h2>
          <motion.p className="text-sm md:text-base text-gray-700 text-center max-w-2xl" variants={fadeUp}>
            Transforming landscapes through precision engineering and innovative solutions. We deliver comprehensive civil construction services that meet the highest industry standards.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center mt-6" variants={fadeUp}>
            <motion.div {...buttonHover}>
              <Button text="Learn" ariaLabel="Learn more about Civil Construction Expertise" />
            </motion.div>
            <motion.div {...buttonHover}>
              <Button text="Contact" ariaLabel="Contact Civil Construction Team" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Foundations Section */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="foundations-heading"
      >
        <motion.div
          className="space-y-4 p-6 rounded-lg shadow-lg bg-white w-full md:max-w-4xl"
          variants={fadeUp}
          {...hoverEffect}
        >
          <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
            Foundations
          </motion.p>
          <motion.h2 id="foundations-heading" className="text-xl md:text-2xl font-bold text-center" variants={fadeUp}>
            Site Preparation and Groundwork
          </motion.h2>
          <motion.p className="text-sm md:text-base text-gray-700 text-center max-w-3xl" variants={fadeUp}>
            Comprehensive site preparation using advanced techniques and equipment. We ensure stable and optimized foundations for all construction projects.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center mt-6" variants={fadeUp}>
            <motion.div {...buttonHover}>
              <Button text="Explore" ariaLabel="Explore Foundations Services" />
            </motion.div>
            <motion.div {...buttonHover}>
              <Button text="Details" ariaLabel="View Details on Foundations Services" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Residential & Commercial */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="residential-heading"
      >
        <motion.div
          className="space-y-4 p-6 rounded-lg shadow-lg bg-white w-full md:max-w-4xl"
          variants={fadeUp}
          {...hoverEffect}
        >
          <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
            Construction
          </motion.p>
          <motion.h2 id="residential-heading" className="text-xl md:text-2xl font-bold text-center" variants={fadeUp}>
            Residential and Commercial Building Solutions
          </motion.h2>
          <motion.p className="text-sm md:text-base text-gray-700 text-center max-w-3xl" variants={fadeUp}>
            We transform spaces with precision and vision. Our construction approach integrates cutting-edge techniques with practical engineering expertise.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center mt-6" variants={fadeUp}>
            <motion.div {...buttonHover}>
              <Button text="Explore" ariaLabel="Explore Residential and Commercial Construction" />
            </motion.div>
            <motion.div {...buttonHover}>
              <Button text="Details" ariaLabel="View Details of Residential and Commercial Construction" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Builds Section with Video */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="builds-heading"
      >
        <motion.div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full" variants={fadeUp}>
          <motion.div
            className="w-full md:w-1/2 h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg"
            {...hoverEffect}
          >
            <p>Video Placeholder</p>
          </motion.div>
          <motion.div className="w-full md:w-1/2 space-y-4" variants={fadeUp}>
            <motion.p className="text-sm font-semibold text-gray-500 uppercase">Builds</motion.p>
            <motion.h2 id="builds-heading" className="text-xl md:text-2xl font-bold">
              Comprehensive Residential Construction Services
            </motion.h2>
            <motion.p className="text-sm md:text-base text-gray-700">
              We design and construct houses that blend functionality with modern architectural principles. Our residential projects reflect individual client visions.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 mt-4" variants={fadeUp}>
              <motion.div {...buttonHover}>
                <Button text="Explore" ariaLabel="Explore Residential Builds" />
              </motion.div>
              <motion.div {...buttonHover}>
                <Button text="Details" ariaLabel="View Details of Residential Builds" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Management & Consultation Sections */}
      <motion.section
        className="py-16 px-4 md:px-12 space-y-12 md:space-y-16 flex flex-col items-center bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            label: "Management",
            title: "Project Consulting Service",
            text: "Comprehensive project management from concept to completion. We deliver strategic solutions that transform complex challenges into successful outcomes.",
            buttons: ["Learn", "Contact"],
          },
          {
            label: "Consultation",
            title: "Strategic Project Planning",
            text: "Developing comprehensive project roadmaps that align technical requirements with business objectives and resource optimization.",
            buttons: ["Explore", "Details"],
          },
          {
            label: "Get Started",
            title: "Ready to start your next project",
            text: "Collaborate with our expert civil engineering team for comprehensive construction solutions.",
            buttons: ["Consult", "Quote"],
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg shadow-lg bg-white w-full md:max-w-4xl"
            variants={fadeUp}
            {...hoverEffect}
            aria-labelledby={`section-${idx}-heading`}
          >
            <motion.p className="text-sm font-semibold text-gray-500 uppercase" variants={fadeUp}>
              {section.label}
            </motion.p>
            <motion.h2 id={`section-${idx}-heading`} className="text-xl md:text-2xl font-bold" variants={fadeUp}>
              {section.title}
            </motion.h2>
            <motion.p className="text-sm md:text-base text-gray-700 max-w-2xl" variants={fadeUp}>
              {section.text}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 justify-center mt-4" variants={fadeUp}>
              {section.buttons.map((btn, bidx) => (
                <motion.div key={bidx} {...buttonHover}>
                  <Button text={btn} ariaLabel={`${btn} ${section.title}`} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* Common Sections */}
      <Team />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default Civil;
