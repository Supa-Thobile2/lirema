<<<<<<< HEAD
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
=======
import React from 'react'
import Img from '../assets/pac-logo.jpg'
import { FaFan, FaHammer, FaThermometer, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { servicesData } from '../data/Data'
import { ServicesCard } from '../components'


function Services() {
  return (
    <div className='   p-4 space-y-8 block w-full md:flex items-center justify-center  flex-col md:p-16 md:space-y-8 xl:p-16 ' id='services'>
        <p className='text-[.6rem] font-semibold font-300 '>Services</p>
        <div className='space-y-2'>
        <h1 className='text-[1.5rem] font-bold font-700'>Comprehensive technical solutions</h1>
       
       
        <p className='text-[.6rem] font-medium font-500'>Integrated engineering services for complex industrial and residential projects</p>
        </div>
       <div className='block   shadow-lg space-y-2  md:flex items-center justify-center gap-4 md:gap-8'>
        {servicesData.map((item, index)=>{
            return <ServicesCard
            heading ={item.heading}
        subtext= {item.sxt}
        description= {item.description}
        btnText={item.btnText}
            
            />

        })}
        
</div>
     
    </div>
  )
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
}

export default Services