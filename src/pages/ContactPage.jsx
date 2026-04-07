import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const offices = [
  {
    city: 'London',
    country: 'United Kingdom',
    address: '125 Coastal Boulevard, District 4\nLondon, EC1A 1BB',
    phone: '+44 123 456 7890',
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: 'Level 42, Virajce Tower, BKC\nMumbai, 400051',
    phone: '+91 22 4089 0000',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '8 Marina View, Asia Square\nSingapore, 018960',
    phone: '+65 6789 0123',
  }
]

const ContactPage = () => {
  const mainRef = useRef()
  const headerRef = useRef()
  const contentRef = useRef()
  const officesRef = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Page Header Reveal
      gsap.set(headerRef.current.children, { y: "120%", opacity: 0, rotateX: -10 })
      
      const tl = gsap.timeline({ delay: 0.1 })
      tl.to(headerRef.current.children, {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      })

      // 2. Form & Info Reveal
      gsap.set('.contact-reveal', { y: 40, opacity: 0 })
      tl.to('.contact-reveal', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.6')

      // 3. Offices Grid Reveal
      gsap.set('.office-card', { y: 40, opacity: 0 })
      ScrollTrigger.create({
        trigger: officesRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to('.office-card', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          })
        }
      })

    }, mainRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Inquiry received. Our engineering team will contact you shortly.')
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-white pt-[clamp(120px,15vw,180px)] pb-[clamp(80px,10vw,140px)]">
      
      <div className="container-main">
        {/* Page Header */}
        <div ref={headerRef} className="max-w-[1000px] mb-[clamp(60px,8vw,100px)] perspective-[1000px]">
          <div className="overflow-hidden mb-6 pb-2">
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] uppercase leading-[0.9] tracking-[0.01em] transform-origin-bottom">
              Initiate<br />Inquiry.
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-[0.85rem] sm:text-[1rem] text-gray-500 leading-relaxed max-w-[600px] transform-origin-bottom">
              Whether you require preliminary feasibility studies or full-scale structural execution, our global engineering team is ready to analyze your parameters.
            </p>
          </div>
        </div>

        {/* Main Content Split */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[clamp(60px,8vw,120px)] mb-[clamp(100px,12vw,160px)]">
          
          {/* Left: Direct Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="contact-reveal">
              <h3 className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-6">
                Direct Communication
              </h3>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:info@virajce.com" className="group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 transition-colors duration-300 group-hover:border-black group-hover:bg-black">
                    <Mail size={16} strokeWidth={1.5} className="text-gray-500 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.1em] uppercase text-gray-500 mb-1">Email</div>
                    <div className="text-[0.9rem] font-medium text-black">info@virajce.com</div>
                  </div>
                </a>

                <a href="tel:+441234567890" className="group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 transition-colors duration-300 group-hover:border-black group-hover:bg-black">
                    <Phone size={16} strokeWidth={1.5} className="text-gray-500 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.1em] uppercase text-gray-500 mb-1">Global Support</div>
                    <div className="text-[0.9rem] font-medium text-black">+44 123 456 7890</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-reveal h-px w-full bg-gray-200" />

            <div className="contact-reveal">
              <h3 className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
                Response Times
              </h3>
              <p className="text-[0.85rem] text-gray-500 leading-relaxed flex items-start gap-3">
                <Clock size={16} strokeWidth={1.5} className="shrink-0 mt-0.5 text-black" />
                Standard inquiries are reviewed by our technical directors within 24-48 business hours. For emergency structural assessments, please indicate "URGENT" in your project brief.
              </p>
            </div>
          </div>

          {/* Right: Premium Inquiry Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 contact-reveal bg-gray-50/50 p-[clamp(24px,4vw,48px)] border border-gray-100">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative group">
                <label htmlFor="name" className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2.5 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative group">
                <label htmlFor="company" className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2.5 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-gray-300"
                  placeholder="Company Ltd."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative group">
                <label htmlFor="email" className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2.5 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-gray-300"
                  placeholder="john@company.com"
                />
              </div>
              <div className="relative group">
                <label htmlFor="service" className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Primary Interest
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2.5 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 text-black appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-300">Select a discipline...</option>
                  <option value="marine">Marine Simulation</option>
                  <option value="coastal">Coastal Protection</option>
                  <option value="dredging">Dredging Analysis</option>
                  <option value="port">Port Planning</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div className="relative group mt-2">
              <label htmlFor="message" className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
                Project Parameters
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2.5 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 resize-none placeholder:text-gray-300"
                placeholder="Outline your engineering requirements, timeline, and location..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 w-full sm:w-auto self-end mt-4 py-4 px-12 bg-black text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase border border-black transition-colors duration-400 hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                Transmit Inquiry
                <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            </button>
          </form>
        </div>

        {/* Global Offices Section */}
        <div ref={officesRef} className="border-t border-gray-200 pt-[clamp(60px,8vw,100px)]">
          <div className="overflow-hidden mb-[clamp(40px,6vw,64px)]">
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] uppercase leading-[0.95]">
              Global Presence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            {offices.map((office, i) => (
              <div key={i} className="office-card border border-gray-100 bg-gray-50 p-[clamp(24px,3vw,40px)] hover:border-gray-300 transition-colors duration-300">
                <MapPin size={24} strokeWidth={1.5} className="text-black mb-6" />
                <h3 className="font-display text-[1.8rem] uppercase tracking-wide mb-1">
                  {office.city}
                </h3>
                <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-6">
                  {office.country}
                </div>
                <p className="text-[0.85rem] text-gray-500 leading-relaxed whitespace-pre-line mb-6">
                  {office.address}
                </p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[0.85rem] font-medium text-black hover:text-gray-500 transition-colors">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}

export default ContactPage