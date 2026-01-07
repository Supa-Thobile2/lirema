import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../components";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

import img2 from "../images/hvac3.jpg";
import img3 from "../images/construction3.webp";
import img4 from "../images/construction2.webp";
import img5 from "../images/electric1.jpg";
import img6 from "../images/camera2.webp";
import img7 from "../images/camera1.jpg";

/* ================= SERVICE CARD ================= */
function ServiceCard({ title, subtitle, description, image, buttons }) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="space-y-3">
        {subtitle && (
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            {subtitle}
          </p>
        )}

        <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
          {title}
        </h2>

        {description && (
          <p className="text-sm leading-relaxed text-neutral-600">
            {description}
          </p>
        )}

        {buttons && (
          <div className="flex flex-wrap gap-3 pt-2">
            {buttons.map((btn, index) => (
              <Link key={index} to={btn.to}>
                <Button
                  text={btn.label}
                  ariaLabel={btn.label}
                />
              </Link>
            ))}
          </div>
        )}
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 h-48 w-full rounded-xl object-cover"
        />
      )}
    </article>
  );
}

/* ================= SERVICES PAGE ================= */
function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Build
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Engineering solutions that work
          </h1>

          <p className="text-base leading-relaxed text-neutral-600">
            Delivering precise technical solutions across multiple engineering
            disciplines with proven reliability and professional commitment.
          </p>

          <div className="flex gap-4 pt-4">
            <Link to="/services">
              <Button text="Services" ariaLabel="View services" />
            </Link>
            <Link to="/contacts">
              <Button text="Contact" ariaLabel="Contact us" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section
        aria-labelledby="services-heading"
        className="mx-auto max-w-7xl px-6 py-12 md:px-12"
      >
        <h2
          id="services-heading"
          className="sr-only"
        >
          Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <ServiceCard
            title="HVAC services for comfort"
            description="Comprehensive heating and cooling solutions tailored to your needs."
            image={img2}
            buttons={[
              { label: "Learn More", to: "/hvac" },
            ]}
          />

          <ServiceCard
            subtitle="Civil"
            title="Civil and Construction services that build futures"
            description="Integrated project management, sustainable construction, and comprehensive site management."
            image={img3}
            buttons={[
              { label: "Explore", to: "/civil" },
              { label: "Details", to: "/details" },
            ]}
          />

          <ServiceCard
            title="Specialized construction solutions"
            description="Custom engineering for unique project requirements."
            image={img4}
            buttons={[
              { label: "Learn", to: "/special" },
              { label: "Details", to: "/details" },
            ]}
          />

          <ServiceCard
            subtitle="Electrify"
            title="Advanced electrical system design and maintenance"
            image={img5}
            buttons={[
              { label: "Learn", to: "/electric" },
              { label: "Details", to: "/details" },
            ]}
          />

          <ServiceCard
            subtitle="Smart"
            title="Smart home solutions for modern living"
            image={img7}
            buttons={[
              { label: "Learn", to: "/smart-home" },
              { label: "Details", to: "/details" },
            ]}
          />

          <ServiceCard
            subtitle="Connect"
            title="Get your project started today"
            image={img6}
            buttons={[
              { label: "Request Quote", to: "/quote" },
              { label: "Contact", to: "/contacts" },
            ]}
          />
        </div>
      </section>

      {/* ================= SHARED SECTIONS ================= */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-12">
        <Team />
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;
