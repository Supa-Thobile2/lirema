import React from 'react';
import { Button, Header } from '../components';
import img2 from '../images/hvac3.jpg';
import img3 from '../images/construction3.webp';
import img4 from '../images/construction2.webp';
import img5 from '../images/electric1.jpg';
import img6 from '../images/camera2.webp';
import img7 from '../images/camera1.jpg';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

function ServiceCard({ title, subtitle, description, image, buttons }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1 space-y-3">
        {subtitle && <p className="text-sm font-medium text-gray-500">{subtitle}</p>}
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {description && <p className="text-sm text-gray-600">{description}</p>}
        <div className="flex flex-wrap gap-3 mt-2">
          {buttons.map((btn, idx) => (
            <Button key={idx} text={btn} />
          ))}
        </div>
      </div>
      {image && (
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl shadow-sm"
          />
        </div>
      )}
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="mt-16 px-6 md:px-16 text-center md:text-left space-y-4">
        <p className="text-sm font-medium text-gray-500 uppercase">Build</p>
        <h1 className="text-2xl md:text-4xl font-bold">Engineering solutions that work</h1>
        <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
          Delivering precise technical solutions across multiple engineering disciplines with
          proven reliability and professional commitment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <Button text="Services" />
          <Button text="Contact" />
        </div>
      </div>

      {/* Service Sections */}
      <div className="px-6 md:px-16 mt-12 space-y-12">
        <ServiceCard
          title="HVAC services for comfort"
          description="Comprehensive heating and cooling solutions tailored to your needs."
          image={img2}
          buttons={['Learn More']}
        />

        <ServiceCard
          subtitle="Civil"
          title="Civil and Construction services that build futures"
          description="Integrated project management, sustainable construction, and comprehensive site management."
          image={img3}
          buttons={['Explore', 'Details']}
        />

        <ServiceCard
          title="Specialized construction solutions"
          description="Custom engineering for unique project requirements."
          image={img4}
          buttons={['Learn', 'Details']}
        />

        <ServiceCard
          subtitle="Electrify"
          title="Advanced electrical system design and maintenance"
          image={img5}
          buttons={['Learn', 'Details']}
        />

        <ServiceCard
          subtitle="Smart"
          title="Smart home solutions for modern living"
          image={img7}
          buttons={['Learn', 'Details']}
        />

        {/* Call to Action */}
        <ServiceCard
          title="Get your project started today"
          image={img6}
          buttons={['Quote', 'Details']}
        />
      </div>

      {/* Team and Contact */}
      <div className="mt-16">
        <Team />
      </div>
      <div className="mt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;
