import React from "react";
import { servicesData } from "../data/Data";
import { ServicesCard } from "../components";

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24"
    >
      {/* ================= SECTION HEADER ================= */}
      <header className="max-w-3xl space-y-4">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:text-sm">
          Services
        </p>

        {/* Responsive heading */}
        <h2
          id="services-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900
                     sm:text-3xl
                     lg:text-4xl"
        >
          Comprehensive technical solutions
        </h2>

        {/* Responsive description */}
        <p className="max-w-prose text-base leading-relaxed text-neutral-600 sm:text-lg">
          Integrated engineering services for complex industrial and residential
          projects.
        </p>
      </header>

      {/* ================= SERVICES GRID ================= */}
      {/* Mobile-first grid with responsive column count */}
      <ul
        role="list"
        aria-label="List of services"
        className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {servicesData.map((item) => (
          <li key={item.heading} role="listitem">
            <ServicesCard
              heading={item.heading}
              subtext={item.subtext}
              description={item.description}
              btnText={item.btnText}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
