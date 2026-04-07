import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef()
  const headerRef = useRef()
  const infoRef = useRef()
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Mask Reveal
      gsap.set(headerRef.current, { y: "120%", opacity: 0 })
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(headerRef.current, {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            ease: 'expo.out',
          })
        },
      })

      // 2. Info & Form Staggered Reveal
      gsap.set([infoRef.current.children, formRef.current.children], { y: 40, opacity: 0 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.to([infoRef.current.children, formRef.current.children], {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Inquiry received. Our engineering team will contact you shortly.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)] bg-white border-t border-gray-200">
      <div className="container-main">
        
        {/* Section Header */}
        <div className="overflow-hidden mb-[clamp(40px,6vw,80px)]">
          <h1 
            ref={headerRef} 
            className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[0.01em] uppercase transform-origin-bottom max-w-[800px]"
          >
            Initiate Your Next Project
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[clamp(48px,8vw,120px)]">
          
          {/* Contact Information Side */}
          <div ref={infoRef} className="flex flex-col gap-10">
            <div>
              <h3 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
                Global Headquarters
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={18} strokeWidth={1.5} className="text-black mt-1 shrink-0" />
                <p className="text-[0.85rem] text-gray-600 leading-relaxed">
                  Virajce Engineering Tower<br />
                  125 Coastal Boulevard, District 4<br />
                  London, United Kingdom, EC1A 1BB
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone size={18} strokeWidth={1.5} className="text-black shrink-0" />
                <a href="tel:+441234567890" className="text-[0.85rem] text-gray-600 hover:text-black transition-colors">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} strokeWidth={1.5} className="text-black shrink-0" />
                <a href="mailto:info@virajce.com" className="text-[0.85rem] text-gray-600 hover:text-black transition-colors">
                  info@virajce.com
                </a>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            <div>
              <h3 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gray-500 mb-4">
                Direct Inquiries
              </h3>
              <p className="text-[0.8rem] text-gray-500 leading-relaxed max-w-[400px]">
                For structural surveys, dredging analysis, or port planning feasibility studies, please provide your operational parameters and timeline requirements.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative group">
                <label htmlFor="name" className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative group">
                <label htmlFor="company" className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300"
                  placeholder="Company Ltd."
                />
              </div>
            </div>

            <div className="relative group">
              <label htmlFor="email" className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300"
                placeholder="john@company.com"
              />
            </div>

            <div className="relative group">
              <label htmlFor="message" className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                Project Brief
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 text-[0.9rem] focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                placeholder="Outline your engineering requirements..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="group relative overflow-hidden flex items-center justify-center gap-3 w-full sm:w-auto self-start mt-4 py-4 px-10 bg-black text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-black border border-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                Submit Inquiry
                <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              {/* Hover Sweep Effect */}
              <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact