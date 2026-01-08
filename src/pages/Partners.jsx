import React from "react";
import { Header, Button } from "../components";
import Footer from "./Footer";
import Contact from "./Contact";

/* Replace these with real partner logos/images */
import partner1 from "../images/camera1.jpg";
import partner2 from "../images/camera1.jpg";
import partner3 from "../images/camera1.jpg";
import partner4 from "../images/camera1.jpg";

const partners = [
  {
    name: "PowerGrid Solutions",
    description:
      "Specialists in high-voltage infrastructure, delivering reliable grid solutions for industrial and municipal projects.",
    image: partner1,
  },
  {
    name: "BuildCore Construction",
    description:
      "A trusted construction partner focused on sustainable civil and commercial developments.",
    image: partner2,
  },
  {
    name: "Solaris Renewables",
    description:
      "Renewable energy innovators providing solar and hybrid energy systems across Southern Africa.",
    image: partner3,
  },
  {
    name: "SecureTech Systems",
    description:
      "Advanced security and surveillance solutions for residential, commercial, and industrial environments.",
    image: partner4,
  },
];

function Partners() {
  return (
    <>
      <Header />

      {/* 
        Mobile-first layout:
        - px-4 on phones
        - spacing scales up for larger screens
      */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16 sm:space-y-24">

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="partners-heading"
          className="text-center space-y-4 sm:space-y-6"
        >
          <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
            Partnerships
          </p>

          <h1
            id="partners-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900"
          >
            Our Trusted Partners
          </h1>

          <p className="mx-auto max-w-prose text-base sm:text-lg leading-relaxed text-neutral-600">
            We collaborate with industry-leading partners to deliver innovative,
            reliable, and scalable engineering solutions.
          </p>
        </section>

        {/* ================= PARTNERS GALLERY ================= */}
        <section
          aria-labelledby="partners-gallery-heading"
          className="space-y-8 sm:space-y-12"
        >
          <h2 id="partners-gallery-heading" className="sr-only">
            Partner gallery
          </h2>

          {/* 
            Grid behavior:
            - 1 column (mobile)
            - 2 columns (tablet)
            - 4 columns (desktop)
          */}
          <ul
            role="list"
            className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {partners.map((partner) => (
              <li
                key={partner.name}
                role="listitem"
                className="flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm transition
                           motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-2 p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                    {partner.name}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {partner.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Interested in partnering with us?
          </h2>

          <p className="mx-auto max-w-prose text-neutral-600 leading-relaxed">
            We’re always open to strategic partnerships that drive innovation
            and deliver exceptional value.
          </p>

          {/* Buttons wrap cleanly on mobile */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button text="Become a partner" ariaLabel="Become a partner" />
            <Button text="Contact us" ariaLabel="Contact Li Rema Engineering" />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Partners;
