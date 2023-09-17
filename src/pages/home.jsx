import React from 'react'
import Menu from '../components/navigation/menu'
import Navbar from '../components/navigation/navbar'
import Hero from '../sections/hero'
import About from '../sections/about'
import Skills from '../sections/skills'
import Experience from '../sections/experience'
import Works from '../sections/works'

import useDarkMode from '../theme';

const Home = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'dark:bg-black dark:text-white' : 'bg-white text-black'}`}>
        <Navbar />
        <Menu/>
        <Hero/>
        <About/>
        <Experience/>
        {/* <Skills/> */}
        <Works/>

        
    </div>
  )
}

export default Home

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