import React, { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';

import Menu from "../components/navigation/menu";
import Navbar from "../components/navigation/navbar";
import Cursor from "../components/cursor/cursor";

const Hero = React.lazy(() => import('../sections/hero'));
const About = React.lazy(() => import('../sections/about'));
const Skills = React.lazy(() => import('../sections/skills'));
const Works = React.lazy(() => import('../sections/works'));
const Other = React.lazy(() => import('../sections/other'));
const Contact = React.lazy(() => import('../sections/contact'));
const Marquee = React.lazy(() => import('../components/marquee/marquee'));

import useDarkMode from "../theme";

import { data } from "../data"

const Home = () => {

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    // Clean up the scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark dark:text-light bg-light text-dark-2" ref={scrollContainerRef} data-scroll-container>

        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Menu/>
        <Cursor />

        <Hero isDarkMode={isDarkMode} intro={data.intro}/>

        <Marquee baseVelocity={5} text="About" size="large" isDarkMode={isDarkMode}/>

        <About summary={data.summary} link={data.link} desc={data.desc} socials={data.socials}/>
        <Skills skills={data.skills}/>

        <Marquee baseVelocity={6} text="Works" size="large" isDarkMode={isDarkMode} data-scroll-section>Works</Marquee>

        <Works projects={data.projects}/>
        {/* <Other otherProjects={data.otherProjects}/> */}
        <Contact socials={data.socials}/>

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
