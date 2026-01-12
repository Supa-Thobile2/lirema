import React from "react";

import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Work from "./QuoteForm";
import Choose from "./Choose";
import Team from "./Team";
import Quote from "./Quote";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Footer from "./Footer";

import { Header } from "../components";

function Home() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        className="
          mx-auto max-w-7xl
          
          space-y-4 sm:space-y-24
        
        "
      >
        <Hero />
        <Services />
        <About />
        <Choose />
        <Quote />
        <Subscribe />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;
