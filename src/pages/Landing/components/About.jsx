import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: 'Technical Rigor', desc: 'Every project begins with advanced simulation and mathematical modeling. Our multi-physics solvers handle complex boundary conditions with precision.' },
  { title: 'Sustainable Core', desc: 'From tide analysis to habitat mapping, we engineer solutions that respect marine ecosystems and maintain long-term ecological balance.' },
  { title: 'Global Network', desc: 'Strategic partnerships spanning 50 nations with local expertise in every coastal environment, from arctic shelf regions to tropical archipelagos.' },
  { title: 'Advanced Labs', desc: 'Proprietary wave basin facilities and computational fluid dynamics clusters that replicate decades of maritime data for thorough analysis.' },
]

const About = () => {
  const sectionRef = useRef()
  const imageRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(cardsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,80px)] items-start">
          <div ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Engineering expertise"
              className="w-full aspect-[4/3] object-cover grayscale"
            />
          </div>

          <div>
            <h2
              ref={headingRef}
              className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[0.01em] uppercase mb-9"
            >
              Precision.<br />
              Innovation.<br />
              Decades of<br />
              Expertise.
            </h2>

            <div ref={cardsRef} className="grid grid-cols-2 gap-6 mt-2">
              {features.map((f) => (
                <div className="pr-2" key={f.title}>
                  <div className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black inline-block shrink-0" />
                    {f.title}
                  </div>
                  <p className="text-[0.75rem] text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
