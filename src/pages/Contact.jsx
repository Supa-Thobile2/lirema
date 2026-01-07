<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const closeBtnRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const container = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Focus the Close button when popup appears
  useEffect(() => {
    if (showPopup && closeBtnRef.current) {
      closeBtnRef.current.focus({ preventScroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showPopup]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <motion.section
        aria-labelledby="contact-heading"
        className="py-16 px-4 md:px-12 mt-14 space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeUp} className="text-sm font-medium text-gray-500 uppercase">
          Connect
        </motion.p>
        <motion.h1
          id="contact-heading"
          variants={fadeUp}
          className="text-2xl md:text-4xl font-bold leading-snug"
        >
          Contact Li Rema Engineering and Construction
        </motion.h1>
        <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-700 max-w-xl">
          Reach out to our expert team for comprehensive engineering and construction
          solutions tailored to your project goals.
        </motion.p>

        {/* Quick Actions */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4" role="group" aria-label="Quick contact actions">
          <Button text="Email" ariaLabel="Send email to Li Rema Engineering" />
          <Button text="Call" ariaLabel="Call Li Rema Engineering" />
          <Button text="WhatsApp" ariaLabel="Chat with Li Rema Engineering on WhatsApp" />
        </motion.div>
      </motion.section>

      {/* CONTACT DETAILS + FORM */}
      <motion.section
        id="contact"
        className="py-16 px-4 md:px-12 bg-gray-50 space-y-12 md:space-y-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12" variants={container}>
          {/* CONTACT CARDS */}
          <motion.div className="flex flex-col gap-6" role="region" aria-labelledby="contact-cards-heading">
            <h2 id="contact-cards-heading" className="sr-only">Contact Information</h2>
            {[
              { icon: FaRegEnvelopeOpen, color: "text-blue-600", title: "Email", text: "info@liremaeng.com" },
              { icon: FaPhoneAlt, color: "text-green-600", title: "Phone", text: "+27 123 456 789" },
              { icon: FaAddressCard, color: "text-yellow-600", title: "Address", text: "Norkem Park North, Gauteng, South Africa" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer"
                  style={{ rotateX, rotateY }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    x.set(e.clientX - rect.left - rect.width / 2);
                    y.set(e.clientY - rect.top - rect.height / 2);
                  }}
                  onMouseLeave={() => { x.set(0); y.set(0); }}
                  whileHover={{ scale: 1.05 }}
                  variants={fadeUp}
                >
                  <motion.div
                    className={`${item.color} text-2xl`}
                    whileHover={{ scale: 1.2, color: "#2563EB" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    aria-hidden="true"
                  >
                    <IconComponent />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeUp}
            aria-labelledby="contact-form-heading"
            onSubmit={handleSubmit}
          >
            <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Describe your project in detail"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <fieldset className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="accent-blue-600" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions
              </label>
            </fieldset>

            <Button text="Submit" ariaLabel="Submit contact form" />
          </motion.form>
        </motion.div>
      </motion.section>

      {/* POPUP THANK YOU MESSAGE */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-lg space-y-4"
            >
              <h2 className="text-xl font-bold">Thank You, {formData.name || "User"}!</h2>
              <p>Your message has been sent:</p>
              <blockquote className="italic text-gray-600">"{formData.message}"</blockquote>
              <p>A member of our team will contact you shortly.</p>
              <Button
                text="Close"
                ariaLabel="Close popup"
                onClick={() => setShowPopup(false)}
                ref={closeBtnRef}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default ContactPage;
=======
import React from 'react'
import img from '../assets/keyGuy.png'
import { FaMailchimp } from 'react-icons/fa6'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button } from '../components'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col p-8 md:p-16 space-y-8 md:space-y-6' id='contact'>
        <div className='space-y-2 text-center'>
        <h6 className='text-[1.5rem] font-bond font-700'>Contact</h6>
        <p className='text-[.6rem] font-light font-200'> We're ready to discuss your engineering construction needs</p>
        </div>
        <div className='block w-full  md:flex items-center justify-between space-y-4'>
            <div className='space-y-4 w-full mx-auto '>
                
                <div className='space-y-2'>
                    <FaRegEnvelopeOpen/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries:litabaletsatsi@gmail.com</p>
                </div>
                <div className='space-y-2'>
                    <FaPhoneAlt/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries: 074 089 6568</p>
                </div>
                <div className='space-y-2'>
                    <FaAddressCard/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries:No. # Lorna Street, Birchleigh North, Kempton Park</p>
                </div>
            </div>
            <div className='w-full mx-auto '>
                <form className='w-full  space-y-2  mx-auto'>
                    <div className=' '>
                        <input type="email" name="email" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    <div className=' '>
                        <input type="text" name="name" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    <div className=' '>
                        <input type="text" name="message" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    
                        <Button text='Submit'/>
                    
                </form>
            </div>
        </div>


    </div>
  )
}

export default Contact
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
