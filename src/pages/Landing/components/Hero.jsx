import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroImg from '../../../assets/hero.png'

const stats = [
  { number: '500+', label: 'Projects' },
  { number: '200+', label: 'Engineers' },
  { number: '35+', label: 'Years' },
  { number: '50+', label: 'Nations' },
]

const Hero = () => {
  const sectionRef = useRef()
  const titleRef = useRef()
  const buttonsRef = useRef()
  const imageRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          buttonsRef.current.children,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          '-=0.7'
        )
        .from(
          imageRef.current,
          {
            clipPath: 'inset(100% 0% 0% 0%)',
            opacity: 0,
            duration: 1.4,
            ease: 'power3.inOut',
          },
          '-=0.5'
        )
        .from(
          statsRef.current.children,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.6'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-16">
      <div className="container-main">
        <div className="pt-[clamp(40px,6vw,80px)] text-center">
          <h1
            ref={titleRef}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-[0.01em] uppercase max-w-[800px] mx-auto mb-8"
          >
            We Engineer What Connects Land to Sea
          </h1>

          <div
            ref={buttonsRef}
            className="flex justify-center gap-3 mb-[clamp(32px,5vw,56px)]"
          >
            <button className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase py-3.5 px-7 border-2 border-black bg-black text-white transition-all duration-300 hover:bg-transparent hover:text-black">
              Initiate Project
            </button>
            <button className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase py-3.5 px-7 border-2 border-black bg-transparent text-black transition-all duration-300 hover:bg-black hover:text-white">
              Explore Labs
            </button>
          </div>
        </div>

        <div ref={imageRef} className="relative w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Offshore engineering platform"
            className="w-full h-[clamp(250px,40vw,480px)] object-cover grayscale"
          />
        </div>

        <div ref={statsRef} className="flex justify-end gap-[clamp(24px,4vw,48px)] py-7">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-none">{stat.number}</div>
              <div className="text-[0.6rem] tracking-[0.08em] uppercase text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
