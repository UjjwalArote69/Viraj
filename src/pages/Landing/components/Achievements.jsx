import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { number: '01', title: 'Discovery', desc: 'Initial site analysis and hydrological data gathering with advanced sonar bathymetric mapping.' },
  { number: '02', title: 'Computation', desc: 'Full-spectrum numerical modeling using proprietary CFD solvers and multi-physics simulation.' },
  { number: '03', title: 'Execution', desc: 'Phased construction oversight with real-time structural health monitoring and QA.' },
  { number: '04', title: 'Validation', desc: 'Post-delivery data analysis and performance verification against design benchmarks.' },
]

const deploymentImages = [
  { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80', alt: 'Port infrastructure' },
  { src: 'https://images.unsplash.com/photo-1559136560-17d09f0e0c88?w=600&q=80', alt: 'Offshore platform' },
  { src: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&q=80', alt: 'Marine construction' },
]

const StepCard = ({ step }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`step-card bg-white p-[clamp(20px,2.5vw,32px)] transition-all duration-300 border ${hovered ? 'border-black -translate-y-0.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]' : 'border-gray-200'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="font-display text-[clamp(1.8rem,3vw,2.4rem)] mb-4 leading-none">{step.number}</div>
      <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-2">{step.title}</div>
      <p className="text-[0.72rem] text-gray-500 leading-relaxed">{step.desc}</p>
    </div>
  )
}

const DeployImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      className={`deploy-img w-full aspect-[4/3] object-cover cursor-pointer transition-all duration-400 ${hovered ? 'grayscale-0 scale-[1.02]' : 'grayscale'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  )
}

const Achievements = () => {
  const sectionRef = useRef()
  const processRef = useRef()
  const processTitleRef = useRef()
  const deployRef = useRef()
  const deployGridRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Process title
      gsap.from(processTitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      // Step cards stagger
      gsap.from('.step-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      })

      // Deployment heading
      gsap.from(deployRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: deployRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Deployment images
      gsap.from('.deploy-img', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: deployGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)]">
      {/* Process */}
      <div
        ref={processRef}
        className="bg-gray-100 p-[clamp(48px,6vw,80px)_clamp(32px,5vw,64px)] mb-[clamp(80px,10vw,140px)]"
      >
        <h2
          ref={processTitleRef}
          className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.95] uppercase mb-[clamp(32px,4vw,56px)] max-w-[700px]"
        >
          Our Rigorous<br />
          Engineering<br />
          Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      {/* Deployments */}
      <div className="container-main">
        <div ref={deployRef} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-[clamp(32px,4vw,48px)]">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95] uppercase">
            Flagship<br />Deployments
          </h2>
          <a href="/projects" className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-500 transition-colors duration-300 hover:text-black whitespace-nowrap">
            View All Work
          </a>
        </div>

        <div ref={deployGridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {deploymentImages.map((img, i) => (
            <DeployImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
