import React from "react";
import { Header } from "../components";
import imgJohn from "../images/camera1.jpg";
import imgJane from "../images/camera1.jpg";
import imgMike from "../images/camera1.jpg";
import imgPartner1 from "../images/camera1.jpg";
import imgPartner2 from "../images/camera1.jpg";
import imgPartner3 from "../images/camera1.jpg";
import Footer from "./Footer";

function OurTeam() {
  // Team members data
  const teamMembers = [
    {
      name: "",
      role: "Chief Engineer",
      qualification: "MSc Civil Engineering",
      image: imgJohn,
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      qualification: "MBA, PMP Certified",
      image: imgJane,
    },
    {
      name: "Mike Johnson",
      role: "Electrical Engineer",
      qualification: "BEng Electrical Engineering",
      image: imgMike,
    },
  ];

  // Partners data
  const partners = [
    {
      name: "TechBuild Co.",
      description: "Specializing in sustainable construction solutions.",
      image: imgPartner1,
    },
    {
      name: "ElectroPro Ltd.",
      description: "Experts in smart electrical systems and automation.",
      image: imgPartner2,
    },
    {
      name: "GreenInfra Inc.",
      description: "Innovative civil infrastructure solutions.",
      image: imgPartner3,
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* ================= TEAM SECTION ================= */}
        <section className="py-20 px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase">Our Team</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet the Experts Driving Our Success
            </h1>
            <p className="text-gray-700">
              Our dedicated team combines technical expertise with years of experience to deliver exceptional engineering and construction services.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover shadow-sm"
                  />
                )}
                <h3 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.qualification}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PARTNERS SECTION ================= */}
        <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Trusted Partners
            </h2>
            <p className="text-gray-700">
              We collaborate with industry-leading partners to ensure quality, innovation, and efficiency across all projects.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {partner.image && (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default OurTeam;
