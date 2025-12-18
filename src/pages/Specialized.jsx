import React from 'react';
import { Button, Header } from '../components';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';
import Quote from './Quote';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Specialized() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* HERO */}
        <section
          className="px-6 py-24 md:px-20 text-center"
          aria-labelledby="specialized-heading"
        >
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block rounded-full border px-4 py-1 text-xs font-semibold tracking-wide">
              Build
            </span>

            <h1
              id="specialized-heading"
              className="text-3xl md:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Specialized construction expertise
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Precision engineering and advanced construction techniques that
              transform complex challenges into seamless architectural solutions.
            </p>

            <div className="flex justify-center gap-4 pt-6">
              <Button text="Explore" />
              <Button text="Contact" variant="secondary" />
            </div>
          </motion.div>
        </section>

        {/* SECTION: Foundations */}
        <section className="px-6 py-20 md:px-20 bg-gray-50">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Foundations
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                Structural engineering solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We build strong foundations that withstand the harshest conditions.
                Our premium engineering transforms raw ground into stable platforms
                for complex architectural projects.
              </p>

              <div className="flex gap-4">
                <Button text="Learn more" />
                <Button text="View projects" variant="secondary" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="h-64 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400"
            >
              Image
            </div>
          </motion.div>
        </section>

        {/* SECTION: Infrastructure */}
        <section className="px-6 py-20 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Infrastructure
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                Advanced construction techniques
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complex network development</li>
                <li>Integrated urban solutions</li>
                <li>Sustainable construction strategies</li>
              </ul>

              <div className="flex gap-4 pt-2">
                <Button text="Explore" />
                <Button text="Details" variant="secondary" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="h-64 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400"
            >
              Image
            </div>
          </motion.div>
        </section>

        {/* SECTION: Custom Engineering */}
        <section className="px-6 py-24 md:px-20 bg-gray-50 text-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Custom engineering solutions
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Pushing the boundaries of construction technology through cutting-edge
              design and execution. We transform complexity into architectural
              excellence.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Button text="Discover" />
              <Button text="Our approach" variant="secondary" />
            </div>
          </motion.div>
        </section>

        {/* SHARED SECTIONS */}
        <Team />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Specialized;
