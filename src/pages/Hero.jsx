import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
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
      <div className="container mx-auto ">
        {/* Stack on mobile, row layout from md and up */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 p-4">

          {/* ================= TEXT CONTENT ================= */}
          <header className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            {/* Responsive heading scale */}
            <h1
              id="hero-heading"
              className="text-md font-bold tracking-tight leading-tight
                         
                         md:text-2xl
                         lg:text-lg"
            >
              Engineering Solutions That Build Tomorrow
            </h1>

            {/* Responsive paragraph text for readability */}
            <p
              className="max-w-prose text-base leading-relaxed text-gray-700
                         sm:text-md
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
              className="flex flex-wrap justify-center md:justify-start gap-4"
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
              className="w-screen max-w-md md:max-w-lg lg:max-w-xl
                         rounded-xl shadow-lg
                         transition-transform duration-700 ease-out
                         hover:scale-[1.02] object-fit"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
