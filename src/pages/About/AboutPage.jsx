import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Globe, ShieldCheck, Lightbulb, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Lightbulb,
    title: 'Sustainable Innovation',
    desc: 'We drive progress in the maritime sector with advanced technologies, ensuring every project is efficient, cost-effective, and environmentally responsible.',
  },
  {
    icon: Users,
    title: 'Strong Partnerships',
    desc: 'Our success is built on collaboration. We work hand-in-hand with clients, stakeholders, and global partners to solve complex infrastructure challenges.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Reliability',
    desc: 'We prioritize proactive safety and quality assurance in every project — ensuring compliance, minimizing risks, and maintaining the highest global standards.',
  },
  {
    icon: Globe,
    title: 'Teamwork & Expertise',
    desc: 'Our diverse team of engineers, surveyors, and consultants brings together decades of expertise, delivering excellence through continuous learning.',
  },
]

const stats = [
  { number: '35', suffix: '+', label: 'Years of Combined Expertise' },
  { number: '500', suffix: '+', label: 'Projects Delivered' },
  { number: '200', suffix: '+', label: 'Clients & Partners Served' },
  { number: '50', suffix: '+', label: 'Surveys & Studies Completed' },
]

const AboutPage = () => {
  const mainRef = useRef()
  const headerRef = useRef()
  const heroImgRef = useRef()
  const heroImgWrapperRef = useRef()
  const narrativeRef = useRef()
  const statsRef = useRef()
  const statsLinesRef = useRef([])
  const valuesRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current.children, { y: '120%', opacity: 0, rotateX: -10 })

      const tl = gsap.timeline({ delay: 0.1 })
      tl.to(headerRef.current.children, {
        y: '0%',
        opacity: 1,
        rotateX: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: 'expo.out',
      })

      gsap.set(heroImgWrapperRef.current, { clipPath: 'inset(100% 0% 0% 0%)' })
      gsap.set(heroImgRef.current, { scale: 1.2 })

      tl.to(heroImgWrapperRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.6,
        ease: 'expo.inOut',
      }, '-=0.9')
        .to(heroImgRef.current, {
          scale: 1,
          duration: 2,
          ease: 'power3.out',
        }, '<+0.2')

      gsap.to(heroImgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImgWrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.set('.narrative-item', { y: 40, opacity: 0 })
      ScrollTrigger.create({
        trigger: narrativeRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to('.narrative-item', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
          })
        },
      })

      gsap.set(statsLinesRef.current, { scaleX: 0 })
      gsap.set('.stat-block', { opacity: 0, y: 30 })

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(statsLinesRef.current, { scaleX: 1, duration: 1.2, ease: 'expo.inOut', transformOrigin: 'center' })
          gsap.to('.stat-block', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 })

          const statElements = gsap.utils.toArray('.stat-number')
          statElements.forEach((el, i) => {
            const targetNum = parseInt(stats[i].number)
            const proxy = { val: 0 }
            gsap.to(proxy, {
              val: targetNum,
              duration: 2,
              ease: 'power3.out',
              delay: 0.2 + i * 0.1,
              onUpdate: () => { el.innerHTML = Math.round(proxy.val) },
            })
          })
        },
      })

      const valueCards = gsap.utils.toArray('.value-card')
      gsap.set(valueCards, { y: 50, opacity: 0 })

      ScrollTrigger.create({
        trigger: valuesRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(valueCards, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
          })
        },
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen bg-white pt-[clamp(120px,15vw,180px)]">
      <section className="container-main mb-[clamp(40px,8vw,80px)] perspective-[1000px]">
        <div ref={headerRef} className="max-w-[1000px]">
          <div className="overflow-hidden mb-6 pb-2">
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] uppercase leading-[0.9] tracking-[0.01em] origin-bottom">
              About Viraj<br />Consulting Engineers
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-[0.85rem] sm:text-[1rem] text-gray-500 leading-relaxed max-w-[600px] origin-bottom">
              A trusted name in marine, coastal, and offshore engineering consultancy — delivering precision-driven data and strategic solutions for complex maritime projects across India and international waters.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,4vw,40px)] mb-[clamp(80px,10vw,140px)]">
        <div ref={heroImgWrapperRef} className="w-full h-[50vh] sm:h-[75vh] overflow-hidden relative bg-gray-100">
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1541888078864-164478f7db0b?w=1600&q=80"
            alt="Viraj Consulting Engineers team reviewing marine infrastructure plans"
            className="w-full h-[130%] absolute -top-[15%] left-0 object-cover grayscale"
          />
        </div>
      </section>

      <section className="container-main mb-[clamp(80px,10vw,140px)]">
        <div ref={narrativeRef} className="relative flex flex-col lg:flex-row items-start gap-[clamp(40px,8vw,100px)]">
          <div className="hidden lg:block absolute left-[35%] top-0 bottom-0 w-px bg-gray-200" />

          <div className="w-full lg:w-[35%] shrink-0 narrative-item">
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Our Heritage
            </div>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] uppercase leading-[0.95]">
              Foundation &<br />Evolution
            </h2>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col gap-6 text-[0.85rem] sm:text-[0.95rem] text-gray-600 leading-[1.8]">
            <p className="narrative-item text-black font-medium text-[1rem] sm:text-[1.1rem]">
              Established in 2016, Viraj Consulting Engineers was founded with a mission to deliver accurate hydrographic and geotechnical survey solutions, setting the foundation for trusted marine consultancy services as part of the Meka Group.
            </p>
            <p className="narrative-item">
              With rapid growth, we expanded into project management consultancy, offshore pipeline mapping, and harbor development surveys — becoming a reliable partner for major EPC and infrastructure firms. Our expertise covers services ranging from hydrographic surveys and geotechnical analysis to port development, offshore wind mapping, and GIS solutions.
            </p>
            <p className="narrative-item">
              Today, recognized as a trusted name in marine and offshore consultancy, we partner with leading organizations to deliver high-precision engineering insights and full-spectrum project support across India and international waters. Our legacy is backed by the Meka Group's decades of excellence in infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="relative py-[clamp(60px,8vw,100px)] mb-[clamp(80px,10vw,140px)] bg-gray-50/50">
        <div ref={(el) => (statsLinesRef.current[0] = el)} className="absolute top-0 left-0 w-full h-px bg-gray-200" />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-block text-center sm:text-left">
                <div className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none text-black mb-1 sm:mb-2 flex items-baseline justify-center sm:justify-start">
                  <span className="stat-number">0</span>
                  <span className="text-[clamp(2rem,3.5vw,3rem)] text-gray-400">{stat.suffix}</span>
                </div>
                <div className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el) => (statsLinesRef.current[1] = el)} className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
      </section>

      <section className="container-main mb-[clamp(80px,10vw,140px)]">
        <div className="mb-[clamp(40px,6vw,64px)] text-center sm:text-left overflow-hidden">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.95] origin-bottom">
            Our Vision & Mission
          </h2>
        </div>

        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {values.map((val, i) => (
            <div key={i} className="value-card relative overflow-hidden group border border-gray-200 p-[clamp(32px,5vw,48px)] transition-colors duration-500 cursor-default">
              <div className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

              <div className="relative z-10 flex flex-col h-full transition-colors duration-500 group-hover:text-white">
                <div className="mb-10 w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 transition-colors duration-500 group-hover:border-gray-700 bg-white/50 group-hover:bg-white/10">
                  <val.icon size={20} strokeWidth={1.5} className="text-black transition-colors duration-500 group-hover:text-white" />
                </div>

                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] tracking-[0.02em] uppercase mb-4">
                  {val.title}
                </h3>

                <p className="text-[0.8rem] sm:text-[0.85rem] text-gray-500 leading-relaxed transition-colors duration-500 group-hover:text-gray-300 flex-grow">
                  {val.desc}
                </p>

                <div className="overflow-hidden w-6 h-6 mt-6">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-white translate-y-[100%] -translate-x-[100%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-hover:translate-x-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-black text-white text-center">
        <div className="container-main">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] uppercase mb-6">
            Join Our Team
          </h2>
          <p className="text-[0.85rem] text-gray-400 mb-10 max-w-[500px] mx-auto">
            We are expanding our team of specialized marine engineers, surveyors, and project consultants. Explore opportunities at the Meka Group.
          </p>
          <a href="/careers" className="inline-block relative overflow-hidden group text-[0.7rem] font-bold tracking-[0.15em] uppercase py-4 px-10 border border-white bg-transparent text-white transition-colors duration-400 hover:text-black">
            <span className="relative z-10 flex items-center gap-2">
              View Careers
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default AboutPage