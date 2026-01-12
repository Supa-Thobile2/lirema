import React from "react"
import { Header } from "../components"
import Footer from "./Footer"

import imgJohn from "../images/camera1.jpg"
import imgJane from "../images/camera1.jpg"
import imgMike from "../images/camera1.jpg"
import imgPartner1 from "../images/camera1.jpg"
import imgPartner2 from "../images/camera1.jpg"
import imgPartner3 from "../images/camera1.jpg"

function OurTeam() {
  /* ================= DATA ================= */
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Chief Engineer",
      qualification: "MSc Civil Engineering",
      image: imgJohn,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      qualification: "MBA, PMP Certified",
      image: imgJane,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Electrical Engineer",
      qualification: "BEng Electrical Engineering",
      image: imgMike,
    },
  ]

  const partners = [
    {
      id: 1,
      name: "TechBuild Co.",
      description: "Specializing in sustainable construction solutions.",
      image: imgPartner1,
    },
    {
      id: 2,
      name: "ElectroPro Ltd.",
      description: "Experts in smart electrical systems and automation.",
      image: imgPartner2,
    },
    {
      id: 3,
      name: "GreenInfra Inc.",
      description: "Innovative civil infrastructure solutions.",
      image: imgPartner3,
    },
  ]

  return (
    <>
      <Header />

      <main className="bg-neutral-50">
        {/* ================= TEAM ================= */}
        <section
          aria-labelledby="team-heading"
          className="
            mx-auto max-w-7xl
            
           
          "
        >
          <header className="mx-auto max-w-3xl text-center space-y-4 p-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Our Team
            </p>

            <h1
              id="team-heading"
              className="text-md sm:text-3xl lg:text-4xl font-bold text-neutral-900"
            >
              Meet the Experts Driving Our Success
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
              Our dedicated professionals combine deep technical expertise with
              years of experience to deliver reliable engineering and
              construction solutions.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="
                  rounded-2xl bg-white
                  p-6 text-center
                  border border-neutral-200
                  shadow-sm
                  transition
                  hover:shadow-md
                "
              >
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="
                    mx-auto
                    h-28 w-28 sm:h-32 sm:w-32
                    rounded-full
                    object-cover
                    shadow-sm
                  "
                />

                <h3 className="mt-4 text-md font-semibold text-neutral-900">
                  {member.name}
                </h3>

                <p className="text-sm font-medium text-neutral-600">
                  {member.role}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {member.qualification}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PARTNERS ================= */}
        <section
          aria-labelledby="partners-heading"
          className="
            bg-white
            mx-auto max-w-7xl
            p-4 space-y-4
          "
        >
          <header className="mx-auto max-w-3xl text-center space-y-2 p-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Partners
            </p>

            <h2
              id="partners-heading"
              className="text-md sm:text-3xl lg:text-4xl font-bold text-neutral-900"
            >
              Our Trusted Partners
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
              We collaborate with industry leaders to ensure quality,
              innovation, and efficiency across all projects.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-neutral-200
                  bg-neutral-50
                  shadow-sm
                  transition
                  hover:shadow-md
                "
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5 ">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {partner.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-600">
                    {partner.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default OurTeam
