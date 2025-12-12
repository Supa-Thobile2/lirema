import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/keyGuy.png';

const teamMembers = [
  {
    name: 'Litaba Letsatsi',
    role: 'Chief Technician',
    description: 'Visionary leader with decades of experience in engineering and management',
    image: img,
  },
  {
    name: 'Tshego Leshilo',
    role: 'Accounts',
    description: 'Expert in finance management for engineering projects',
    image: img,
  },
  {
    name: 'Sphesihle Mntambo',
    role: 'Technician',
    description: 'Skilled technician delivering precise engineering solutions',
    image: img,
  },
  {
    name: 'Lethabo Mohato',
    role: 'Technician',
    description: 'Dedicated professional with hands-on technical expertise',
    image: img,
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

  return (
    <div
      id="team"
      className="relative overflow-hidden block w-full mx-auto p-6 md:p-18 space-y-8 text-center"
    >
      {/* Floating background shapes with parallax */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -z-10"
        animate={{
          x: mousePos.x * 30, // horizontal movement
          y: mousePos.y * 30, // vertical movement
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 -z-10"
        animate={{
          x: mousePos.x * -20,
          y: mousePos.y * -20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />

      <div className="space-y-2 z-10">
        <h6 className="text-[.65rem] font-bold tracking-widest">Team</h6>
        <h1 className="text-[1.5rem] md:text-[2rem] font-bold">Our Team</h1>
        <p className="text-[.65rem] md:text-[.8rem] font-medium text-gray-700">
          Experienced professionals driving technical innovation
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h4 className="text-[1rem] font-bold">{member.name}</h4>
            <p className="text-[.65rem] font-semibold text-gray-600">{member.role}</p>
            <p className="text-[.6rem] font-light text-gray-500 mt-2">{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Team;
