import React from "react";
import { useState, useEffect } from "react";

import Menu from "../components/navigation/menu";
import Navbar from "../components/navigation/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Skills from "../sections/skills";
import Works from "../sections/works";
import Cursor from "../components/cursor/cursor";
import Marquee from "../components/marquee/marquee";
import useDarkMode from "../theme";

import { data } from "../data"

const Home = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark-60 dark:text-dark-10 bg-[#F6FDFF] text-black">

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Menu />
      <Hero intro={data.intro} quote={data.quote}/>
      <Marquee text="Whatcha doin'" size="small"/>
      <About summary={data.summary} desc={data.desc} socials={data.socials}/>
      <Skills skills={data.skills}/>
      <Marquee text="Works" size="large"/>
      <Works projects={data.projects}/>

      <Cursor />
    </div>
  );
};

export default Home;

// add icons x
// hide nav on scroll -
// component styles x
// dark mode x
// neon styles -
// responsive mobile design x
// scroll animations -
// custom scroll track x
// cursor design x
// prompt animation x
// json data x -
// wrap reverse works x
// images (database) x
