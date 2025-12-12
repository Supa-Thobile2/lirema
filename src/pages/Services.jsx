import React from 'react';
import { servicesData } from '../data/Data';
import { ServicesCard } from '../components';
import { motion } from 'framer-motion';

function Services() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child by 0.2s
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div
      className="p-4 space-y-8 block w-full md:flex items-center justify-center flex-col md:p-16 md:space-y-8 xl:p-16"
      id="services"
    >
      <p className="text-[.6rem] font-semibold font-300">Services</p>
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-[1.5rem] font-bold font-700">
          Comprehensive technical solutions
        </h1>
        <p className="text-[.6rem] font-medium font-500">
          Integrated engineering services for complex industrial and residential projects
        </p>
      </div>

      <motion.div
        className="block shadow-lg space-y-4 md:flex items-center justify-center gap-4 md:gap-8 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((item, index) => (
          <motion.div key={index} variants={cardVariants} className="w-full md:w-auto">
            <ServicesCard
              heading={item.heading}
              subtext={item.sxt}
              description={item.description}
              btnText={item.btnText}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
