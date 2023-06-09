import { useState } from 'react'
import Navbar from './components/Layouts/navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Skills from './components/Pages/Skills'
import Contact from './components/Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <h1 id='skills' className='text-center py-[10px] text-xl font-medium lg:text-4xl lg:py-[25px]'>-- Kita Ngapain Aja Sih --</h1>
      <Skills />
      <Contact />
    </>
  )
}

export default App
