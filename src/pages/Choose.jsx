import React from "react";
import img from "../images/tech.webp";
import { Button } from "../components";

function Choose() {
  return (
    <section
      aria-labelledby="choose-heading"
      className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 space-y-16"
    >
      {/* Section Intro */}
      <header className="mx-auto max-w-2xl text-center space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
          Why Choose Us
        </p>

        <h2
          id="choose-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl"
        >
          Unparalleled engineering excellence
        </h2>

        <p className="text-base leading-relaxed text-neutral-700">
          Delivering integrated solutions across multiple technical domains.
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Card 1 */}
          <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-neutral-900">
              Technical Expertise
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Highly skilled engineers with deep technical knowledge.
            </p>

            <div className="mt-4">
              <Button text="Explore Capabilities" />
            </div>
          </article>

          {/* Card 2 */}
          <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-neutral-900">
              Quality Assurance
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Rigorous testing and validation for reliable performance.
            </p>

            <div className="mt-4">
              <Button text="Explore Capabilities" />
            </div>
          </article>
        </div>

        {/* Right Column */}
        <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
          <div className="flex flex-col md:flex-row">
            {/* Text */}
            <div className="flex flex-col justify-center space-y-3 p-6 md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Innovation
              </p>

              <h3 className="text-lg font-semibold text-neutral-900">
                Cutting-edge technological solutions for complex challenges
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600">
                Advanced problem-solving approaches delivering impactful
                results.
              </p>
            </div>

            {/* Image */}
            <div className="h-56 md:h-auto md:w-1/2 overflow-hidden">
              <img
                src={img}
                alt="Engineering innovation and advanced technology"
                className="h-full w-full object-cover transition-transform duration-700 motion-safe:hover:scale-105"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Choose;
