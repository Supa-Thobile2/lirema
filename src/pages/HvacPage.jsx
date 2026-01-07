import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import img from '../assets/keyGuy.png'

function HvacPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16 space-y-32">
        {/* HERO */}
        <section className="text-center space-y-8">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Comfort
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Precision HVAC solutions
            </h1>

            <p className="mx-auto max-w-prose text-base md:text-lg leading-relaxed text-neutral-600">
              Engineered climate control systems designed to optimize comfort and
              efficiency for residential and commercial spaces with expert
              technical precision.
            </p>
          </header>

          <div className="flex  justify-center gap-4">
            <Button text="Explore HVAC services" />
            <Button text="Contact our HVAC team" />
          </div>
        </section>

        {/* INSTALLATION */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <header className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Install
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Professional HVAC installation for optimal comfort
              </h2>

              <p className="leading-relaxed text-neutral-600 max-w-prose">
                We design and implement precise HVAC systems tailored to your
                specific environmental needs. Our technicians ensure seamless
                integration and maximize efficiency for every space.
              </p>
            </header>

            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Custom systems matched to your requirements</li>
              <li>Energy-efficient solutions to reduce operational costs</li>
              <li>Advanced temperature control technologies</li>
            </ul>

            <div className="flex gap-4">
              <Button text="Consult an HVAC expert" />
              <Button text="View installation details" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <img
              src={img}
              alt="HVAC installation technician at work"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </section>

        {/* MAINTENANCE */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <header className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Maintain
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Comprehensive HVAC maintenance for long-term performance
              </h2>

              <p className="leading-relaxed text-neutral-600 max-w-prose">
                Regular maintenance prevents unexpected breakdowns and extends
                system lifespan. Our skilled technicians provide thorough
                inspections and proactive servicing.
              </p>
            </header>

            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Scheduled preventative maintenance programs</li>
              <li>Detailed diagnostics and performance tracking</li>
              <li>Fast response times with expert technical advice</li>
            </ul>

            <div className="flex gap-4">
              <Button text="Schedule maintenance" />
              <Button text="Learn about maintenance plans" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <img
              src={img}
              alt="HVAC system maintenance inspection"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </section>

        {/* REPAIR */}
        <section className="space-y-12">
          <header className="text-center space-y-3">
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Repair
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Swift HVAC repair services
            </h2>

            <p className="mx-auto max-w-prose leading-relaxed text-neutral-600">
              Rapid diagnostics and precise repair solutions for all HVAC
              systems.
            </p>
          </header>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="mx-auto w-full max-w-md">
              <img
                src={img}
                alt="HVAC repair and troubleshooting"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Expert troubleshooting and resolution
              </h3>

              <p className="leading-relaxed text-neutral-600">
                We diagnose and resolve complex HVAC issues quickly, minimizing
                downtime while restoring comfort and efficiency.
              </p>

              <div className="flex gap-4">
                <Button text="Request HVAC repair" />
                <Button text="Contact repair specialists" />
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO / TRUST */}
        <section className="text-center space-y-8">
          <div className="rounded-xl border border-neutral-200 p-12 text-neutral-400">
            Video placeholder
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-900">
              Li Rema Engineering & Construction transforms HVAC systems
            </h2>

            <div className="flex items-center justify-center gap-6 text-neutral-400">
              <span aria-label="Company divider">—</span>
              <span>Logo</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-8">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              HVAC
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Ready to optimize your climate control?
            </h2>

            <p className="mx-auto max-w-prose leading-relaxed text-neutral-600">
              Get expert HVAC solutions designed for your specific environment
              and performance needs.
            </p>
          </header>

          <div className="flex  justify-center gap-4">
            <Button text="Request an HVAC quote" />
            <Button text="Contact our team" />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default HvacPage
