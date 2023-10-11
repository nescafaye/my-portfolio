import React from 'react'
import './App.css'
import { ThemeProvider } from './context/themeContext';
import { HoverProvider } from './context/hoverContext';

import Home from './pages/home'

function App() {


  return (
    <>
    <ThemeProvider>
      <HoverProvider>
        <Home/>
      </HoverProvider>
    </ThemeProvider>
    </>
  )
}

export default App
