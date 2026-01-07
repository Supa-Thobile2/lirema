import React from "react";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";

function ConstructionPage() {
  return (
    <>
      <Header />

      <main className="mt-16 space-y-24">
        {/* HERO SECTION */}
        <section
          aria-labelledby="construction-hero-heading"
          className="container mx-auto px-4 md:px-12 lg:px-16"
        >
          <header className="max-w-3xl mx-auto text-center space-y-6">
            <p className="inline-block rounded border px-4 py-1 text-sm font-semibold tracking-wide text-gray-700">
              Construction Solutions
            </p>

            <h1
              id="construction-hero-heading"
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug text-gray-900"
            >
              Construction Solutions
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Building innovative solutions that transform infrastructure and
              drive technological progress across multiple sectors.
            </p>

            <nav
              aria-label="Primary actions"
              className="flex justify-center gap-4 pt-4"
            >
              <Button text="Learn" />
              <Button text="Contact" />
            </nav>
          </header>
        </section>

        {/* CONSTRUCTION EXPERTISE */}
        <section
          aria-labelledby="construction-expertise-heading"
          className="container mx-auto px-4 md:px-12 lg:px-16"
        >
          <header className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-medium tracking-wide text-gray-600">
              Construction
            </p>

            <h2
              id="construction-expertise-heading"
              className="text-xl md:text-2xl font-bold tracking-tight text-gray-900"
            >
              Construction Expertise
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Delivering reliable construction solutions through experience,
              precision, and modern engineering practices.
            </p>
          </header>

          <div className="mt-8 flex justify-center gap-4">
            <Button text="Learn" />
            <Button text="Learn" />
          </div>
        </section>

        {/* FEATURE SECTION */}
        <section
          aria-labelledby="construction-feature-heading"
          className="container mx-auto px-4 md:px-12 lg:px-16"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2
              id="construction-feature-heading"
              className="text-xl md:text-2xl font-bold tracking-tight text-gray-900"
            >
              Quality-Driven Construction
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We approach every project with attention to detail, safety, and
              long-term performance to ensure lasting results.
            </p>

            <div className="flex justify-center gap-4">
              <Button text="Learn" />
              <Button text="Learn" />
            </div>
          </div>
        </section>

        {/* SIMPLE INFO BLOCK */}
        <section
          aria-labelledby="construction-summary-heading"
          className="container mx-auto px-4 md:px-12 lg:px-16"
        >
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-sm font-medium tracking-wide text-gray-600">
              Construction Solutions
            </p>

            <h2
              id="construction-summary-heading"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              End-to-End Construction Services
            </h2>
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

export default ConstructionPage;
