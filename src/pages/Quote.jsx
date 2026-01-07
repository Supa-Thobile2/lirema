<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import img from '../images/electric1.jpg';
import { Button } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React from 'react'
import img from '../images/mariola-grobelska-TFFanH3SYjM-unsplash.jpg'
import { Button } from '../components'
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)

function Quote() {
  const [open, setOpen] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  return (
<<<<<<< HEAD
    <section
      className="relative overflow-hidden px-6 py-16 md:py-24 md:px-20 flex flex-col md:flex-row items-center gap-12"
      id="quote"
      aria-labelledby="quote-heading"
    >
      {/* Decorative background shapes */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-12 w-32 h-32 bg-purple-200 rounded-full opacity-20 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 -z-10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <motion.div
        className="flex-1 space-y-8 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="space-y-4">
          <h1
            id="quote-heading"
            className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900"
          >
            Ready to build your future
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Connect with our expert engineering team to transform complex technical
            challenges into innovative, scalable solutions.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button text="Get a Quote" onClick={() => setOpen(true)} />
          <Button text="Consult" variant="secondary" />
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex-1 max-w-lg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={img}
          alt="Engineering and electrical services"
          className="w-full h-auto rounded-xl object-cover"
        />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white w-full max-w-lg rounded-2xl p-6 md:p-8 space-y-6"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="space-y-2">
                <h2
                  id="modal-title"
                  className="text-xl font-semibold text-gray-900"
                >
                  Request a Service
                </h2>
                <p className="text-sm text-gray-600">
                  Tell us about your project and we’ll get back to you.
                </p>
              </header>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Required Service
                  </label>
                  <select
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    <option>Electrical Installation</option>
                    <option>Engineering Consulting</option>
                    <option>Maintenance & Repair</option>
                    <option>Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Project Details
                  </label>
                  <textarea
                    rows="4"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-700"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
=======
    <div className='block p-4 space-y-8 md:flex items-center justify-center md:p-18'>
        <div className='space-y-12 p-4 md:p-8'>
          <div className='space-y-2'>
            <h1 className='text-[1.5rem] font-bold font-600'>Ready to build your future</h1>
            <p className='text-[.6rem] font-medium font-200'>Connect with our expert engineering team to transform your complex technical challenges into innovative solutions</p>
           </div>
            <div className='flex items-center gap-6 w-full'>
               <Button text='Quote'/>
               <Button text='Consult'/>
            </div>
        </div>
        <div>
            <img src={img} alt='' className='h-full block object-fit'/>

        </div>

    </div>
  )
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
}

export default Quote