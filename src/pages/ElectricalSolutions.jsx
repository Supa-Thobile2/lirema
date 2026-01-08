import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function ElectricalSolutions() {
  return (
    <>
      <Header />

      {/* 
        max-w-7xl limits line length on desktop
        padding starts smaller for phones, scales up
        space-y is reduced on mobile to avoid over-scrolling
      */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-24 sm:space-y-32">

        {/* HERO SECTION */}
        <section className="text-center space-y-6 sm:space-y-8">
          <header className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Electrify
            </p>

            {/* Responsive typography scales smoothly */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Electrical services refined
            </h1>

            {/* max-w-prose improves readability on large screens */}
            <p className="mx-auto max-w-prose text-base sm:text-lg leading-relaxed text-neutral-600">
              Reliable infrastructure designed to support your business operations
              with cutting-edge electrical expertise.
            </p>
          </header>

          {/* 
            Buttons wrap naturally on small screens
            padding handled inside Button for 44px tap targets
          */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button text="Explore electrical services" ariaLabel="Explore electrical services" />
            <Button text="Learn more about our expertise" ariaLabel="Learn more about our expertise" />
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="space-y-10 sm:space-y-12">
          <header className="text-center space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Services
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Comprehensive electrical solutions
            </h2>
            <p className="mx-auto max-w-prose leading-relaxed text-neutral-600">
              Precision electrical services across industrial, commercial,
              and residential sectors.
            </p>
          </header>

          {/* 
            1 col (mobile) → 2 col (tablet) → 3 col (desktop)
            gap increases with screen size
          */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
            {[
              {
                title: 'HT Switching & Authorization',
                desc: 'High-tension electrical management with strict safety compliance.',
              },
              {
                title: 'Transformer Maintenance',
                desc: 'Preventive and corrective care for optimal transformer performance.',
              },
              {
                title: 'Switchgear Maintenance',
                desc: 'Reliable protection systems ensuring uninterrupted power flow.',
              },
            ].map((item) => (
              <article
                key={item.title}
                role="listitem"
                className="rounded-xl border border-neutral-200 p-5 sm:p-6 space-y-3 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <header className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Expertise
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              HT Switching & Authorization
            </h2>
            <p className="leading-relaxed text-neutral-600">
              Precision electrical management for complex industrial environments.
            </p>
          </header>

          {/* Increased line-height improves mobile readability */}
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed text-neutral-600">
            <li>Advanced safety protocols</li>
            <li>Certified technicians</li>
            <li>Comprehensive risk management</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button text="Learn more about HT switching" ariaLabel="Learn more about HT switching" />
            <Button text="Contact our electrical team" ariaLabel="Contact our electrical team" />
          </div>
        </section>

        {/* SOLAR / RENEWABLE */}
        <section className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <header className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Sustainable energy
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Solar installation & renewable solutions
            </h2>
            <p className="leading-relaxed text-neutral-600">
              We design and install efficient solar systems that reduce energy costs
              while supporting a cleaner future.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Button text="Install solar systems" ariaLabel="Install solar systems" />
            <Button text="Discuss renewable options" ariaLabel="Discuss renewable options" />
          </div>
        </section>

        {/* SECURITY / CCTV */}
        <section className="space-y-10 sm:space-y-12">
          {/* 
            Stacks on mobile
            Side-by-side from md upward
          */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <header className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
                  CCTV & Security
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                  Advanced security monitoring
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  Integrated surveillance and access control solutions for homes and businesses.
                </p>
              </header>

              <div className="flex flex-wrap gap-4">
                <Button text="Protect your property" ariaLabel="Protect your property" />
                <Button text="Consult a security expert" ariaLabel="Consult a security expert" />
              </div>
            </div>

            {/* 
              1 col on phones
              2 col on small tablets+
            */}
            <div className="grid gap-5 sm:grid-cols-2" role="list">
              {[
                'Access Control Systems',
                'Remote Management',
                'Alarm Systems',
                'Gate Motor Installation',
              ].map((service) => (
                <article
                  key={service}
                  role="listitem"
                  className="rounded-xl border border-neutral-200 p-5 sm:p-6 space-y-3 shadow-sm"
                >
                  <h3 className="font-semibold text-neutral-900">
                    {service}
                  </h3>
                  <Button
                    text={`Learn more about ${service}`}
                    ariaLabel={`Learn more about ${service}`}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <Quote />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default ElectricalSolutions
