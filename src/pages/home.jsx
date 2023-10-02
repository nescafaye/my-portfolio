import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

import Menu from "../components/navigation/menu";
import Navbar from "../components/navigation/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Skills from "../sections/skills";
import Works from "../sections/works";
import Other from "../sections/other";
import Contact from "../sections/contact";
import Cursor from "../components/cursor/cursor";
import Marquee from "../components/marquee/marquee";

import useDarkMode from "../theme";

import { data } from "../data"

const Home = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark dark:text-light bg-light text-dark-2">

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Menu/>

      <Hero intro={data.intro} quote={data.quote} />

      <Marquee isDarkMode={isDarkMode} baseVelocity={5} text="Whatcha doin'" size="small"/>

      <About summary={data.summary} link={data.link} desc={data.desc} socials={data.socials}/>
      <Skills skills={data.skills}/>

      <Marquee baseVelocity={6} text="Works" size="large" isDarkMode={isDarkMode}>Works</Marquee>

      <Works projects={data.projects}/>
      <Other otherProjects={data.otherProjects}/>
      <Contact/>

      {/* <Cursor /> */}
    </div>
  );
};

export default Home;

// add icons x
// show menu on scroll x
// component styles x
// dark mode x
// responsive mobile design x 
// custom scroll track x
// json data x - copy
// wrap reverse works x
// images (database) x
// prompt animation x 
// svg elements x

// neon styles - 
// show arrow on hover - works ????
// cursor design x - edit 
// scroll animations -
// logo
