import React from "react";
import img from "../images/tech.webp";
import { Button } from "../components";

const Choose = () => {
  return (
    <section
      aria-labelledby="choose-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 space-y-2"
    >
      {/* ================= SECTION INTRO ================= */}
      <header className="mx-auto max-w-2xl text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:text-sm">
          Why Choose Us
        </p>

        <h2
          id="choose-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900
                     sm:text-3xl
                     lg:text-4xl"
        >
          Unparalleled engineering excellence
        </h2>

        <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
          Delivering integrated solutions across multiple technical domains.
        </p>
      </header>

      {/* ================= CARDS GRID ================= */}
      {/* Stacks on mobile, splits on md+ */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* -------- LEFT COLUMN -------- */}
        <div className="space-y-6">
          {/* Card 1 */}
          <article
            className="rounded-xl border border-neutral-200 bg-white
                       p-5 sm:p-6
                       shadow-sm transition
                       hover:shadow-md
                       focus-within:ring-2 focus-within:ring-neutral-300"
          >
            <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
              Technical Expertise
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Highly skilled engineers with deep technical knowledge.
            </p>

            <div className="mt-4">
              <Button
                text="Explore Capabilities"
                className="px-5 py-3 text-sm sm:text-base"
              />
            </div>
          </article>

          {/* Card 2 */}
          <article
            className="rounded-xl border border-neutral-200 bg-white
                       p-5 sm:p-6
                       shadow-sm transition
                       hover:shadow-md
                       focus-within:ring-2 focus-within:ring-neutral-300"
          >
            <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
              Quality Assurance
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Rigorous testing and validation for reliable performance.
            </p>

            <div className="mt-4">
              <Button
                text="Explore Capabilities"
                className="px-5 py-3 text-sm sm:text-base"
              />
            </div>
          </article>
        </div>

        {/* -------- RIGHT FEATURE CARD -------- */}
        <article
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white
                     shadow-sm transition hover:shadow-md"
        >
          <div className="flex flex-col md:flex-row">
            {/* Text */}
            <div className="flex flex-col justify-center p-5 sm:p-6 md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Innovation
              </p>

              <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
                Cutting-edge technological solutions for complex challenges
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                Advanced problem-solving approaches delivering impactful
                results.
              </p>
            </div>

            {/* Image */}
            <div className="h-52 sm:h-60 md:h-auto md:w-1/2 overflow-hidden">
              <img
                src={img}
                alt="Engineering innovation and advanced technology"
                className="h-full w-full object-cover
                           transition-transform duration-700
                           motion-safe:hover:scale-105"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Choose;
