import React from 'react';
import img from '../images/electric1.jpg';
import { Button } from '../components';
import { motion } from 'framer-motion';

function Quote() {
  return (
    <div className="relative block p-4 md:flex items-center justify-center md:p-18 overflow-hidden" id="quote">
      {/* Optional floating background shapes */}
      <motion.div
        className="absolute top-0 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 -z-10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <motion.div
        className="space-y-6 md:space-y-12 p-4 md:p-8 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-2">
          <h1 className="text-[1.5rem] md:text-3xl font-bold font-600">
            Ready to build your future
          </h1>
          <p className="text-[.65rem] md:text-[.9rem] font-medium font-200">
            Connect with our expert engineering team to transform your complex technical challenges into innovative solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full">
          <Button text="Quote" />
          <Button text="Consult" />
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex-1 md:flex items-center justify-center p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={img} alt="Engineering quote" className="w-full h-full object-cover rounded-lg" />
      </motion.div>
    </div>
  );
}

export default Quote;
