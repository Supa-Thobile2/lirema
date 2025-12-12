import React, { useRef } from "react";
import img from "../images/tech.webp";
import { Button } from "../components";
import { motion, useScroll, useTransform } from "framer-motion";

function Choose() {
  const imageRef = useRef(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="px-6 py-20 max-w-6xl mx-auto space-y-12"
      aria-labelledby="choose-title"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-6 text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-medium">
          Why Choose Us
        </motion.p>

        <motion.h1
          id="choose-title"
          variants={fadeUp}
          className="text-2xl md:text-4xl font-bold"
        >
          Unparalleled engineering excellence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base text-gray-700 max-w-xl mx-auto"
        >
          Delivering integrated solutions across multiple technical domains.
        </motion.p>
      </motion.div>

      {/* CARD SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* LEFT COLUMN - TWO STACKED CARDS */}
        <div className="space-y-6">
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className="p-6 border rounded-xl shadow-sm space-y-4 bg-white"
          >
            <h2 className="text-lg font-bold">Technical Expertise</h2>
            <p className="text-sm text-gray-600">
              Highly skilled engineers with deep technical knowledge.
            </p>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Explore Capabilities" />
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className="p-6 border rounded-xl shadow-sm space-y-4 bg-white"
          >
            <h2 className="text-lg font-bold">Quality Assurance</h2>
            <p className="text-sm text-gray-600">
              Rigorous testing and validation for reliable performance.
            </p>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Explore Capabilities" />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - IMAGE + TEXT CARD */}
        <motion.div
          variants={fadeUp}
          className="border rounded-xl overflow-hidden bg-white flex flex-col md:flex-row"
        >
          {/* Text */}
          <div className="flex flex-col justify-center p-6 space-y-3 md:w-1/2">
            <p className="text-xs font-semibold">Innovation</p>

            <h2 className="text-lg font-bold">
              Cutting-edge technological solutions for complex challenges
            </h2>

            <p className="text-sm text-gray-600">
              Advanced problem-solving approaches delivering impactful results.
            </p>
          </div>

          {/* Parallax Image */}
          <motion.div
            ref={imageRef}
            style={{ y: parallaxY }}
            className="md:w-1/2 h-48 md:h-auto overflow-hidden"
          >
            <img
              src={img}
              alt="Engineering Innovation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Choose;
