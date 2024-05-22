import './index.css'
import HeroBackground from './assets/HeorBackground.json'
import Lottie from 'lottie-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Music from './components/Music'
import About from './components/About'
import Shows from './components/Shows'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Lottie
        animationData={HeroBackground}
        className='fixed left-0 right-0 bottom-0 w-full -z-10'
      />
      <Navbar />
      <Hero />
      <Music />
      <Shows />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
