import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
  const [email, setEmail] = useState('')
  const sectionRef = useRef()
  const titleRef = useRef()
  const formRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(formRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with: ${email}`)
      setEmail('')
    }
  }

  return (
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,80px)] items-center">
          <h2
            ref={titleRef}
            className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] uppercase"
          >
            Stay<br />Updated
          </h2>

          <div
            ref={formRef}
            className="bg-gray-100 p-[clamp(28px,4vw,48px)]"
          >
            <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase mb-6">
              Receive Technical Briefings Monthly.
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email-input" className="text-[0.65rem] tracking-[0.08em] uppercase text-gray-500">
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3.5 bg-transparent border-b border-gray-300 text-[0.85rem] transition-colors duration-300 focus:border-black placeholder:text-gray-400 placeholder:text-[0.8rem]"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-5 w-full py-3.5 px-7 bg-black text-white text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 hover:bg-gray-800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
