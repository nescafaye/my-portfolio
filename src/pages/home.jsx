import React, { Suspense } from "react";

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

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark:bg-dark dark:text-light bg-light text-dark-2">

      <Suspense fallback={
        <div className="w-full h-screen flex justify-center items-center font-primary text-xl lg:text-3xl">
          Loading...
        </div>}>

        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Menu/>
        <Cursor />

        <Hero intro={data.intro} quote={data.quote} />

        <Marquee baseVelocity={5} text="About" size="large" isDarkMode={isDarkMode} />

        <About summary={data.summary} link={data.link} desc={data.desc} socials={data.socials}/>
        <Skills skills={data.skills}/>

        <Marquee baseVelocity={6} text="Works" size="large" isDarkMode={isDarkMode}>Works</Marquee>

        <Works projects={data.projects}/>
        {/* <Other otherProjects={data.otherProjects}/> */}
        <Contact socials={data.socials}/>
        
      </Suspense>

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
