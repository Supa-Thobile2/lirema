import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components';
import { motion, AnimatePresence } from 'framer-motion';

function Subscribe() {
  const [open, setOpen] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    if (!open && emailRef.current) {
      emailRef.current.focus();
    }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    e.target.reset();
  };

  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-16 md:py-24 space-y-10 text-center"
      aria-labelledby="subscribe-heading"
    >
      {/* Text */}
      <header className="space-y-4 max-w-xl">
        <h1
          id="subscribe-heading"
          className="text-xl md:text-3xl font-semibold tracking-tight text-gray-900"
        >
          Stay informed with engineering insights
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Receive the latest updates, technical innovations, and construction
          industry trends directly in your inbox.
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>

        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full rounded-full border border-gray-300 px-5 py-3 pr-36 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="absolute inset-y-0 right-1 flex items-center">
          <Button text="Subscribe" type="submit" />
        </div>
      </form>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 max-w-md">
        By subscribing, you agree to Li Rema Construction’s terms and conditions.
      </p>

      {/* Thank You Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 max-w-sm w-full text-center space-y-4"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                id="thank-you-title"
                className="text-lg font-semibold text-gray-900"
              >
                Thank you for subscribing!
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                You’re now subscribed to updates from{' '}
                <span className="font-medium text-gray-900">
                  Li Rema Construction
                </span>
                . We’re excited to share insights with you.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-purple-600 px-6 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader utility */}
      <span className="sr-only">
        Subscription confirmation dialog
      </span>
    </section>
  );
}

export default Subscribe;
