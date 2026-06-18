import { useState } from 'react'
import Hero from './pages/Hero.jsx'
import './App.css'
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

function App() {

  return (
    <>
     <NavBar />
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default App
