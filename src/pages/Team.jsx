import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/keyGuy.png';

const teamMembers = [
  {
    name: 'Litaba Letsatsi',
    role: 'Chief Technician',
    description: 'Visionary leader with decades of experience in engineering and management',
    image: img,
    slug: '/team/litaba-letsatsi',
  },
  {
    name: 'Tshego Leshilo',
    role: 'Accounts',
    description: 'Expert in finance management for engineering projects',
    image: img,
    slug: '/team/tshego-leshilo',
  },
  {
    name: 'Sphesihle Mntambo',
    role: 'Technician',
    description: 'Skilled technician delivering precise engineering solutions',
    image: img,
    slug: '/team/sphesihle-mntambo',
  },
  {
    name: 'Lethabo Mohato',
    role: 'Technician',
    description: 'Dedicated professional with hands-on technical expertise',
    image: img,
    slug: '/team/lethabo-mohato',
  },
];

function Team() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative overflow-hidden px-6 py-20 md:px-20 bg-gray-50"
    >
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -z-10"
        animate={{ x: mousePos.x * 30, y: mousePos.y * 30 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 -z-10"
        animate={{ x: mousePos.x * -20, y: mousePos.y * -20 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />

      {/* Section Header */}
      <motion.header
        className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Team
        </p>
        <h2
          id="team-heading"
          className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Our Team
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Experienced professionals driving technical innovation
        </p>
      </motion.header>

      {/* Team Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {teamMembers.map((member, idx) => (
          <motion.article
            key={idx}
            className="relative group bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transform transition-all duration-300"
            variants={cardVariants}
          >
            {/* Click-through overlay */}
            <Link
              to={member.slug}
              aria-label={`View profile of ${member.name}`}
              className="absolute inset-0 z-10"
            />

            {/* Image with subtle zoom */}
            <div className="relative overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 mx-auto mb-4">
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-20 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm md:text-base font-medium text-gray-600">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 mt-2">{member.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Team;
