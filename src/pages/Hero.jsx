import React from "react";
import { Link } from "react-router-dom";
import img from "../images/tech2.jpg";
import { Button } from "../components";
import { FaCompass, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Mobile-first container with responsive padding */}
      <div className="container mx-auto px-4 py-10 sm:py-14 md:py-20">
        {/* Stack on mobile, row layout from md and up */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* ================= TEXT CONTENT ================= */}
          <header className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Responsive heading scale */}
            <h1
              id="hero-heading"
              className="text-2xl font-bold tracking-tight leading-tight
                         sm:text-3xl
                         md:text-4xl
                         lg:text-5xl"
            >
              Engineering Solutions That Build Tomorrow
            </h1>

            {/* Responsive paragraph text for readability */}
            <p
              className="max-w-prose text-base leading-relaxed text-gray-700
                         sm:text-lg
                         md:text-xl"
            >
              <strong className="font-semibold text-gray-900">
                Li Rema Engineering and Construction
              </strong>{" "}
              delivers comprehensive engineering and construction services with
              precision and expertise. We transform complex challenges into
              seamless technical solutions.
            </p>

            {/* ================= ACTION BUTTONS ================= */}
            {/* Touch-friendly buttons with responsive spacing */}
            <nav
              aria-label="Primary actions"
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <Link to="/services">
                <Button
                  text="Explore"
                  icon={<FaCompass aria-hidden="true" />}
                  ariaLabel="Explore our services"
                  className="px-6 py-3 text-base sm:text-lg
                             focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </Link>

              <Link to="/contact">
                <Button
                  text="Contact"
                  icon={<FaPhone aria-hidden="true" />}
                  ariaLabel="Contact us"
                  className="px-6 py-3 text-base sm:text-lg
                             focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </Link>
            </nav>
          </header>

          {/* ================= IMAGE CONTENT ================= */}
          {/* Image scales naturally and stays centered */}
          <div className="w-full flex justify-center">
            <img
              src={img}
              alt="Construction engineering technology"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl
                         rounded-xl shadow-lg
                         transition-transform duration-700 ease-out
                         hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
