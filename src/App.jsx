import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

// Import Layouts & Pages
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader' // <-- Import the Loader
import Home from './pages/Landing/Home'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/Careers'

gsap.registerPlugin(ScrollTrigger)

function LenisScrollTriggerBridge() {
  useLenis((lenis) => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)
  }, [])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
    ScrollTrigger.refresh()
  }, [pathname, lenis])

  return null
}

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* The loader sits on top of everything. 
        When it finishes its exit animation, it sets loading to false and unmounts.
      */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 0.8,
        }}
      >
        <LenisScrollTriggerBridge />
        <AppRoutes />
      </ReactLenis>
    </>
  )
}

export default App