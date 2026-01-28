import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";

function Civil() {
  return (
    <>
      <Header />

      <main className="">

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="civil-hero-heading"
          className="mx-auto max-w-7xl  dpace-y-8 p-8"
        >
          <header className="mx-auto max-w-3xl text-center p-4 space-y-6">
            <p className="text-sm font-medium tracking-wide text-neutral-500">
              Civil
            </p>

            <h1
              id="civil-hero-heading"
              className="text-xl md:text-4xl font-bold tracking-tight text-neutral-900"
            >
              Civil Engineering Excellence
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-neutral-600">
              Transform landscapes with precision engineering and innovative
              construction solutions that drive progress.
            </p>

            <nav className="flex justify-center gap-4 pt-4">
              <Link to="/services">
                <Button text="Explore" />
              </Link>
              <Link to="/contacts">
                <Button text="Contact" />
              </Link>
            </nav>
          </header>
        </section>

        {/* ================= SERVICES OVERVIEW ================= */}
        <section className="mx-auto max-w-7xl p-8 sopace-y-8">
          <header className="mx-auto max-w-3xl text-center space-y-4">
            <p className="text-sm font-medium tracking-wide text-neutral-500">
              Services
            </p>

            <h2 className="text-xl md:text-3xl font-bold text-neutral-900">
              Civil Construction Expertise
            </h2>

            <p className="text-base leading-relaxed text-neutral-600">
              Comprehensive civil construction services delivered to the highest
              industry standards.
            </p>
          </header>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/services">
              <Button text="Learn" />
            </Link>
            <Link to="/contacts">
              <Button text="Contact" />
            </Link>
          </div>
        </section>

        {/* ================= FOUNDATIONS ================= */}
        <section className="mx-auto max-w-7xl p-8 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <p className="text-sm font-medium tracking-wide text-neutral-500">
              Foundations
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
              Site Preparation & Groundwork
            </h2>

            <p className="text-base leading-relaxed text-neutral-600">
              Advanced site preparation ensuring stable and optimized foundations
              for all construction projects.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/services">
                <Button text="Explore" />
              </Link>
              <Link to="/quote">
                <Button text="Quote" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= CONSTRUCTION ================= */}
        <section className="mx-auto max-w-7xl p-8 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <p className="text-sm font-medium tracking-wide text-neutral-500">
              Construction
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-neutral-900">
              Residential & Commercial Building
            </h2>

            <p className="text-base leading-relaxed text-neutral-600">
              Precision-built spaces combining modern architecture with
              practical engineering expertise.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/services">
                <Button text="Explore" />
              </Link>
              <Link to="/contacts">
                <Button text="Details" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FEATURED BUILD ================= */}
        <section className="mx-auto max-w-7xl p-8 space-y-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="h-48 rounded-md bg-neutral-200 flex items-center justify-center">
              <span className="text-sm text-neutral-500">Featured project media</span>
            </div>

            <div className="space-y-8 p-4">
              <p className="text-sm font-medium tracking-wide text-neutral-500">
                Builds
              </p>

              <h2 className="text-lg font-bold text-neutral-900">
                Residential Construction Services
              </h2>

              <p className="text-sm leading-relaxed text-neutral-600">
                Custom-built homes designed around functionality, comfort, and
                client vision.
              </p>

              <div className="flex gap-4">
                <Link to="/services">
                  <Button text="Explore" />
                </Link>
                <Link to="/quote">
                  <Button text="Quote" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MANAGEMENT & CONSULTATION ================= */}
        {[
          {
            label: "Management",
            title: "Project Consulting Service",
            text:
              "End-to-end project management delivering strategic outcomes.",
          },
          {
            label: "Consultation",
            title: "Strategic Project Planning",
            text:
              "Comprehensive planning aligned with technical and business goals.",
          },
        ].map((item) => (
          <section
            key={item.title}
            className="mx-auto max-w-7xl space-y-8 p-8"
          >
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <p className="text-sm font-medium tracking-wide text-neutral-500">
                {item.label}
              </p>

              <h2 className="text-xl font-bold text-neutral-900">
                {item.title}
              </h2>

              <p className="text-base leading-relaxed text-neutral-600">
                {item.text}
              </p>

              <div className="flex justify-center gap-4">
                <Link to="/services">
                  <Button text="Learn" />
                </Link>
                <Link to="/contacts">
                  <Button text="Contact" />
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-7xl p-8 space-y-8 ">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Ready to start your next project?
            </h2>

            <p className="text-base leading-relaxed text-neutral-600">
              Partner with our expert civil engineering team today.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/contacts">
                <Button text="Consult" />
              </Link>
              <Link to="/quote">
                <Button text="Quote" />
              </Link>
            </div>
          </div>
        </section>

        <Team />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Civil;
