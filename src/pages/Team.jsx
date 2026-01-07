import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import img from '../assets/keyGuy.png';

const teamMembers = [
  {
    name: 'Litaba Letsatsi',
    role: 'Chief Technician',
    description:
      'Visionary leader with decades of experience in engineering and management',
    image: img,
  },
  {
    name: 'Tshego Leshilo',
    role: 'Accounts',
    description: 'Expert in finance management for engineering projects',
    image: img,
  },
  {
    name: 'Sphesihle Mntambo',
    role: 'Technician',
    description: 'Skilled technician delivering precise engineering solutions',
    image: img,
  },
  {
    name: 'Lethabo Mohato',
    role: 'Technician',
    description: 'Dedicated professional with hands-on technical expertise',
    image: img,
  },
];

function Team() {
  return (
    <>
      {/* Team Section */}
      <section
        id="team"
        className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
      >
        <header className="mx-auto max-w-prose text-center space-y-3">
          <p className="text-sm uppercase tracking-wide text-neutral-500">Team</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Our Team
          </h2>
          <p className="text-base leading-relaxed text-neutral-600">
            Experienced professionals driving technical innovation
          </p>
        </header>

        <div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          role="list"
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              role="listitem"
              className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-neutral-400"
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
              <p className="text-sm font-medium text-neutral-600">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 bg-gray-50"
      >
        <header className="mx-auto max-w-prose text-center space-y-3">
          <p className="text-sm uppercase tracking-wide text-neutral-500">Contact</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Get in Touch
          </h2>
          <p className="text-base leading-relaxed text-neutral-600">
            Reach out to our team via email, phone, or LinkedIn for inquiries or collaboration.
          </p>
        </header>

        <div className="mt-12 flex flex-col sm:flex-row sm:justify-center gap-8 text-center sm:text-left">
          {/* Email */}
          <div className="flex items-center gap-3">
            <MdEmail className="h-6 w-6 text-blue-500" />
            <a
              href="mailto:contact@company.com"
              className="text-neutral-900 font-medium hover:underline"
            >
              contact@company.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <MdPhone className="h-6 w-6 text-green-500" />
            <a
              href="tel:+1234567890"
              className="text-neutral-900 font-medium hover:underline"
            >
              +1 (234) 567-890
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <FaLinkedin className="h-6 w-6 text-blue-700" />
            <a
              href="https://www.linkedin.com/company/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 font-medium hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
