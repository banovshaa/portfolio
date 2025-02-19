import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
