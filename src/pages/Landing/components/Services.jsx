import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { number: '01', name: 'Hydrographic & Bathymetric Surveys' },
  { number: '02', name: 'Geotechnical & Environmental Surveys' },
  { number: '03', name: 'Port & Harbor Development' },
  { number: '04', name: 'Offshore Wind, Cable & Pipeline Mapping' },
  { number: '05', name: 'Project Management Consultancy' },
  { number: '06', name: 'Engineering Consulting' },
  { number: '07', name: 'Marine Construction Supervision' },
  { number: '08', name: 'GIS & Geospatial Solutions' },
]

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item relative overflow-hidden group border-b border-gray-200 cursor-pointer">
      <div className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 group-active:scale-y-100" />
      
      <div className="relative z-10 flex items-center justify-between py-[clamp(24px,4vw,32px)] px-[clamp(16px,2vw,24px)] transition-colors duration-300 group-hover:text-white group-active:text-white">
        <div className="flex items-center gap-[clamp(16px,4vw,32px)]">
          <span className="font-display text-[clamp(1.2rem,2vw,1.4rem)] text-gray-400 min-w-8 transition-colors duration-300 group-hover:text-gray-300 group-active:text-gray-300">
            {service.number}
          </span>
          <span className="font-display text-[clamp(1.1rem,2vw,1.5rem)] tracking-[0.04em] uppercase">
            {service.name}
          </span>
        </div>
        
        <div className="relative w-5 h-5 sm:w-6 sm:h-6 overflow-hidden shrink-0">
          <ArrowUpRight 
            strokeWidth={1.5} 
            className="absolute top-0 left-0 w-full h-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:text-white sm:group-hover:translate-x-[120%] sm:group-hover:-translate-y-[120%] group-active:text-white" 
          />
          <ArrowUpRight 
            strokeWidth={1.5} 
            className="hidden sm:block absolute top-0 left-0 w-full h-full text-white -translate-x-[120%] translate-y-[120%] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 group-hover:translate-y-0" 
          />
        </div>
      </div>
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
      gsap.to(marqueeRef.current, {
        xPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.set(headingRef.current, { y: '100%', opacity: 0 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(headingRef.current, {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
          })
        },
      })

      const items = gsap.utils.toArray('.service-item-wrapper')
      gsap.set(items, { y: 60, opacity: 0 })

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-[clamp(60px,10vw,140px)] pb-[clamp(40px,8vw,100px)]">
      <div className="overflow-hidden border-t border-b border-gray-200 py-[clamp(16px,2vw,24px)] mb-[clamp(40px,8vw,100px)] flex items-center bg-gray-50/50">
        <div ref={marqueeRef} className="flex gap-[clamp(32px,5vw,60px)] whitespace-nowrap w-max will-change-transform">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className="font-display text-[clamp(3rem,8vw,5.5rem)] uppercase tracking-[0.02em] text-transparent [-webkit-text-stroke:1px_#d4d4d4] shrink-0"
            >
              {i % 2 === 0 ? 'OUR SERVICES' : 'MARINE CONSULTANCY'}
            </span>
          ))}
        </div>
      </div>

      <div className="container-main">
        <div className="overflow-hidden mb-[clamp(24px,4vw,48px)]">
          <h2
            ref={headingRef}
            className="font-display text-[clamp(1.4rem,2vw,1.5rem)] tracking-[0.15em] uppercase text-gray-500 origin-bottom"
          >
            What We Deliver
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(24px,4vw,64px)] gap-y-0 border-t border-gray-200">
          {services.map((service) => (
            <div key={service.number} className="service-item-wrapper will-change-transform">
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services