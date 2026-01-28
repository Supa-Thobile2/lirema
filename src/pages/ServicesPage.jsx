import React from "react"
import { Link } from "react-router-dom"
import { Button, Header } from "../components"
import Team from "./Team"
import Contact from "./Contact"
import Footer from "./Footer"

import img2 from "../images/hvac3.jpg"
import img3 from "../images/construction3.webp"
import img4 from "../images/construction2.webp"
import img5 from "../images/electric1.jpg"
import img6 from "../images/camera2.webp"
import img7 from "../images/camera1.jpg"

/* ================= SERVICE CARD ================= */
function ServiceCard({ title, subtitle, description, image, buttons }) {
  return (
    <article
      className="
        flex flex-col justify-between
        rounded-2xl border border-neutral-200
        bg-white p-6
        shadow-sm transition
        hover:shadow-md
      "
    >
      <div className="space-y-4">
         {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            mt-6 h-44 sm:h-48
            w-full rounded-xl
            object-cover
          "
        />
      )}
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            {subtitle}
          </p>
        )}

        <h3 className="text-md sm:text-xl font-bold text-neutral-900">
          {title}
        </h3>

        {description && (
          <p className="text-sm leading-relaxed text-neutral-600">
            {description}
          </p>
        )}

        {buttons && (
          <div className="flex flex-wrap gap-3 pt-2">
            {buttons.map((btn, index) => (
              <Link key={index} to={btn.to}>
                <Button text={btn.label} ariaLabel={btn.label} />
              </Link>
            ))}
          </div>
        )}
      </div>

     
    </article>
  )
}

/* ================= SERVICES PAGE ================= */
function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 ">
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="mx-auto max-w-7xl space-y-8 p-8 md:p-20 ">
          <div className="max-w-3xl space-y-6 md:space-y-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Build
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              Engineering solutions that work
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
              Delivering precise technical solutions across multiple engineering
              disciplines with proven reliability and professional commitment.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/services">
                <Button text="Services" />
              </Link>

              <Link to="/contacts">
                <Button text="Contact" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section
          aria-labelledby="services-heading"
          className="mx-auto max-w-7xl p-4 md:p-2"
        >
          <h2 id="services-heading" className="sr-only">
            Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="HVAC services for comfort"
              description="Comprehensive heating and cooling solutions tailored to your needs."
              image={img2}
              buttons={[{ label: "Learn More", to: "/hvac" }]}
            />

            <ServiceCard
              subtitle="Civil"
              title="Civil and construction services that build futures"
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
        <section className="mx-auto max-w-7xl p-4 sm:p-6">
          <Team />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage
