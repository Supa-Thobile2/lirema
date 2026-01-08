import React from "react";
import img from "../images/electric1.jpg";
import { Button } from "../components";

const Quote = () => {
  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="bg-neutral-50"
    >
      {/* Mobile-first container */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12
                   py-12 sm:py-16 lg:py-24
                   flex flex-col gap-12 md:flex-row md:items-center"
      >
        {/* ================= TEXT CONTENT ================= */}
        <article className="flex-1 space-y-6 text-center md:text-left">
          <header className="space-y-3">
            {/* Responsive heading */}
            <h2
              id="quote-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-neutral-900
                         sm:text-3xl
                         lg:text-4xl"
            >
              Ready to build your future
            </h2>

            {/* Responsive paragraph */}
            <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
              Connect with our expert engineering team to transform your complex
              technical challenges into innovative solutions.
            </p>
          </header>

          {/* ================= CTA BUTTONS ================= */}
          {/* Touch-friendly & centered on mobile */}
          <nav
            aria-label="Quote actions"
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <Button
              text="Get a Quote"
              className="px-6 py-3 text-base sm:text-lg"
            />
            <Button
              text="Consult"
              className="px-6 py-3 text-base sm:text-lg"
            />
          </nav>
        </article>

        {/* ================= IMAGE ================= */}
        {/* Lazy-loaded, responsive image */}
        <figure className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Engineering consultation and planning"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full max-w-md sm:max-w-lg
                       rounded-xl object-cover shadow-lg"
          />
        </figure>
      </div>
    </section>
  );
};

export default Quote;
