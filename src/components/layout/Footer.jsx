import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
  const footerRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current.children, { y: 30, opacity: 0 })

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(contentRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          })
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white pt-[clamp(48px,6vw,80px)] pb-6">
      <div className="container-main">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[clamp(32px,5vw,80px)] mb-[clamp(48px,6vw,80px)]">
          <div>
            <div className="font-display text-[1.6rem] tracking-[0.08em] mb-5">VIRAJCE</div>
            <p className="text-[0.72rem] text-gray-500 leading-[1.7] max-w-[340px]">
              Global engineering consultancy service across 50 nations, specializing in marine infrastructure land reclamation, breakwater design, and industrial structural analysis. Partnering the most ambitious coastlines worldwide for over three decades.
            </p>
          </div>

          <div>
            <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-5">Navigation</div>
            {[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Projects', path: '/projects' },
              { label: 'About', path: '/about' },
              { label: 'Careers', path: '/careers' },
            ].map(link => (
              <Link key={link.path} to={link.path} className="block text-[0.78rem] text-gray-400 mb-3 transition-colors duration-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-5">Contact</div>
            {['info@virajce.com', '+44 123 456 7890', 'London, United Kingdom', 'Mumbai, India'].map(text => (
              <span key={text} className="block text-[0.78rem] text-gray-400 mb-3">{text}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-[0.65rem] text-gray-600">
            © {new Date().getFullYear()} Virajce Engineering Consultancy. All rights reserved.
          </span>
          <span className="text-[0.65rem] text-gray-600">Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
