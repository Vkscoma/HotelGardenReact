import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroBackground from './assets/HeorBackground.json'
const Lottie = () => import('lottie-react')
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Music from './components/Music'
import About from './components/About'
import Shows from './components/Shows'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Roomservice from './pages/Roomservice'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Lottie
              animationData={HeroBackground}
              className='background-lottie'
            />
            <div className='content'>
              <Navbar />
              <Hero />
              <Music />
              <Shows />
              <About />
              <Contact />
              <Footer />
            </div>
          </div>
        } />
        <Route path='/roomservice' element={<Roomservice />} />
      </Routes>
    </Router>
  )
}

export default App
