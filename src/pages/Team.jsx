import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import img from '../assets/keyGuy.png'

// ================= TEAM MEMBERS DATA =================
const teamMembers = [
  {
    name: 'Litaba Letsatsi',
    role: 'Chief Technician',
    description:
      'Visionary leader with decades of experience in engineering and management',
    image: img,
    email: 'litaba@company.com',
    phone: '+1234567890',
    linkedin: 'https://www.linkedin.com/in/litababetsatsi',
  },
  {
    name: 'Tshego Leshilo',
    role: 'Accounts',
    description: 'Expert in finance management for engineering projects',
    image: img,
    email: 'tshego@company.com',
    phone: '+1234567891',
    linkedin: 'https://www.linkedin.com/in/tshego-leshilo',
  },
  {
    name: 'Sphesihle Mntambo',
    role: 'Technician',
    description: 'Skilled technician delivering precise engineering solutions',
    image: img,
    email: 'sphesihle@company.com',
    phone: '+1234567892',
    linkedin: 'https://www.linkedin.com/in/sphesihle-mntambo',
  },
  {
    name: 'Lethabo Mohato',
    role: 'Technician',
    description: 'Dedicated professional with hands-on technical expertise',
    image: img,
    email: 'lethabo@company.com',
    phone: '+1234567893',
    linkedin: 'https://www.linkedin.com/in/lethabo-mohato',
  },
]

// ================= TEAM COMPONENT =================
function Team() {
  return (
    <section
      id="team"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12  space-y-2 p-4 "
    >
      {/* Section Header */}
      <header className="mx-auto max-w-xl text-center space-y-4">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500">
          Team
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900">
          Our Team
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-600">
          Experienced professionals driving technical innovation
        </p>
      </header>

      {/* Team Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col items-center text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm transition transform hover:scale-105 hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            tabIndex={0}
          >
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              className="mb-4 h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover"
            />

            <figcaption className="">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base font-medium text-neutral-600">
                {member.role}
              </p>
              <p className="mt-2 text-sm sm:text-base text-neutral-500 leading-relaxed">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center gap-4 text-neutral-600">
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-500 transition"
                  aria-label={`Email ${member.name}`}
                >
                  <MdEmail size={20} />
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="hover:text-green-500 transition"
                  aria-label={`Call ${member.name}`}
                >
                  <MdPhone size={20} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Team
