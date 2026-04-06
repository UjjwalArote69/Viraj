import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef()
  const mobileMenuRef = useRef()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  // Animate mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (menuOpen) {
      gsap.set(mobileMenuRef.current, { display: 'flex' })
      gsap.from(mobileMenuRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.from(mobileMenuRef.current.children, {
        y: -8,
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.1,
      })
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: 'none', opacity: 1 })
        },
      })
    }
  }, [menuOpen])

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Land', path: '/' },
    { label: 'About', path: '/about' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-200 transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : ''}`}
    >
      <div className="container-main flex items-center justify-between h-16">
        <Link to="/" className="font-display text-[1.6rem] tracking-[0.08em] text-black">
          VIRAJCE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-[0.7rem] font-medium tracking-[0.12em] uppercase text-gray-600 transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-[22px] py-2.5 bg-black text-white transition-all duration-300 hover:bg-gray-800 hover:-translate-y-px"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="flex md:hidden flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 flex-col gap-5 px-[clamp(20px,4vw,80px)] py-6"
        style={{ display: 'none' }}
      >
        {navLinks.map(link => (
          <Link key={link.path} to={link.path} className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-gray-600">
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-[22px] py-2.5 bg-black text-white text-center">
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
