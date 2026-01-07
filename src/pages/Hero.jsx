import React from "react";
import { Link } from "react-router-dom";
import img from "../images/tech2.jpg";
import { Button } from "../components";
import { FaCompass, FaPhone } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto space-y-4 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* TEXT CONTENT */}
          <header className="w-full md:text-left flex flex-col items-center md:items-start space-y-6">
            <h1
              id="hero-heading"
              className="text-xl md:text-4xl font-bold tracking-tight leading-snug"
            >
              Engineering Solutions That Build Tomorrow
            </h1>

            <p className="text-base leading-relaxed text-gray-800 max-w-prose">
              <strong className="font-semibold">
                Li Rema Engineering and Construction
              </strong>{" "}
              delivers comprehensive engineering and construction services with
              precision and expertise. We transform complex challenges into
              seamless technical solutions.
            </p>

            {/* ACTION BUTTONS */}
            <nav
              aria-label="Primary actions"
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/services">
                <Button
                  text="Explore"
                  icon={<FaCompass aria-hidden="true" />}
                  ariaLabel="Explore our services"
                  className="focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </Link>

              <Link to="/contact">
                <Button
                  text="Contact"
                  icon={<FaPhone aria-hidden="true" />}
                  ariaLabel="Contact us"
                  className="focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </Link>
            </nav>
          </header>

          {/* IMAGE CONTENT */}
          <div className="w-full md:flex items-center justify-center">
            <img
              src={img}
              alt="Construction engineering technology"
              className="w-full rounded-lg shadow-lg transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
