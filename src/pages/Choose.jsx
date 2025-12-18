import React, { useRef } from "react";
import img from "../images/tech.webp";
import { Button } from "../components";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Choose() {
  const imageRef = useRef(null);
  const headerRef = useRef(null);

  // Parallax effect for image
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxYImage = useTransform(imageScroll, [0, 1], ["-40px", "40px"]);

  // Parallax effect for header text
  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });
  const parallaxYHeader = useTransform(headerScroll, [0, 1], ["0px", "-20px"]);

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
    <section
      className="px-6 py-20 md:px-12 max-w-7xl mx-auto space-y-16"
      aria-labelledby="choose-title"
    >
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        style={{ y: parallaxYHeader }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-4 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wide"
        >
          Why Choose Us
        </motion.p>

        <motion.h1
          id="choose-title"
          variants={fadeUp}
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900 transition-colors duration-300 cursor-default hover:text-blue-600"
        >
          Unparalleled Engineering Excellence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto"
        >
          Delivering integrated solutions across multiple technical domains with precision, innovation, and reliability.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Left Column - Two Stacked Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <motion.div
          
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="p-6 border rounded-xl shadow-lg space-y-4 bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            role="region"
            aria-labelledby="tech-expertise-title"
            
          >
            <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-default">
              Technical Expertise
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Highly skilled engineers with deep technical knowledge across multiple domains.
            </p>

            <motion.div
              whileHover={{ x: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Button text="Explore Capabilities" ariaLabel="Explore our technical capabilities" />
              <FaArrowRight className="text-blue-600" aria-hidden="true" />
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="p-6 border rounded-xl shadow-lg space-y-4 bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            role="region"
            aria-labelledby="quality-assurance-title"
           
          >
            <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-default">
              Quality Assurance
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Rigorous testing and validation processes to ensure reliable performance.
            </p>

            <motion.div
              whileHover={{ x: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Button text="Explore Capabilities" ariaLabel="Explore our quality assurance processes" />
              <FaArrowRight className="text-blue-600" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Image + Text Card */}
        <motion.div
          variants={fadeUp}
          className="border rounded-xl overflow-hidden bg-white flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Text */}
          <motion.div
            className="flex flex-col justify-center p-6 space-y-3 md:w-1/2"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={hoverLift}
          >
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide transition-colors duration-300 hover:text-blue-800">
              Innovation
            </p>

            <h2 className="text-lg md:text-xl font-bold leading-snug text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-default">
              Cutting-edge technological solutions for complex challenges
            </h2>

            <p className="text-sm md:text-base text-gray-600">
              Advanced problem-solving approaches delivering impactful results that drive business and infrastructure success.
            </p>

            <motion.div
              whileHover={{ x: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mt-2"
            >
              <Button text="Learn More" ariaLabel="Learn more about our innovation" />
              <FaArrowRight className="text-blue-600" aria-hidden="true" />
            </motion.div>
          </motion.div>

          {/* Parallax Image */}
          <motion.div
            ref={imageRef}
            style={{ y: parallaxYImage }}
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
