import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const inquiries = [
  'Average Project Lead Time',
  'Certification & Compliance Standards',
  'Environmental Impact Assessments',
]

const InquiryItem = ({ item, first }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`inquiry-item flex items-center gap-4 py-5 border-b border-gray-200 cursor-pointer transition-all duration-300 ${first ? 'border-t' : ''} ${hovered ? 'pl-2' : 'pl-0'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="w-2 h-2 border-2 border-black shrink-0" />
      <span className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase">{item}</span>
    </div>
  )
}

const Careers = () => {
  const sectionRef = useRef()
  const headerRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.inquiry-item', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)] border-t border-gray-200">
      <div className="container-main">
        <div ref={headerRef} className="mb-8">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] uppercase">Inquiries</h2>
          <p className="text-[0.75rem] text-gray-500 mt-2 max-w-[300px] leading-relaxed">
            Standard engineering queries and specialized brief inquiries.
          </p>
        </div>

        <div className="flex flex-col">
          {inquiries.map((item, i) => (
            <InquiryItem key={item} item={item} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
