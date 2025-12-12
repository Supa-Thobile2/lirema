import React from 'react';
import { motion } from 'framer-motion';

function Button({ text, icon, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        w-full md:w-auto px-6 py-2
        border border-gray-300 rounded-xl
        text-[.8rem] md:text-sm font-medium
        flex items-center justify-center gap-2
        bg-white hover:bg-gray-100 transition
        focus:outline-none focus:ring-2 focus:ring-purple-300
      `}
      aria-label={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </motion.button>
  );
}

export default Button;
