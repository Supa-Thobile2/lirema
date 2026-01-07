<<<<<<< HEAD
import React, { useRef } from "react";
import { Button, Header } from "../components";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPage() {
  const heroRef = useRef(null);

  // Hero parallax
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroParallax = useTransform(heroScroll, [0, 1], ["-20px", "20px"]);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
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

=======
import React from 'react'
import { Button, Header } from '../components'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'


function AboutPage() {
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
  return (
    <div>

<<<<<<< HEAD
      {/* HERO-LIKE TOP SECTION WITH PARALLAX HEADING */}
      <section
        ref={heroRef}
        className="py-24 px-6 md:px-12 text-center bg-gradient-to-r from-blue-50 to-white"
        aria-labelledby="about-title"
      >
        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wide"
          >
            Our Story
          </motion.p>

          <motion.h1
            id="about-title"
            variants={fadeUp}
            style={{ y: heroParallax }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-gray-900"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-700"
          >
            Building engineering solutions that transform infrastructure with precision, innovation, and reliability.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Learn" ariaLabel="Learn more about us" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Button text="Contact" ariaLabel="Contact our team" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* STRENGTHS SECTION */}
      <section className="px-6 py-16 md:px-12 max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-sm md:text-base font-medium text-blue-600 uppercase tracking-wide">
            Our Strengths
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why choose Li Rema?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-700">
            Comprehensive engineering solutions for complex challenges delivered with expertise and precision.
          </motion.p>

          {/* Strength Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-6">
            {[1, 2, 3].map((card) => {
              const cardRef = useRef(null);
              const { scrollYProgress: cardScroll } = useScroll({
                target: cardRef,
                offset: ["start end", "end start"],
              });
              const imageParallax = useTransform(cardScroll, [0, 1], ["-10px", "10px"]);

              return (
                <motion.div
                  key={card}
                  ref={cardRef}
                  variants={fadeIn}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="p-6 bg-white rounded-xl shadow-lg space-y-4 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  variants={hoverLift}
                  role="region"
                  aria-labelledby={`strength-title-${card}`}
                >
                  <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Expertise
                  </p>
                  <h4 id={`strength-title-${card}`} className="text-lg md:text-xl font-bold text-gray-900">
                    Proven technical mastery across engineering domains
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Deep technical knowledge and hands-on experience.
                  </p>

                  {/* Parallax Image */}
                  <motion.div
                    style={{ y: imageParallax }}
                    className="h-24 w-full bg-gray-200 rounded-md flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-500">Image</span>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                    <Button text="Learn" ariaLabel="Learn more about this strength" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Other sections (Journey, Partners, CTA, Team, Contact, Footer) remain the same */}

      <Team />
      <Contact />
      <Footer />
=======
        <Header/>
        <div className=' px-8 py-20 mt-14 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>

            <p className='p-4  text-[.6rem] font-bold'>Our Story</p>
            <div className='space-y-2'>
            <h1 className='text-[1.5rem] font-bold fomt-700 md:text-8xl lg:text-4xl'>About Us</h1>
            <p className='text-[.6rem] md:text-lg xl:text-lg'>Building engineering solutions that transform infrastructure.</p>
           </div>
           
            <div className='flex items-center gap-4'>
                <div>
                   <Button text='Learn'/>
                </div>
                 <div>
                   <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className=' px-8 py-20 space-y-2'>
            <p className='text-[.6rem] font-light font-200'>Our Mission</p>
            <h1 className='text-[1.5rem] font-bold font-700'>Engineering excellence through innovation and precision</h1>
            <p className='text-[.6rem] font-light font-200'>Li Rema Engineering and construction stands as pioneering force in technical solutions. We deliver comprehensive engineering services that merge technical expertise with strategic vision.</p>
            {/* image */}

        </div>
        <div className=' p-8 space-y-2 '>
            <p className='text-[.6rem] font-light font-200'>Our Strenghts</p>
            <h1 className='text-[1.6rem] font-bold font-700'>Why choose Li Rema?</h1>
            <p className='text-[.6rem] font-light font-200'>Comprehensive engineering solutions for complex challenges.</p>
            <div className='block space-y-2 md:flex items-center'>
            <div className='block space-y-2 p-4 md:flex items-center border border-lightgray'>
                <div className=' '>
                    <div className='space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-sm font-light font-200'>Deep technical knowledge </p>
                    </div>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>
             <div className='block  p-4 md:flex items-center border border-lightgray'>
                <div className=' space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1.2rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-[.6rem] font-light font-200'>Deep technical knowledge </p>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>
             <div className='block p-4 md:flex items-center border border-lightgray'>
                <div className=' space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1.2rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-[.6rem] font-light font-200'>Deep technical knowledge </p>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>


        </div>
        </div>
        
        
        <div className=' p-8 space-y-2'>
            <p className='text-[.6rem] font-light font-200'>Our Journey</p>
            <h3 className='text-[1.5rem] font-bold font-700'>
                Milestones of engineering excellence
            </h3>
            <p className='text-[.6rem] font-light font-200'>A story of continuous growth and technical advancement through strategic development and innovative solutions.</p>
            <div className='flex items-center w-full gap-4 '>
                <Button text='View History'/>
                <Button text='Learn'/>
            </div>
            {/* history links */}
        </div>
        <div  className=' p-8 space-y-2'>
            <div className='space-y-2'>
                <h3 className='text-[1.5rem] font-bold font-700'>Our trusted partners</h3>
                <p className='text-[.6rem] font-light font-200'>Collaborative networks driving technological innovation and excellence.</p>
                <div className='flex items-center justify-between gap-4'>
                    <Button text='View Partner'/>
                   <Button text='Learn'/>

                </div>
            </div>
            <div>image</div>
        </div>
              <div  className=' p-8 space-y-2'>
            
                <h3 className='text-[1.5rem] font-bold font-700'>Ready to build your next project?</h3>
                <p className='text-[.6rem] font-light font-200'>Connect with our expert team to discuss your next engineering and construction needs.</p>
                <div className='flex items-center justify-between gap-4'>
                    <Button text='Contact'/>
                    <Button text='Request quote'/>

                </div>
            
            
        </div>
        <Team/>
        <Contact/>
        <Footer/>

        
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
    </div>
  )
}

export default AboutPage