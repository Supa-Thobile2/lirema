import { useState } from "react";
import Footer from "./Footer";
import { Header } from "../components";

/* ---------------- Shared Layout Components ---------------- */

/*
  Mobile-first container:
  - px-4 for phones
  - px-6 for tablets
  - px-8 for desktop
*/
function Container({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

/*
  Section spacing:
  - tighter on mobile
  - relaxed on larger screens
*/
function Section({ children, muted = false }) {
  return (
    <section
      className={`${
        muted ? "bg-neutral-50" : ""
      } py-14 sm:py-20`}
    >
      {children}
    </section>
  );
}

/*
  Section header with responsive typography
*/
function SectionHeader({ title, description }) {
  return (
    <header className="max-w-prose space-y-3 sm:space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}

/* ---------------- Product Data ---------------- */

const products = [
  {
    id: 1,
    title: "HVAC Installations",
    category: "hvac",
    image: "/images/hvac-installation.jpg",
    alt: "Commercial HVAC system installation",
  },
  {
    id: 2,
    title: "Industrial Ventilation",
    category: "industrial",
    image: "/images/industrial-ventilation.jpg",
    alt: "Industrial ventilation system in a factory",
  },
  {
    id: 3,
    title: "Preventative Maintenance",
    category: "maintenance",
    image: "/images/hvac-maintenance.jpg",
    alt: "Technician performing HVAC maintenance",
  },
  {
    id: 4,
    title: "Sustainable Construction",
    category: "construction",
    image: "/images/sustainable-construction.jpg",
    alt: "Sustainable construction materials and methods",
  },
];

/* ---------------- Page ---------------- */

export default function HistoryPage() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <>
      <Header />

      <main id="main-content" className="bg-white">
        {/* PAGE HEADER */}
        <header className="border-b border-neutral-200 bg-neutral-50">
          <Container>
            <div className="py-14 sm:py-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
                Our History & Company Profile
              </h1>
              <p className="mt-4 sm:mt-6 max-w-prose text-base sm:text-lg text-neutral-600 leading-relaxed">
                Discover the journey, values, and expertise behind LI Rema
                Engineering & Construction (Pty) Ltd.
              </p>
            </div>
          </Container>
        </header>

        {/* COMPANY OVERVIEW */}
        <Section>
          <Container>
            <SectionHeader title="Company Overview" />
            <div className="mt-6 sm:mt-8 max-w-prose space-y-4 sm:space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                LI REMA ENGINEERING AND CONSTRUCTION (Pty) Ltd is a proudly South
                African company established on <strong>03 May 2024</strong>, with
                its headquarters in <strong>Kempton Park, Gauteng</strong>.
              </p>
              <p>
                We specialize in engineering and construction services with a
                strong focus on HVAC systems, civil engineering, and specialized
                construction activities.
              </p>
            </div>
          </Container>
        </Section>

        {/* TIMELINE */}
        <Section muted>
          <Container>
            <SectionHeader title="Our Journey" />

            {/* Timeline optimized for mobile readability */}
            <ol className="relative mt-10 sm:mt-12 space-y-10 border-l border-neutral-300">
              {[
                {
                  year: "2024",
                  text: "Company established in Kempton Park, Gauteng.",
                },
                {
                  year: "2024",
                  text: "Registered on the Central Supplier Database (CSD).",
                },
                {
                  year: "Future",
                  text: "Expansion into sustainable and industrial engineering solutions.",
                },
              ].map((item, index) => (
                <li key={index} className="ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                    {item.year[0]}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                    {item.year}
                  </h3>
                  <p className="mt-1 sm:mt-2 max-w-prose text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* FILTERABLE GALLERY */}
        <Section>
          <Container>
            <SectionHeader
              title="Unique Products & Solutions"
              description="Specialized engineering and construction solutions designed for efficiency and sustainability."
            />

            {/* Touch-friendly filter buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              {["all", "hvac", "industrial", "maintenance", "construction"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition
                      focus-visible:ring-2 focus-visible:ring-neutral-900
                      ${
                        filter === cat
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100"
                      }`}
                  >
                    {cat === "all" ? "All" : cat}
                  </button>
                )
              )}
            </div>

            {/* Responsive gallery grid */}
            <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <figure
                  key={product.id}
                  className="group overflow-hidden rounded-xl border border-neutral-200 shadow-sm transition
                             motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300
                                 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4 text-sm font-medium text-neutral-700">
                    {product.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
