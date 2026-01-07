import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function Specialized() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* HERO */}
        <section className="text-center space-y-8">
          <header className="space-y-3">
            <p className="inline-block rounded-full border border-neutral-200 px-4 py-1 text-sm uppercase tracking-wide text-neutral-500">
              Build
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Specialized construction expertise
            </h1>

            <p className="mx-auto max-w-prose text-base md:text-lg leading-relaxed text-neutral-600">
              Precision engineering and advanced construction techniques that
              transform complex challenges into seamless architectural
              solutions.
            </p>
          </header>

          <div className="flex justify-center gap-4">
            <Button text="Explore construction services" />
            <Button text="Contact our specialists" />
          </div>
        </section>

        {/* FOUNDATIONS */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <header className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Foundations
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Structural engineering solutions
              </h2>

              <p className="leading-relaxed text-neutral-600 max-w-prose">
                We build strong foundations designed to withstand the harshest
                conditions. Our premium engineering transforms raw ground into
                stable platforms for complex architectural projects.
              </p>
            </header>

            <div className="flex  gap-4">
              <Button text="Learn about foundations" />
              <Button text="View foundation projects" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 p-12 text-center text-neutral-400">
            Image placeholder
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <header className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Infrastructure
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Advanced construction techniques
              </h2>
            </header>

            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Complex network development</li>
              <li>Integrated urban solutions</li>
              <li>Sustainable construction strategies</li>
            </ul>

            <div className="flex  gap-4">
              <Button text="Explore infrastructure services" />
              <Button text="View technical details" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 p-12 text-center text-neutral-400">
            Image placeholder
          </div>
        </section>

        {/* CUSTOM ENGINEERING */}
        <section className="text-center space-y-8 max-w-3xl mx-auto">
          <header className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Custom engineering solutions
            </h2>

            <p className="leading-relaxed text-neutral-600">
              Pushing the boundaries of construction technology through
              cutting-edge design and implementation. We turn complex challenges
              into refined architectural achievements.
            </p>
          </header>

          <div className="flex  gap-4">
            <Button text="Discover our solutions" />
            <Button text="Learn about our approach" />
          </div>
        </section>

        <Team />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Specialized
