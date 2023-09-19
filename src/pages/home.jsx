import React from "react";
import { useState, useEffect } from "react";

import Menu from "../components/navigation/menu";
import Navbar from "../components/navigation/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Skills from "../sections/skills";
import Experience from "../sections/experience";
import Works from "../sections/works";
import Cursor from "../components/cursor/cursor";
import useDarkMode from "../theme";

import handleSubmit from "../config/test_firebase";
import { useRef } from "react";

const Home = () => {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark-60 dark:text-dark-10 bg-white text-black">

      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
      
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Menu />
      <Hero />
      <About />
      <Experience />
      {/* <Skills/> */}
      <Works />

      <Cursor />
    </div>
  );
};

export default Home;

// add icons x
// hide nav on scroll -
// component styles x
// dark mode -
// neon styles
// responsive mobile design x
// scroll animations
// custom scroll track x
// cursor design -
// prompt animation -
// json data x -
// wrap reverse works -
// images (database? aws) -
