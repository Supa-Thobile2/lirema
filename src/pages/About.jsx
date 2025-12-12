import React from "react";
import { motion } from "framer-motion";
import img from "../images/powerlines.jpg";
import { Button } from "../components";

function About() {
  // --- ANIMATION VARIANTS ---
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

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 px-4 md:px-12 bg-gradient-to-tr from-gray-50 via-white to-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-6">

        {/* LEFT CONTENT */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Small Title */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-wide text-gray-700"
          >
            About
          </motion.p>

          {/* Heading + Description */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h2
              id="about-heading"
              className="text-xl md:text-3xl font-bold leading-snug"
            >
              Transforming engineering challenges into innovative solutions
            </h2>

            <p className="text-sm md:text-base text-gray-800">
              Li Rema Engineering and Construction delivers comprehensive technical
              services with unmatched precision. We combine engineering expertise
              with strategic innovation to solve complex projects efficiently and
              effectively.
            </p>
          </motion.div>

          {/* Mini Image Row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-start gap-4 mt-4"
          >
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={img}
                alt={`Engineering project sample ${i + 1}`}
                className="w-12 h-12 object-cover rounded-md shadow hover:scale-105 transition-transform duration-300"
              />
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4 pt-4"
            role="group"
            aria-label="About section actions"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Our Story" ariaLabel="Learn more about our story" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Get Quote" ariaLabel="Request a project quote" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH PARALLAX */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={img}
            alt="Electrical powerlines representing engineering infrastructure"
            className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
            style={{ willChange: "transform" }}
            whileInView={{ y: [-15, 15] }}
            transition={{ repeat: Infinity, duration: 8, repeatType: "mirror", ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
