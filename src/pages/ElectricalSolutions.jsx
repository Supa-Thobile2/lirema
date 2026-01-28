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
      <main className="mx-auto max-w-7xl">

        {/* HERO SECTION */}
        <section className="text-center p-8 space-y-12">
          <header className="space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Electrify
            </p>

            {/* Responsive typography scales smoothly */}
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
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
          <div className="flex justify-center gap-4">
            <Button text="Explore" ariaLabel="Explore electrical services" />
            <Button text="Learn" ariaLabel="Learn more about our expertise" />
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="p-4 space-y-8">
          <header className="text-center space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
              Services
            </p>
            <h2 className="text-lg md:text-3xl font-semibold text-neutral-900">
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
                <h3 className="text-md font-semibold text-neutral-900">
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
        <section className="mx-auto max-w-3xl p-8 space-y-8">
          <header className="space-y-4">
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
          <ul className="list-disc list-inside text-sm sm:text-base leading-relaxed text-neutral-600  space-y-4">
            <li>Advanced safety protocols</li>
            <li>Certified technicians</li>
            <li>Comprehensive risk management</li>
          </ul>

          <div className="flex gap-4">
            <Button text="Learn" ariaLabel="Learn more about HT switching" />
            <Button text="Contact" ariaLabel="Contact our electrical team" />
          </div>
        </section>

        {/* SOLAR / RENEWABLE */}
        <section className="mx-auto max-w-3xl p-8 space-y-8">
          <header className="space-y-4">
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

          <div className="flex  gap-4">
            <Button text="Quote" ariaLabel="Install solar systems" />
            <Button text="Discuss" ariaLabel="Discuss renewable options" />
          </div>
        </section>

        {/* SECURITY / CCTV */}
        <section className="space-y-8 p-8">
          {/* 
            Stacks on mobile
            Side-by-side from md upward
          */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <header className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
                  CCTV & Security
                </p>
                <h2 className="text-lg md:text-3xl font-semibold text-neutral-900">
                  Advanced security monitoring
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  Integrated surveillance and access control solutions for homes and businesses.
                </p>
              </header>

              <div className="flex  gap-4">
                <Button text="Protect" ariaLabel="Protect your property" />
                <Button text="Consult" ariaLabel="Consult a security expert" />
              </div>
            </div>

            {/* 
              1 col on phones
              2 col on small tablets+
            */}
            <div className="grid gap-5 sm:grid-cols-2 space-y-2" role="list">
              {[
                'Access Control Systems',
                'Remote Management',
                'Alarm Systems',
                'Gate Motor Installation',
              ].map((service) => (
                <article
                  key={service}
                  role="listitem"
                  className="rounded-xl border border-neutral-200 p-5 sm:p-6  shadow-sm space-y-4"
                >
                  <h3 className="font-semibold text-neutral-900">
                    {service}
                  </h3>
                  <Button
                    text={`Learn`}
                    ariaLabel={`Learn`}
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
