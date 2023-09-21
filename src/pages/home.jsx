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

import data from "../data"
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../config/firebase"

const Home = () => {

  const handleSubmit = () => {
    const ref = collection(firestore, "user"); // Firebase creates this automatically

    try {
      addDoc(ref, data).then(() => {
        console.log("Data submitted successfully!");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark-60 dark:text-dark-10 bg-white text-black">

    <button onClick={handleSubmit}>Save Data to Firebase</button>

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
