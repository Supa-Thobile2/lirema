import React from "react";
import { Button, Header } from "../components";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import Quote from "./Quote";

function Specialized() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl">
        
        {/* ================= HERO ================= */}
        <section className="text-center p-8 space-y-8">
          <header className="space-y-6">
            <p className="inline-block rounded-full border border-neutral-200 px-4 py-1 text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Build
            </p>

            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Specialized construction expertise
            </h1>

            <p className="mx-auto max-w-prose text-base sm:text-lg leading-relaxed text-neutral-600">
              Precision engineering and advanced construction techniques that
              transform complex challenges into seamless architectural
              solutions.
            </p>
          </header>

          <div className="flex  justify-center gap-4 pt-2">
            <Button text="Explore" />
            <Button text="Contact" />
          </div>
        </section>

        {/* ================= FOUNDATIONS ================= */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-12 items-center p-8 space-y-8">
          <div className="space-y-2">
            <header className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
                Foundations
              </p>

              <h2 className="text-xl sm:text-3xl font-semibold text-neutral-900">
                Structural engineering solutions
              </h2>

              <p className="max-w-prose leading-relaxed text-neutral-600">
                We build strong foundations designed to withstand the harshest
                conditions. Our premium engineering transforms raw ground into
                stable platforms for complex architectural projects.
              </p>
            </header>

            <div className="flex  gap-4">
              <Button text="Learn" />
              <Button text="Work" />
            </div>
          </div>

          {/* Image placeholder with stable aspect ratio */}
          <div className="aspect-[4/3] rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400">
            Image placeholder
          </div>
        </section>

        {/* ================= INFRASTRUCTURE ================= */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-12 items-center p-8 space-y-8">
          <div className="space-y-8">
            <header className="space-y-2">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
                Infrastructure
              </p>

              <h2 className="text-lg sm:text-3xl font-semibold text-neutral-900">
                Advanced construction techniques
              </h2>
            </header>

            <ul className="list-disc list-inside text-neutral-600 space-y-4">
              <li>Complex network development</li>
              <li>Integrated urban solutions</li>
              <li>Sustainable construction strategies</li>
            </ul>

            <div className="flex gap-4">
              <Button text="Explore" />
              <Button text="View" />
            </div>
          </div>

          <div className="aspect-[4/3] rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400">
            Image placeholder
          </div>
        </section>

        {/* ================= CUSTOM ENGINEERING ================= */}
        <section className="mx-auto max-w-3xl text-center p-8 space-y-8">
          <header className="space-y-4">
            <h2 className="text-lg sm:text-3xl font-semibold text-neutral-900">
              Custom engineering solutions
            </h2>

            <p className="leading-relaxed text-neutral-600">
              Pushing the boundaries of construction technology through
              cutting-edge design and implementation. We turn complex challenges
              into refined architectural achievements.
            </p>
          </header>

          <div className="flex justify-center gap-4 pt-2">
            <Button text="Discover" />
            <Button text="Learn" />
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

export default Specialized;
