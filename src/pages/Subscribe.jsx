import React from "react";
import { Button } from "../components";

function Subscribe() {
  return (
    <section
      aria-labelledby="subscribe-heading"
      className="bg-neutral-50  flex flex-col items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
    >
      {/* Heading */}
      <header className="text-center space-y-2 max-w-xl">
        <h2
          id="subscribe-heading"
          className="text-xl md:text-2xl font-bold text-neutral-900"
        >
          Stay Informed: Engineering Insights
        </h2>
        <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
          Receive the latest updates, technical innovations, and industry trends
          directly to your inbox.
        </p>
      </header>

      {/* Email Form */}
      <form className="relative w-full max-w-md flex items-center">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="
            w-full rounded-full border border-neutral-300 px-4 py-2
            text-sm text-neutral-900 placeholder-neutral-400
            focus:outline-none focus:ring-2 focus:ring-purple-300
          "
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-1">
          <Button text="Subscribe Now" />
        </div>
      </form>

      {/* Terms */}
      <p className="text-xs text-neutral-500 text-center max-w-xs">
        By subscribing, you agree to our terms and conditions of service.
      </p>
    </section>
  );
}

export default Subscribe;
