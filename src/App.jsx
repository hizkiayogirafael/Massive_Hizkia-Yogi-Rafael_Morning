import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Skills from './components/Pages/Skills'
import Contact from './components/Pages/Contact'
import Navbar from './components/Navbar'

function App() {

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
