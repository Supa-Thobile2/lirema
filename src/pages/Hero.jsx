<<<<<<< HEAD
import React from "react";
import img from "../images/tech2.jpg";
import { Button } from "../components";
import { FaCompass, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut", delay: 1 } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 py-16 px-6 md:px-16"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 mt-10">

        {/* TEXT SECTION */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h1
            id="hero-heading"
            variants={textVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-gray-900"
          >
            Engineering Solutions That Build Tomorrow
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-sm md:text-base text-gray-700 max-w-lg"
          >
            <strong>Li Rema Construction</strong> delivers comprehensive engineering
            and construction services with precision and expertise. We transform
            complex challenges into seamless technical solutions.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
            role="group"
            aria-label="Primary actions"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Learn More"
                icon={<FaCompass aria-hidden="true" />}
                ariaLabel="Explore our services"
                onClick={() => navigate("/services")}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Call"
                icon={<FaPhone aria-hidden="true" />}
                ariaLabel="Call us"
                onClick={() => (window.location.href = "tel:0917658900")}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION WITH PARALLAX */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={img}
            alt="Construction engineering technology"
            className="object-cover w-full max-h-[400px] md:max-h-full rounded-lg shadow-lg"
            style={{ willChange: "transform" }}
            whileInView={{
              y: [-20, 20], // subtle parallax
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
=======
import React, {useState} from 'react'
import img from '../images/mostafa-mahmoudi-47jO5Y8nsYo-unsplash.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../components'

function Hero() {
  // const [deals, setDeals] = useState('')
  // const handleButton = () =>{
  //     console.log('button clicked')
  
  
  // }
  return (

    <div className='block p-2 md:flex  md:p-18 mt-8 md:mt-14 ' id='home'>
    <div className='w-full mx-auto space-y-6  md:w-1/2  p-8 md:p-18 xl:p-20 md:space-y-16 lg:p-16 lg:space-y-18 text-center  flex items-center justify-center flex-col  mx-auto'>
       <div className='space-y-2'>
        <div className='space-y-2'>
        <h1 className='text-[1.4rem]
         font-bold font-900'>Engineering Solutions that build tomorrow</h1>
        <p className=' text-[.65rem] text-tracking-wider md:text-center text-sm font- font-400'><strong>Li Rema construction </strong> 
        delivers comprehensive engineering and construction services with precision and expertise. We transform complex challenges into seamless technical solutions.</p>
       
       </div>
        </div> 
        
        <div className='w-full mx-auto flex items-center justify-center gap-8'>
          <div>
           <Button text='Explore'/>
           </div>
           <div>
           <Button text ='Contact'/>
            </div>

        </div>
       
    </div>

    <div className=' flex items-center justify-center flex-col p- md:w-1/2 '>
      <img src={img} alt='' className='object-fit block  md:h-full'/>


    </div>
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)


    </div>
  )
}

export default Hero