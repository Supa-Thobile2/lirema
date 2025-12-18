import React, { useRef } from "react";
import { Button, Header } from "../components";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPage() {
  const heroRef = useRef(null);

  // Hero parallax
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroParallax = useTransform(heroScroll, [0, 1], ["-20px", "20px"]);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const hoverLift = {
    hover: { y: -5, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div>
      <Header />

      {/* HERO-LIKE TOP SECTION WITH PARALLAX HEADING */}
      <section
        ref={heroRef}
        className="py-24 px-6 md:px-12 text-center bg-gradient-to-r from-blue-50 to-white"
        aria-labelledby="about-title"
      >
        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wide"
          >
            Our Story
          </motion.p>

          <motion.h1
            id="about-title"
            variants={fadeUp}
            style={{ y: heroParallax }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-gray-900"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-700"
          >
            Building engineering solutions that transform infrastructure with precision, innovation, and reliability.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4 flex-wrap"
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

      {/* STRENGTHS SECTION */}
      <section className="px-6 py-16 md:px-12 max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-sm md:text-base font-medium text-blue-600 uppercase tracking-wide">
            Our Strengths
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why choose Li Rema?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-700">
            Comprehensive engineering solutions for complex challenges delivered with expertise and precision.
          </motion.p>

          {/* Strength Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-6">
            {[1, 2, 3].map((card) => {
              const cardRef = useRef(null);
              const { scrollYProgress: cardScroll } = useScroll({
                target: cardRef,
                offset: ["start end", "end start"],
              });
              const imageParallax = useTransform(cardScroll, [0, 1], ["-10px", "10px"]);

              return (
                <motion.div
                  key={card}
                  ref={cardRef}
                  variants={fadeIn}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="p-6 bg-white rounded-xl shadow-lg space-y-4 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  variants={hoverLift}
                  role="region"
                  aria-labelledby={`strength-title-${card}`}
                >
                  <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Expertise
                  </p>
                  <h4 id={`strength-title-${card}`} className="text-lg md:text-xl font-bold text-gray-900">
                    Proven technical mastery across engineering domains
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Deep technical knowledge and hands-on experience.
                  </p>

                  {/* Parallax Image */}
                  <motion.div
                    style={{ y: imageParallax }}
                    className="h-24 w-full bg-gray-200 rounded-md flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-500">Image</span>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                    <Button text="Learn" ariaLabel="Learn more about this strength" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Other sections (Journey, Partners, CTA, Team, Contact, Footer) remain the same */}

      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage;
