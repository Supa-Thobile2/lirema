import React from "react";
import { Button, Header } from "../components";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

function AboutPage() {
  // Framer Motion Variants
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Header />

      {/* HERO-LIKE TOP SECTION */}
      <section
        className="animated-gradient py-24 px-6 mt-16 text-center"
        aria-labelledby="about-title"
      >
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold">
            Our Story
          </motion.p>

          <motion.h1
            variants={fadeUp}
            id="about-title"
            className="text-3xl md:text-5xl font-bold leading-snug"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-700"
          >
            Building engineering solutions that transform infrastructure.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Learn" ariaLabel="Learn more about us" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Contact" ariaLabel="Contact our team" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="text-sm font-light">
            Our Mission
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-4xl font-bold"
          >
            Engineering excellence through innovation and precision
          </motion.h2>

          <motion.p variants={fadeUp} className="text-sm md:text-base">
            Li Rema Engineering and Construction stands as a pioneering force
            in technical solutions. We merge deep engineering knowledge with
            strategic vision to deliver impactful projects.
          </motion.p>
        </motion.div>
      </section>

      {/* STRENGTHS SECTION */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-sm font-light">
            Our Strengths
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-4xl font-bold"
          >
            Why choose Li Rema?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-sm md:text-base">
            Comprehensive engineering solutions for complex challenges.
          </motion.p>

          {/* Strength Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            {[1, 2, 3].map((card) => (
              <motion.div
                key={card}
                variants={fadeIn}
                className="p-6 bg-white rounded-xl shadow-md space-y-3 border border-gray-200"
              >
                <p className="text-xs font-medium">Expertise</p>
                <h4 className="text-lg font-bold">
                  Proven technical mastery across engineering domains.
                </h4>
                <p className="text-sm text-gray-600">
                  Deep technical knowledge.
                </p>

                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                  <Button text="Learn" ariaLabel="Learn more about this strength" />
                </motion.div>

                <div className="h-24 w-full bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-500">Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="px-6 py-16 max-w-4xl mx-auto space-y-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="text-sm font-light">
            Our Journey
          </motion.p>

          <motion.h3 variants={fadeUp} className="text-2xl font-bold">
            Milestones of engineering excellence
          </motion.h3>

          <motion.p variants={fadeUp} className="text-sm md:text-base">
            A story of continuous growth and technical advancement through
            innovation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-4"
          >
            <Button text="View History" />
            <Button text="Learn" />
          </motion.div>
        </motion.div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">
            Our trusted partners
          </motion.h3>
          <motion.p variants={fadeUp} className="text-sm">
            Collaborative networks driving innovation and excellence.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4">
            <Button text="View Partner" />
            <Button text="Learn" />
          </motion.div>

          <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Partner Images</span>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">
            Ready to build your next project?
          </motion.h3>

          <motion.p variants={fadeUp} className="text-sm">
            Connect with our expert team to discuss your engineering needs.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4"
          >
            <Button text="Contact" />
            <Button text="Request Quote" />
          </motion.div>
        </motion.div>
      </section>

      {/* REUSABLE SECTIONS */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage;
