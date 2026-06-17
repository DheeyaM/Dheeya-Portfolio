import { useState } from 'react'
import Hero from './pages/Hero.jsx'
import './App.css'
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <>
     <NavBar />
      <Hero />
      <About />
    </>
  )
}

export default App
