import React from "react";
import { useState, useEffect } from "react";

import Menu from "../components/navigation/menu";
import Navbar from "../components/navigation/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Skills from "../sections/skills";
import Works from "../sections/works";
import Contact
 from "../sections/contact";
import Cursor from "../components/cursor/cursor";
import Marquee from "../components/marquee/marquee";
import useDarkMode from "../theme";

import { data } from "../data"
import Other from "../sections/other";

const Home = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark dark:text-light bg-light text-dark-2">

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Menu />

      <Hero intro={data.intro} quote={data.quote}/>
      <Marquee text="Whatcha doin'" size="small"/>
      <About summary={data.summary} link={data.link} desc={data.desc} socials={data.socials}/>
      <Skills skills={data.skills}/>
      <Marquee text="Works" size="large" isDarkMode={isDarkMode}/>
      <Works projects={data.projects}/>
      <Other/>
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
