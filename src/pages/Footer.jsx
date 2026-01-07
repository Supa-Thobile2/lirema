<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { motion } from "framer-motion";
import { FaHome, FaTools, FaInfoCircle, FaEnvelope, FaUsers } from "react-icons/fa";

function Footer() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  const linkHover = { scale: 1.05, color: "#1e40af" };

  const footerLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/services", label: "Services", icon: <FaTools /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/contacts", label: "Contact", icon: <FaEnvelope /> },
    { to: "#team", label: "Our Team", icon: <FaUsers /> },
  ];

  return (
    <footer className="relative overflow-hidden w-full px-6 py-20 md:py-24 bg-gray-50">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-blue-200 to-purple-100"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

function Footer() {
  return (
    <div className='w-full p-8 '>
    
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)


<<<<<<< HEAD
      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto space-y-8 text-center md:text-left relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">
          Li Rema Engineering & Construction
        </motion.h2>

        <motion.ul
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 space-y-2 md:space-y-0"
        >
          {footerLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={linkHover}
              className="flex items-center gap-2 text-lg cursor-pointer transition-colors duration-300"
            >
              <Link to={item.to} className="flex items-center gap-2">
                <motion.span
                  animate={{
                    y: [0, -4, 0], // Subtle vertical movement
                  }}
                  transition={{
                    duration: 3 + index * 0.5, // Slightly different speed per icon
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.span>
                {item.label}
              </Link>
            </motion.li>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text="Login" ariaLabel="Login to your account" />
          </motion.div>
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-between text-gray-600 mt-6 gap-4 md:gap-0"
        >
          <p className="text-sm">
            © 2025 <strong>Li Rema Construction</strong>. All Rights Reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <p className="text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </p>
            <p className="text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Terms of Service
            </p>
=======
        <div className=' space-y-4 w-full'>
          <h1 className='text-[1rem] font-bold font-700'>Li Rema Engineering & Construction</h1>
          <div className='space-y-2'>
            <ul className='space-y-8 w-full mx-auto flex items-center justify-center flex-col  space-y-2'>
                            <Link to='/'> <li className='text-[1rem] rounded-[12px]'>Home</li></Link>
                            
                                               <Link to='/services'> <li className='text-[1rem] rounded-[12px]'>Services</li></Link>
                                                                  <Link to='/about'> <li className='text-[1rem] rounded-[12px]'>About</li></Link>
                                                                                     <Link to='/contacts'> <li className='text-[1rem] rounded-[12px]'>Contact Us</li></Link>
                                                                                                        <Link to='#team'> <li className='text-[1rem] rounded-[12px]'>Our Team</li></Link>
                             
                                 <Button text='login'/>
                                 
                         </ul>

>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
          </div>

          <div className='block space-y-2 md:flex items-center justify-between'>
            <div>
              <p className='text-[.7rem] font-light font-700'> 2025 <strong>LiRema Construction</strong> All Rights Reserved.</p>
            </div>
            <div className='block md:flex items-center justify-between space-y-2'>
              <p  className='text-[1rem] font-light font-700'>Privacy Policy</p>
              <p  className='text-[1rem] font-light font-700'>Terms Of Service</p>
              {/* <p>Cookie setting</p> */}
            </div>
          </div>

        </div>



     



        
    </div>
  )
}

export default Footer