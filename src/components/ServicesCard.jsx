import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

function ServicesCard({ heading, subtext, description, btnText, link = "#" }) {
  // Variants for staggered button animation
  const buttonContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger each button
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="border border-[lightgray] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 space-y-3">
        <h6 className="text-[1rem] font-bold font-700">{heading}</h6>
        <div className="space-y-1">
          <h1 className="text-[.8rem] font-semibold font-400">{subtext}</h1>
          <p className="text-[.6rem] font-medium font-200">{description}</p>
        </div>

        <motion.div
          className="flex items-center gap-4 mt-2"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants}>
            <Link to={link}>
              <Button text={btnText} />
            </Link>
          </motion.div>

          {/* Example for a second button if needed */}
          {/* <motion.div variants={buttonVariants}>
            <Button text="Learn More" />
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesCard;
