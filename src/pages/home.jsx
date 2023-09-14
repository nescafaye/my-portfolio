import React from 'react'
import Menu from '../components/navigation/menu'
import Navbar from '../components/navigation/navbar'
import Hero from '../sections/hero'
import About from '../sections/about'
import Skills from '../sections/skills'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Menu/>

        <Hero/>
        <About/>
        <Skills/>
    </div>
  )
}

export default Home