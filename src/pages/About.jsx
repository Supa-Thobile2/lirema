import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../images/powerlines.jpg";
import { Button } from "../components";

function About() {
  const [modalContent, setModalContent] = useState(null); // null | 'story' | 'quote'
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  // --- ANIMATION VARIANTS ---
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  const modalOverlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContentAnim = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Our team will contact you soon.");
    setFormData({ name: "", email: "", project: "" });
    setModalContent(null);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-6 md:px-16 bg-gray-50"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* LEFT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp} className="text-sm md:text-base font-semibold tracking-wide text-gray-700">
            About
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3">
            <h2
              id="about-heading"
              className="text-2xl md:text-4xl font-bold leading-snug text-gray-900"
            >
              Transforming engineering challenges into innovative solutions
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Li Rema Engineering and Construction delivers comprehensive technical
              services with unmatched precision. We combine engineering expertise
              with strategic innovation to solve complex projects efficiently and
              effectively.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-4" aria-label="Sample engineering projects">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={img}
                alt={`Engineering project sample ${i + 1}`}
                className="w-12 h-12 object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
              />
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-4 pt-6" role="group" aria-label="About section actions">
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Our Story" ariaLabel="Learn more about our story" onClick={() => setModalContent("story")} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Get Quote" ariaLabel="Request a project quote" onClick={() => setModalContent("quote")} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
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
            className="rounded-xl shadow-lg w-full max-h-[450px] object-cover"
            style={{ willChange: "transform" }}
            animate={{ y: [-15, 15] }}
            transition={{ repeat: Infinity, duration: 8, repeatType: "mirror", ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setModalContent(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8 relative"
              variants={modalContentAnim}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setModalContent(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {modalContent === "story" && (
                <>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Our Story</h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Li Rema Engineering and Construction was founded with a vision
                    to deliver innovative engineering solutions that drive progress.
                    Our team of experts ensures excellence in every project we undertake.
                  </p>
                </>
              )}

              {modalContent === "quote" && (
                <>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Request a Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                        Project Details
                      </label>
                      <textarea
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
                    >
                      Submit
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
