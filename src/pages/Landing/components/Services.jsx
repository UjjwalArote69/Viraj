import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { number: '01', name: 'Port Planning' },
  { number: '02', name: 'Dredging Analysis' },
  { number: '03', name: 'Structural Survey' },
  { number: '04', name: 'Marine Simulation' },
  { number: '05', name: 'Breakwater Design' },
  { number: '06', name: 'Coastal Protection' },
  { number: '07', name: 'Mooring Analysis' },
  { number: '08', name: 'Feasibility Studies' },
]

const ServiceItem = ({ service }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`service-item flex items-center justify-between py-[clamp(16px,2.5vw,24px)] pr-[clamp(16px,3vw,40px)] border-b border-gray-200 cursor-pointer transition-all duration-300 ${hovered ? 'pl-3 bg-gray-100' : 'pl-0'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-[clamp(12px,2vw,24px)]">
        <span className="font-display text-[clamp(1rem,1.8vw,1.4rem)] text-gray-400 min-w-7">{service.number}</span>
        <span className="font-display text-[clamp(0.9rem,1.5vw,1.15rem)] tracking-[0.06em] uppercase">{service.name}</span>
      </div>
      <span className={`text-lg transition-all duration-300 ${hovered ? 'translate-x-1 text-black' : 'text-gray-400'}`}>→</span>
    </div>
  )
}

const Services = () => {
  const sectionRef = useRef()
  const headingRef = useRef()
  const gridRef = useRef()
  const marqueeRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee speed on scroll
      gsap.to(marqueeRef.current, {
        x: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.from(headingRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.service-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-[clamp(80px,10vw,140px)]">
      {/* Marquee */}
      <div className="overflow-hidden border-t border-b border-gray-200 py-[clamp(12px,2vw,20px)] mb-[clamp(40px,6vw,72px)]">
        <div ref={marqueeRef} className="flex gap-[60px] animate-marquee whitespace-nowrap w-max">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-[0.02em] text-gray-200 shrink-0">
              OUR SERVICES
            </span>
          ))}
        </div>
      </div>

      <div className="container-main">
        <div ref={headingRef} className="mb-10">
          <h2 className="font-display text-[clamp(1rem,1.5vw,1.2rem)] tracking-[0.15em] uppercase text-gray-500">
            What We Deliver
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          {services.map((service) => (
            <ServiceItem key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
