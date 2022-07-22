import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

const App = () => {
  return (
    <>
      <style>{"body { background-color: #000; }"}</style>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
