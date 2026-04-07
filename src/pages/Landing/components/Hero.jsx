import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../../../../public/Hero/hero_image.jpg'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 500, suffix: '+', label: 'Marine & Infrastructure Projects' },
  { number: 200, suffix: '+', label: 'Engineers, Surveyors & Consultants' },
  { number: 35, suffix: '+', label: 'Years of Combined Expertise' },
  { number: 50, suffix: '+', label: 'Ongoing Surveys & Studies' },
]

const Hero = () => {
  const sectionRef = useRef()
  const titleWrapperRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const buttonsRef = useRef()
  const imageWrapperRef = useRef()
  const imageRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: '120%', opacity: 0, rotateX: -15 })
      gsap.set(subtitleRef.current, { y: 30, opacity: 0 })
      gsap.set(buttonsRef.current.children, { y: 40, opacity: 0 })
      gsap.set(imageWrapperRef.current, { clipPath: 'inset(100% 0% 0% 0%)' })
      gsap.set(imageRef.current, { scale: 1.3 })
      gsap.set(statsRef.current.children, { y: 40, opacity: 0 })

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        delay: 3.5,
      })

      tl.to(titleRef.current, {
        y: '0%',
        opacity: 1,
        rotateX: 0,
        duration: 1.4,
        ease: 'expo.out',
      })
        .to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.9')
        .to(buttonsRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
        }, '-=0.7')
        .to(imageWrapperRef.current, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.6,
          ease: 'expo.inOut',
        }, '-=0.8')
        .to(imageRef.current, {
          scale: 1,
          duration: 2,
          ease: 'power3.out',
        }, '<+0.2')

      tl.to(statsRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }, '-=1.2')

      const statNumbers = gsap.utils.toArray('.stat-number')
      statNumbers.forEach((el, i) => {
        tl.fromTo(
          el,
          { innerHTML: 0 },
          {
            innerHTML: stats[i].number,
            duration: 1.5,
            snap: { innerHTML: 1 },
            ease: 'power2.out',
          },
          '-=1.0'
        )
      })

      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-[70px] sm:pt-16 perspective-[1000px] bg-white overflow-hidden">
      <div className="container-main">
        <div className="pt-[clamp(32px,6vw,80px)] text-center px-2 sm:px-0">
          <div ref={titleWrapperRef} className="overflow-hidden pb-2 sm:pb-4 mb-3 sm:mb-4">
            <h1
              ref={titleRef}
              className="font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.95] tracking-[0.01em] uppercase max-w-[900px] mx-auto origin-bottom"
            >
              Marine, Coastal &amp; Offshore Engineering Consultancy
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-[clamp(0.75rem,1.2vw,0.9rem)] text-gray-500 leading-relaxed max-w-[580px] mx-auto mb-[clamp(24px,4vw,40px)] tracking-[0.02em]"
          >
            High-precision data, strategic insights, and full-spectrum project management solutions for the maritime infrastructure sector.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-[clamp(32px,5vw,56px)] max-w-[300px] sm:max-w-none mx-auto"
          >
            <button className="relative overflow-hidden group text-[0.7rem] font-semibold tracking-[0.1em] uppercase py-3.5 px-8 border-2 border-black bg-black text-white transition-colors duration-300 hover:text-black w-full sm:w-auto">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            </button>
            <button className="relative overflow-hidden group text-[0.7rem] font-semibold tracking-[0.1em] uppercase py-3.5 px-8 border-2 border-black bg-transparent text-black transition-colors duration-300 hover:text-white w-full sm:w-auto">
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 h-full w-full bg-black scale-y-0 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            </button>
          </div>
        </div>

        <div ref={imageWrapperRef} className="relative w-full overflow-hidden">
          <img
            ref={imageRef}
            src={heroImg}
            alt="Marine and coastal engineering infrastructure project by Viraj Consulting Engineers"
            className="w-full h-[50vh] sm:h-[clamp(300px,45vw,520px)] object-cover grayscale scale-[1.1]"
          />
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap sm:justify-end sm:gap-x-[clamp(24px,4vw,48px)] sm:gap-y-6 py-8 sm:py-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left min-w-[80px]">
              <div className="font-display text-[clamp(2.2rem,5vw,3.2rem)] leading-none text-black flex items-baseline justify-center sm:justify-start">
                <span className="stat-number">0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mt-2 sm:mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero