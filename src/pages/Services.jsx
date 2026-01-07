import React from "react";
import { servicesData } from "../data/Data";
import { ServicesCard } from "../components";

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
    >
      {/* SECTION HEADER */}
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Services
        </p>

        <h2
          id="services-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900"
        >
          Comprehensive technical solutions
        </h2>

        <p className="text-base leading-relaxed text-neutral-600 max-w-prose">
          Integrated engineering services for complex industrial and residential
          projects.
        </p>
      </header>

      {/* SERVICES GRID */}
      <ul
        role="list"
        aria-label="List of services"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
}

export default Services;
