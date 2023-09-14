import React from 'react'
import Menu from '../components/navigation/menu'
import Navbar from '../components/navigation/navbar'
import Hero from '../sections/hero'
import About from '../sections/about'
import Skills from '../sections/skills'
import Experience from '../sections/experience'
import Works from '../sections/works'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
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