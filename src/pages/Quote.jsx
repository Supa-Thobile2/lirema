import React from "react";
import img from "../images/electric1.jpg";
import { Button } from "../components";

function Quote() {
  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="bg-neutral-50 px-6 py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col items-center gap-12 md:flex-row">
        {/* Text Content */}
        <article className="flex-1 space-y-6">
          <header className="space-y-3">
            <h2
              id="quote-heading"
              className="text-2xl font-bold leading-snug tracking-tight text-neutral-900 md:text-3xl"
            >
              Ready to build your future
            </h2>

            <p className="text-base leading-relaxed text-neutral-700">
              Connect with our expert engineering team to transform your complex
              technical challenges into innovative solutions.
            </p>
          </header>

          {/* CTA Buttons */}
          <nav
            aria-label="Quote actions"
            className="flex  gap-4"
          >
            <Button text="Get a Quote" />
            <Button text="Consult" />
          </nav>
        </article>

        {/* Image */}
        <figure className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Engineering consultation and planning"
            className="w-full max-w-lg rounded-lg object-cover shadow-lg"
          />
        </figure>
      </div>
    </section>
  );
}

export default Quote;
