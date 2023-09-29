import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-dark dark:text-light bg-light text-dark-2'>
      <Home/>
    </div>
  )
}

export default App
