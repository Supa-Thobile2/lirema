import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../components";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

function AboutPage() {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* HERO SECTION */}
      <section
        className="text-center py-20 md:py-28"
        aria-labelledby="about-title"
      >
        <div className="space-y-6 max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm md:text-base font-semibold text-neutral-500 uppercase">
            Our Story
          </p>

          <h1
            id="about-title"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-neutral-900"
          >
            About Us
          </h1>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Building engineering solutions that transform infrastructure.
          </p>

          <div className="flex justify-center gap-4 pt-8">
            <Link
              to="/about"
              aria-label="Learn more about LI Rema Engineering and Construction history"
            >
              <Button text="Learn" />
            </Link>

            <Link to="/contacts" aria-label="Contact our team">
              <Button text="Contact" />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <p className="text-sm font-light text-neutral-500">Our Mission</p>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900">
          Engineering excellence through innovation and precision
        </h2>

        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
          Li Rema Engineering and Construction stands as a pioneering force in
          technical solutions. We merge deep engineering knowledge with
          strategic vision to deliver impactful projects.
        </p>
      </section>

      {/* STRENGTHS SECTION */}
      <section className="px-6 py-20 max-w-5xl mx-auto space-y-6">
        <p className="text-sm font-light text-neutral-500">Our Strengths</p>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900">
          Why choose Li Rema?
        </h2>

        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
          Comprehensive engineering solutions for complex challenges.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-6">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="p-6 bg-white rounded-xl shadow-sm space-y-4 border border-neutral-200"
            >
              <p className="text-xs font-medium text-neutral-500">Expertise</p>

              <h4 className="text-lg font-bold text-neutral-900">
                Proven technical mastery across engineering domains.
              </h4>

              <p className="text-sm text-neutral-600">
                Deep technical knowledge.
              </p>

              <Link
                to="/history"
                aria-label="Learn more about our engineering expertise"
              >
                <Button text="Learn" />
              </Link>

              <div className="h-24 w-full bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-500">Image</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-light text-neutral-500">Our Journey</p>

        <h3 className="text-2xl font-bold text-neutral-900">
          Milestones of engineering excellence
        </h3>

        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
          A story of continuous growth and technical advancement through
          innovation.
        </p>

        <div className="flex gap-4 pt-4 justify-center sm:justify-start">
          <Link
            to="/history"
            aria-label="View our company history and milestones"
          >
            <Button text="View History" />
          </Link>

          <Link
            to="/about"
            aria-label="Learn more about LI Rema Engineering history"
          >
            <Button text="Learn" />
          </Link>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-neutral-900">
          Our Trusted Partners
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed">
          Collaborative networks driving innovation and excellence.
        </p>

        <div className="flex gap-4 pt-4 justify-center sm:justify-start">
          <Link
            to="/partners"
            aria-label="View our partners and accreditations"
          >
            <Button text="View Partner" />
          </Link>

          <Link
            to="/partners"
            aria-label="Learn more about our professional partnerships"
          >
            <Button text="Learn" />
          </Link>
        </div>

        <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center mt-4">
          <span className="text-xs text-gray-500">Partner Images</span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-bold text-neutral-900">
          Ready to build your next project?
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed">
          Connect with our expert team to discuss your engineering needs.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link to="/contacts" aria-label="Contact our team">
            <Button text="Contact" />
          </Link>

          <Link to="/quote" aria-label="Request a project quote">
            <Button text="Request Quote" />
          </Link>
        </div>
      </section>

      {/* TEAM & CONTACT */}
      <Team />
      <Contact />

      <Footer />
    </div>
  );
}

export default AboutPage;
