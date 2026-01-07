import React from "react";
import { Link } from "react-router-dom";
import img from "../images/powerlines.jpg";
import { Button } from "../components";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gradient-to-tr from-neutral-50 via-white to-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-12 md:flex-row">

          {/* LEFT CONTENT */}
          <article className="w-full md:w-1/2 space-y-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
              About
            </p>

            <header className="space-y-4">
              <h2
                id="about-heading"
                className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-neutral-900"
              >
                Transforming engineering challenges into innovative solutions
              </h2>

              <p className="max-w-prose text-base leading-relaxed text-neutral-700">
                Li Rema Engineering and Construction delivers comprehensive
                technical services with unmatched precision. We combine
                engineering expertise with strategic innovation to solve complex
                projects efficiently and effectively.
              </p>
            </header>

            {/* THUMBNAILS */}
            <ul
              role="list"
              aria-label="Engineering project samples"
              className="flex gap-4"
            >
              {[...Array(4)].map((_, i) => (
                <li key={i} role="listitem">
                  <img
                    src={img}
                    alt={`Engineering project sample ${i + 1}`}
                    tabIndex={0}
                    className="h-12 w-12 rounded-full object-cover shadow-sm transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                  />
                </li>
              ))}
            </ul>

            {/* ACTIONS */}
            <nav
              aria-label="About section actions"
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/about">
                <Button
                  text="Our Story"
                  ariaLabel="Read our company story"
                />
              </Link>

              <Link to="/quote">
                <Button
                  text="Get Quote"
                  ariaLabel="Request a project quote"
                />
              </Link>
            </nav>
          </article>

          {/* RIGHT IMAGE */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Electrical powerlines representing engineering infrastructure"
              className="w-full max-h-[420px] rounded-xl object-cover shadow-lg"
            />
          </figure>

        </div>
      </div>
    </section>
  );
}

export default About;
