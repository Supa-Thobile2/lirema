import React from "react"
import { Link } from "react-router-dom"
import { Button, Header } from "../components"
import Team from "./Team"
import Contact from "./Contact"
import Footer from "./Footer"

function AboutPage() {
  return (
    <div className="bg-gray-50">
      <Header />

      <main>

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="about-title"
          className="p-8 space-y-8 md:p-12 lg:p-20
                     text-center"
        >
          <div className="mx-auto max-w-3xl space-y-4 md:space-y-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Our Story
            </p>

            <h1
              id="about-title"
              className="text-3xl md:text-4xl lg:text-6xl
                         font-bold tracking-tight text-neutral-900"
            >
              About Us
            </h1>

            <p className="text-sm sm:text-base lg:text-lg
                          text-neutral-600 leading-relaxed">
              Building engineering solutions that transform infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link to="/about">
                <Button text="Learn More" />
              </Link>
              <Link to="/contacts">
                <Button text="Contact" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="p-8
                            max-w-4xl mx-auto space-y-8 md:p-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
            Our Mission
          </p>

          <h2 className="text-lg sm:text-3xl lg:text-4xl
                         font-bold text-neutral-900">
            Engineering excellence through innovation and precision
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Li Rema Engineering and Construction stands as a pioneering force in
            technical solutions. We merge deep engineering knowledge with
            strategic vision to deliver impactful projects.
          </p>
        </section>

        {/* ================= STRENGTHS ================= */}
        <section className="p-8
                            max-w-6xl mx-auto space-y-8">
          <header className="space-y-4 md:space-y-8">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Our Strengths
            </p>

            <h2 className="text-xl sm:text-3xl lg:text-4xl
                           font-bold text-neutral-900">
              Why choose Li Rema?
            </h2>

            <p className="text-sm sm:text-base text-neutral-600">
              Comprehensive engineering solutions for complex challenges.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <article
                key={card}
                className="flex flex-col justify-between
                           rounded-2xl border border-neutral-200
                           bg-white p-6 sm:p-8
                           shadow-sm"
              >
                <div className="space-y-4 p-8">
                  <p className="text-xs font-semibold text-neutral-500">
                    Expertise
                  </p>

                  <h3 className="text-lg font-bold text-neutral-900">
                    Proven technical mastery across engineering domains
                  </h3>

                  <p className="text-sm text-neutral-600">
                    Deep technical knowledge.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <Link to="/history">
                    <Button text="Learn" />
                  </Link>

                  <div className="h-24 rounded-md bg-gray-200
                                  flex items-center justify-center mt-4">
                    <span className="text-xs text-gray-500">Image</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section className="p-8
                            max-w-4xl mx-auto space-y-8 md:p-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
            Our Journey
          </p>

          <h3 className="text-lg sm:text-3xl font-bold text-neutral-900">
            Milestones of engineering excellence
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            A story of continuous growth and technical advancement through
            innovation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/history">
              <Button text="View History" />
            </Link>
            <Link to="/about">
              <Button text="Learn More" />
            </Link>
          </div>
        </section>

        {/* ================= PARTNERS ================= */}
        <section className="p-8
                            max-w-4xl mx-auto space-y-8 md:p-12">
          <h3 className="text-lg sm:text-3xl font-bold text-neutral-900">
            Our Trusted Partners
          </h3>

          <p className="text-sm sm:text-base text-neutral-600">
            Collaborative networks driving innovation and excellence.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/partners">
              <Button text="View Partners" />
            </Link>
            <Link to="/partners">
              <Button text="Learn More" />
            </Link>
          </div>

          <div className="h-40 rounded-xl bg-gray-200
                          flex items-center justify-center border-2">
            <span className="text-xs text-gray-500">Partner Images</span>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="p-8
                            max-w-4xl mx-auto text-center space-y-4 md:p-8">
          <h3 className="text-md sm:text-3xl font-bold text-neutral-900">
            Ready to build your next project?
          </h3>

          <p className="text-sm sm:text-base text-neutral-600">
            Connect with our expert team to discuss your engineering needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contacts">
              <Button text="Contact" />
            </Link>
            <Link to="/quote">
              <Button text="Request Quote" />
            </Link>
          </div>
        </section>

        {/* ================= TEAM & CONTACT ================= */}
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
