import React from 'react';
import { servicesData } from '../data/Data';
import { ServicesCard } from '../components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-6 py-20 md:px-20 bg-gray-50"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-4 mb-16"
      >
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Services
        </p>

        <h2
          id="services-heading"
          className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Comprehensive technical solutions
        </h2>

        <p className="text-base text-gray-600 leading-relaxed">
          Integrated engineering services designed for complex industrial and
          residential construction projects.
        </p>
      </motion.header>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {servicesData.map((item, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            className="relative group"
          >
            {/* Click-through overlay */}
            <Link
              to={item.slug}
              aria-label={`View service: ${item.heading}`}
              className="absolute inset-0 z-10"
            />

            <ServicesCard
              heading={item.heading}
              subtext={item.subtext}
              description={item.description}
              btnText={item.btnText}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
