import React from 'react';
import { motion } from 'framer-motion';
import { Button, Header } from '../components';
import Contact from './Contact';
import Footer from './Footer';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function HvacPage() {
  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="text-center md:text-left px-6 md:px-20 pt-16 md:pt-24 space-y-6 md:space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p variants={fadeUpVariant} className="text-sm md:text-base font-semibold text-purple-700 uppercase tracking-wide">
          Comfort
        </motion.p>
        <motion.h1 variants={fadeUpVariant} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Precision HVAC Solutions
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 leading-relaxed">
          Engineered climate control systems designed to optimize comfort and efficiency
          for residential and commercial spaces with expert technical precision.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <Button text="Explore" />
          <Button text="Contact" />
        </motion.div>
      </motion.section>

      {/* Installation Section */}
      <motion.section
        className="px-6 md:px-20 mt-16 space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariant} className="space-y-6">
          <h6 className="text-sm md:text-base font-medium text-gray-500 uppercase">Install</h6>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Professional HVAC Installation for Optimal Comfort</h2>
          <p className="text-gray-700">
            We design and implement precise HVAC systems tailored to your specific environmental needs.
            Our technicians ensure seamless integration and maximize efficiency for every space.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Custom system matching your unique requirements</li>
            <li>Energy-efficient solutions that reduce operational costs</li>
            <li>Advanced technology for precise temperature control</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button text="Consult" />
            <Button text="Details" />
          </div>
        </motion.div>

        {/* Placeholder for Installation Image */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center text-gray-400 font-semibold text-lg shadow-lg"
        >
          Image Placeholder
        </motion.div>
      </motion.section>

      {/* Maintenance Section */}
      <motion.section
        className="px-6 md:px-20 mt-16 space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariant} className="space-y-6">
          <p className="text-sm md:text-base font-semibold text-purple-700 uppercase">Maintain</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Comprehensive HVAC Maintenance for Long-Term Performance</h2>
          <p className="text-gray-700">
            Regular maintenance prevents unexpected breakdowns and extends system lifespans. Our skilled technicians provide thorough inspections and proactive servicing.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Scheduled preventative maintenance programs</li>
            <li>Detailed diagnostics and performance tracking</li>
            <li>Quick responses and expert technical advice</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button text="Schedule" />
            <Button text="Learn" />
          </div>
        </motion.div>

        {/* Placeholder for Maintenance Image */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center text-gray-400 font-semibold text-lg shadow-lg"
        >
          Image Placeholder
        </motion.div>
      </motion.section>

      {/* Repair Section */}
      <motion.section
        className="px-6 md:px-20 mt-16 space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariant} className="space-y-6">
          <p className="text-sm md:text-base font-semibold text-purple-700 uppercase">Repair</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Swift HVAC Repair Services</h2>
          <p className="text-gray-700">
            Rapid diagnostics and precise repair solutions for all HVAC systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button text="Repair" />
            <Button text="Contact" />
          </div>
        </motion.div>

        {/* Placeholder for Repair Image */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center text-gray-400 font-semibold text-lg shadow-lg"
        >
          Image Placeholder
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="px-6 md:px-20 mt-16 text-center space-y-6 md:space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        <h2 className="text-xl md:text-3xl font-bold text-gray-900">
          Ready to optimize your climate control?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Get expert HVAC solutions designed for your specific needs and environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Button text="Quote" />
          <Button text="Contact" />
        </div>
      </motion.section>

      {/* Contact & Footer */}
      <Contact />
      <Footer />
    </div>
  );
}

export default HvacPage;
