import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
