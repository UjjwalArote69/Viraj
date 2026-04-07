import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
// import Careers from './components/Careers'
// import Blog from './components/Blog'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Contact/>
      {/* <Careers /> */}
      {/* <Blog /> */}
    </main>
  )
}

export default Home
