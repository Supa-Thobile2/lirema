import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../components";
import Footer from "./Footer";
import Contact from "./Contact";

/* Images */
import img1 from "../images/camera1.jpg";
import img2 from "../images/camera1.jpg";
import img3 from "../images/camera1.jpg";
import img4 from "../images/camera1.jpg";

function Smart() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 space-y-32">

        {/* ================= HERO ================= */}
        <section className="text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Smart Living
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Smart home & security solutions
          </h1>

          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-neutral-600">
            Integrated smart technology designed to improve comfort, security,
            and efficiency in modern homes and businesses.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link to="/quote">
              <Button text="Request Quote" />
            </Link>
            <Link to="/contacts">
              <Button text="Talk to an expert" />
            </Link>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Intelligent systems built around your lifestyle
          </h2>

          <p className="leading-relaxed text-neutral-600">
            Our smart solutions include CCTV surveillance, access control,
            alarms, and automated systems that give you full visibility and
            control — anytime, anywhere.
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Smart CCTV & remote monitoring</li>
            <li>Access control & intercom systems</li>
            <li>Alarm systems & perimeter security</li>
            <li>Gate motors & automation</li>
          </ul>
        </section>

        {/* ================= IMAGE GALLERY ================= */}
        <section aria-labelledby="gallery-heading" className="space-y-10">
          <header className="text-center space-y-3">
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="text-2xl md:text-3xl font-semibold text-neutral-900"
            >
              Smart systems in action
            </h2>
            <p className="mx-auto max-w-prose text-neutral-600">
              A glimpse into the smart technology solutions we design and install.
            </p>
          </header>

          <div
            role="list"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[img1, img2, img3, img4].map((image, index) => (
              <figure
                key={index}
                role="listitem"
                className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm"
              >
                <img
                  src={image}
                  alt={`Smart system installation ${index + 1}`}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Ready to upgrade your space?
          </h2>

          <p className="text-neutral-600">
            Speak with our specialists to design a smart system tailored to your
            needs.
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <Link to="/quote">
              <Button text="Get a quote" />
            </Link>
            <Link to="/contact">
              <Button text="Contact us" />
            </Link>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Smart;
