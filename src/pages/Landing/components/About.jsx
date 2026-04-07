import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const features = [
  {
    title: 'Sustainable Innovation',
    desc: 'We drive progress in the maritime sector with advanced technologies, ensuring every project is efficient, cost-effective, and environmentally responsible.',
  },
  {
    title: 'Strong Partnerships',
    desc: 'Our success is built on collaboration. We work hand-in-hand with clients, stakeholders, and global partners to solve complex infrastructure challenges.',
  },
  {
    title: 'Safety & Reliability',
    desc: 'We prioritize proactive safety and quality assurance in every project — ensuring compliance, minimizing risks, and maintaining the highest global standards.',
  },
  {
    title: 'Teamwork & Expertise',
    desc: 'Our diverse team of engineers, surveyors, and consultants brings together decades of expertise, delivering excellence through continuous learning.',
  },
]

const About = () => {
  const sectionRef = useRef()
  const imageWrapperRef = useRef()
  const imageRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageWrapperRef.current, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' })
      gsap.set(imageRef.current, { scale: 1.2 })
      gsap.set(headingRef.current, { y: '100%', opacity: 0 })
      gsap.set(cardsRef.current.children, { y: 40, opacity: 0 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline()

          tl.to(imageWrapperRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.5,
            ease: 'expo.inOut',
          })
            .to(imageRef.current, {
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
            }, '<')
            .to(headingRef.current, {
              y: '0%',
              opacity: 1,
              duration: 1.2,
              ease: 'power4.out',
            }, '-=1.2')
            .to(cardsRef.current.children, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
            }, '-=0.8')
        },
      })

      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[clamp(60px,10vw,140px)]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,8vw,80px)] items-start">
          <div ref={imageWrapperRef} className="overflow-hidden w-full order-2 lg:order-1 relative">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Viraj Consulting Engineers — marine and coastal engineering expertise"
              className="w-full aspect-square sm:aspect-[4/3] object-cover grayscale scale-[1.1]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden mb-[clamp(32px,5vw,40px)]">
              <h2
                ref={headingRef}
                className="font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.95] tracking-[0.01em] uppercase origin-bottom"
              >
                Precision Data.<br />
                Strategic Insights.<br />
                Decades of Expertise.
              </h2>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 mt-2">
              {features.map((f) => (
                <div className="pr-0 sm:pr-2" key={f.title}>
                  <div className="text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.1em] uppercase mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black inline-block shrink-0" />
                    {f.title}
                  </div>
                  <p className="text-[0.8rem] sm:text-[0.85rem] text-gray-500 leading-relaxed">{f.desc}</p>
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