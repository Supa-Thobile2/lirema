<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { FaAddressCard, FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { Button, Header } from "../components";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const modalRef = useRef(null);

  // --- ANIMATION VARIANTS ---
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const parallaxAnim = {
    animate: {
      y: [0, -5, 0],
      transition: { repeat: Infinity, repeatType: "mirror", duration: 6, ease: "easeInOut" },
    },
  };

  const contactMethods = [
    { icon: <FaRegEnvelopeOpen />, title: "Email", text: "info@liremaeng.com", color: "#2563EB" },
    { icon: <FaPhoneAlt />, title: "Phone", text: "+27 123 456 789", color: "#16A34A" },
    { icon: <FaAddressCard />, title: "Address", text: "Norkem Park North, Gauteng, South Africa", color: "#FBBF24" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setSubmitted(true);
  };

  // --- Accessibility: trap focus inside modal ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowPopup(false);

      if (e.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    if (showPopup) document.addEventListener("keydown", handleKeyDown);
    else document.removeEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showPopup]);

=======
import React from 'react'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button, Header } from '../components'
import Footer from './Footer'

function ContactPage() {
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
  return (
    <>
    <Header/>
    <div className='p-8 mt-14 space-y-16 '>
        <p className='text-[.6rem] font-regular font-400'>Connect</p>
        <div className='space-y-4'>
        <h1 className='text-[1.5rem] font-bold font-200'>Contact Li Rema Engineering and Construction</h1>
        <p className='text-[.6rem] font-semibold font-100'>Reach out to our expert team for comprehensive engineering and construction solution towards your project goal</p>
       </div>
       
        <div className='flex items-center gap-4'>
            <Button text='Email'/>
            <Button text='Call'/>
            <Button text='Whatsapp'/>
        </div>
    </div>
     
        <div className='w-full flex items-center justify-center flex-col p-8 space-y-16 md:p-16  md:space-y-6' id='contact'>
        <p className='text-[.6rem] font-light font-200'>Connect</p>
         <h6 className='text-[1.5rem] font-bond font-700'>Contact Us</h6>
         <p className='text-[.6rem] font-light font-200'> Tess us about your engineering and construction project.</p>
         <div className='block w-full  md:flex items-center justify-between space-y-4'>
             <div className='space-y-4 w-full mx-auto '>
                 
                 <div className='space-y-2'>
                     <FaRegEnvelopeOpen/>
                     <p>General Inqueries:</p>
                 </div>
                 <div className='space-y-2'>
                     <FaPhoneAlt/>
                     <p>General Inqueries:</p>
                 </div>
                 <div className='space-y-2'>
                     <FaAddressCard/>
                     <p>General Inqueries:</p>
                 </div>
             </div>
             <div className='w-full mx-auto  space-y-4'>
                 <form className='w-full  p-8 space-y-2  mx-auto'>
                     <div className=' '>
                         <input type="email" name="email" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     <div className=' '>
                         <input type="text" name="name" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     <div className=' '>
                         <input type="text" name="message" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     
                         <Button text='Submit'/>
                     
                 </form>
                 <div className='  space-y-4'>
                 <p>Tell us more about you?</p>
                 <div className=' space-y-2'>

<<<<<<< HEAD
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
            {contactMethods.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                animate={parallaxAnim.animate}
                className="flex items-center gap-4 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, color: item.color }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-2xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeUp}
            aria-labelledby="contact-form-heading"
            onSubmit={handleSubmit}
          >
            <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>

            <motion.input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
              variants={fadeUp}
            />

            <motion.input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
              variants={fadeUp}
            />

            <motion.input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
              variants={fadeUp}
            />

            <motion.textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Describe your project in detail"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
              variants={fadeUp}
            />
=======
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <div>

                 <textarea className='border w-full' name="tes" id="" cols="30" rows="10" placeholder='Describe your project in detail'></textarea><br/><br/>
                 <div className="flex">
                 <input type="checkbox" name="clent" id="client" />
                   <label htmlFor="client">I agree to the terms and conditions</label>
                 
                 </div>
                 <Button text='Submit'/>

                 </div>
                 </div>
                 </div>
               
             </div>
             <div className='p-8  space-y-4'>
             <p className='text-[.6rem] font-light font-300'>Gauteng</p>
             <h3 className='text-[1.6rem] font-bold font-700'>Norkem Park North</h3>
             <p className='text-[.6rem] font-light font-300'>Find us where engineering meets innovation</p>
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)



<<<<<<< HEAD
      {/* POPUP MODAL */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold">Message Received!</h2>
              <p className="text-gray-700">Thank you, <strong>{formData.name}</strong>!</p>
              <p className="text-gray-600">We received your message:</p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">{formData.message}</blockquote>
              <Button text="Close" ariaLabel="Close popup" onClick={() => setShowPopup(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THANK YOU SECTION */}
      {submitted && !showPopup && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 px-4 md:px-12 bg-blue-50 text-center rounded-lg my-8"
        >
          <h2 className="text-2xl font-bold mb-2">Thank you for contacting Li Rema Construction!</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Our team will review your message and get back to you shortly.
          </p>
        </motion.section>
      )}

      <Footer />
    </>
  );
}

export default ContactPage;
=======
             </div>
         </div>
 
 
     </div>
     <Footer/>
     </>
   )
}

export default ContactPage
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
