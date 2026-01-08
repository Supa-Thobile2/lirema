import React from "react";
import { Link } from "react-router-dom";
import img from "../images/powerlines.jpg";
import { Button } from "../components";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gradient-to-tr from-neutral-50 via-white to-neutral-100"
    >
      {/* Responsive container with mobile-first padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Stack on mobile, split layout on md+ */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center">

          {/* ================= LEFT CONTENT ================= */}
          <article className="w-full md:w-1/2 space-y-8">
            {/* Section label */}
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:text-sm">
              About
            </p>

            <header className="space-y-4">
              {/* Responsive heading */}
              <h2
                id="about-heading"
                className="text-2xl font-bold tracking-tight leading-tight text-neutral-900
                           sm:text-3xl
                           lg:text-4xl"
              >
                Transforming engineering challenges into innovative solutions
              </h2>

              {/* Responsive paragraph */}
              <p
                className="max-w-prose text-base leading-relaxed text-neutral-700
                           sm:text-lg"
              >
                Li Rema Engineering and Construction delivers comprehensive
                technical services with unmatched precision. We combine
                engineering expertise with strategic innovation to solve complex
                projects efficiently and effectively.
              </p>
            </header>

            {/* ================= THUMBNAILS ================= */}
            {/* Touch-friendly spacing and focus states */}
            <ul
              role="list"
              aria-label="Engineering project samples"
              className="flex flex-wrap gap-4"
            >
              {[...Array(4)].map((_, i) => (
                <li key={i} role="listitem">
                  <img
                    src={img}
                    alt={`Engineering project sample ${i + 1}`}
                    tabIndex={0}
                    className="h-12 w-12 sm:h-14 sm:w-14
                               rounded-full object-cover shadow-sm
                               transition-transform duration-300
                               hover:scale-105
                               focus-visible:ring-2 focus-visible:ring-neutral-400
                               focus-visible:ring-offset-2"
                  />
                </li>
              ))}
            </ul>

            {/* ================= ACTIONS ================= */}
            {/* Buttons adapt spacing & size for touch */}
            <nav
              aria-label="About section actions"
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/about">
                <Button
                  text="Our Story"
                  ariaLabel="Read our company story"
                  className="px-6 py-3 text-base sm:text-lg"
                />
              </Link>

              <Link to="/quote">
                <Button
                  text="Get Quote"
                  ariaLabel="Request a project quote"
                  className="px-6 py-3 text-base sm:text-lg"
                />
              </Link>
            </nav>
          </article>

          {/* ================= RIGHT IMAGE ================= */}
          {/* Image scales gracefully and stays visually balanced */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Electrical powerlines representing engineering infrastructure"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl
                         max-h-[420px]
                         rounded-xl object-cover shadow-lg"
            />
          </figure>

        </div>
      </div>
    </section>
  );
};

export default About;
