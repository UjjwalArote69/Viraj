import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { number: '01', title: 'Survey & Data', desc: 'High-precision hydrographic, bathymetric, and geotechnical surveys using advanced multibeam sonar and subsea mapping technology.' },
  { number: '02', title: 'Analysis & Design', desc: 'Engineering consulting, feasibility studies, and GIS-driven geospatial analysis to shape optimal infrastructure solutions.' },
  { number: '03', title: 'Project Execution', desc: 'End-to-end project management consultancy and marine construction supervision from mobilization through commissioning.' },
  { number: '04', title: 'Quality Assurance', desc: 'Rigorous compliance verification, safety audits, and post-delivery performance validation against international standards.' },
]

const deployments = [
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    alt: 'Mumbai Port Trust hydrographic survey operations',
    title: 'Mumbai Port Bathymetric Survey',
    location: 'Mumbai, India',
    scope: 'Seabed mapping · Tide analysis · Dredging feasibility',
  },
  {
    src: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800&q=80',
    alt: 'Offshore wind cable route survey vessel at sea',
    title: 'Offshore Wind Cable Route Mapping',
    location: 'Western Coast, India',
    scope: 'Cable route survey · Pipeline corridor mapping',
  },
  {
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80',
    alt: 'Port and harbor breakwater development project',
    title: 'Harbor Breakwater Development',
    location: 'Coastal India',
    scope: 'Port expansion · Breakwater design consultancy',
  },
  {
    src: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
    alt: 'Geotechnical investigation for marine infrastructure',
    title: 'Geotechnical & Environmental Study',
    location: 'International Waters',
    scope: 'Subsea soil investigation · EIA compliance',
  },
  {
    src: 'https://images.unsplash.com/photo-1590846083693-f23fdede538d?w=800&q=80',
    alt: 'Marine construction supervision and project management',
    title: 'Jetty Construction Supervision',
    location: 'Gujarat, India',
    scope: 'Marine PMC · Construction quality assurance',
  },
  {
    src: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    alt: 'GIS and geospatial mapping for coastal infrastructure',
    title: 'Coastal GIS & Spatial Analysis',
    location: 'Pan-India',
    scope: '3D modeling · Spatial data infrastructure',
  },
]

const StepCard = ({ step }) => {
  return (
    <div className="relative overflow-hidden group bg-white border border-gray-200 p-[clamp(20px,3vw,40px)] transition-all duration-500 cursor-default">
      <div className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200" />
      <div className="absolute top-0 left-0 w-0 h-1 bg-black transition-all duration-500 ease-out group-hover:w-full group-hover:bg-white z-20" />
      <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
        <div className="font-display text-[clamp(2rem,3.5vw,2.8rem)] mb-6 text-gray-300 transition-colors duration-500 group-hover:text-white/40 leading-none">
          {step.number}
        </div>
        <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3">
          {step.title}
        </div>
        <p className="text-[0.75rem] text-gray-500 leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

const DeployImage = ({ project }) => {
  const imgRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden w-full aspect-[4/5] sm:aspect-[4/3] relative group cursor-pointer">
      <img
        ref={imgRef}
        src={project.src}
        alt={project.alt}
        className="absolute -top-[15%] left-0 w-full h-[130%] object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.33,1,0.68,1)] sm:grayscale group-hover:grayscale-0 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100 group-hover:translate-y-0" />
      <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 flex items-end justify-between sm:translate-y-4 opacity-100 sm:opacity-0 transition-all duration-500 delay-100 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 group-hover:opacity-100">
        <div className="pr-4">
          <div className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-gray-300 mb-1.5">
            {project.location}
          </div>
          <div className="font-display text-white text-[clamp(1.4rem,2.5vw,1.9rem)] leading-none tracking-wide mb-2">
            {project.title}
          </div>
          <div className="text-[0.65rem] text-gray-300/80 tracking-[0.04em]">
            {project.scope}
          </div>
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shrink-0 sm:-translate-x-4 transition-transform duration-500 delay-150 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0">
          <ArrowUpRight size={18} strokeWidth={2} className="text-black" />
        </div>
      </div>
    </div>
  )
}

const Achievements = () => {
  const sectionRef = useRef()
  const processRef = useRef()
  const processTitleRef = useRef()
  const stepsRef = useRef()
  const deployHeaderRef = useRef()
  const deployGridRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(processTitleRef.current, { y: '120%', opacity: 0 })
      gsap.set(stepsRef.current.children, { y: 40, opacity: 0 })

      ScrollTrigger.create({
        trigger: processRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline()
          tl.to(processTitleRef.current, {
            y: '0%',
            opacity: 1,
            duration: 1.2,
            ease: 'expo.out',
          }).to(stepsRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          }, '-=0.8')
        },
      })

      gsap.set(deployHeaderRef.current, { y: '100%', opacity: 0 })
      gsap.set(deployGridRef.current.children, { clipPath: 'inset(100% 0% 0% 0%)' })

      ScrollTrigger.create({
        trigger: deployHeaderRef.current.parentElement,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline()
          tl.to(deployHeaderRef.current, {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
          }).to(deployGridRef.current.children, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            stagger: 0.15,
            ease: 'expo.inOut',
          }, '-=0.6')
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[clamp(60px,10vw,140px)]">
      <div ref={processRef} className="bg-gray-50 p-[clamp(40px,6vw,100px)_clamp(16px,5vw,64px)] mb-[clamp(60px,10vw,140px)] border-y border-gray-200">
        <div className="overflow-hidden mb-[clamp(32px,5vw,64px)]">
          <h2 ref={processTitleRef} className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] uppercase max-w-[800px] origin-bottom">
            Our Proven<br />Working<br />Process
          </h2>
        </div>
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step) => <StepCard key={step.number} step={step} />)}
        </div>
      </div>

      <div className="container-main">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-[clamp(32px,5vw,64px)]">
          <div className="overflow-hidden">
            <h2 ref={deployHeaderRef} className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] uppercase origin-bottom">
              Completed<br />Projects
            </h2>
          </div>
          <a href="/projects" className="group flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.15em] uppercase text-gray-500 transition-colors duration-300 hover:text-black whitespace-nowrap pb-2">
            <span>View All Work</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <div ref={deployGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deployments.map((project, i) => <DeployImage key={i} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Achievements