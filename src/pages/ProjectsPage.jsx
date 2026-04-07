import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Surveys', 'Port & Harbor', 'Offshore', 'Construction']

const allProjects = [
  {
    id: 1,
    category: 'Surveys',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
    title: 'Mumbai Port Bathymetric Survey',
    location: 'Mumbai, India',
    scope: 'Seabed mapping · Tide analysis · Dredging feasibility',
  },
  {
    id: 2,
    category: 'Offshore',
    src: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800&q=80',
    title: 'Offshore Wind Cable Route Mapping',
    location: 'Western Coast, India',
    scope: 'Cable route survey · Pipeline corridor mapping',
  },
  {
    id: 3,
    category: 'Port & Harbor',
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80',
    title: 'Harbor Breakwater Development',
    location: 'Coastal India',
    scope: 'Breakwater design consultancy · Port expansion',
  },
  {
    id: 4,
    category: 'Surveys',
    src: 'https://images.unsplash.com/photo-1590846083693-f23fdede538d?w=1200&q=80',
    title: 'Geotechnical & Environmental Study',
    location: 'International Waters',
    scope: 'Subsea soil investigation · EIA compliance',
  },
  {
    id: 5,
    category: 'Construction',
    src: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
    title: 'Jetty Construction Supervision',
    location: 'Gujarat, India',
    scope: 'Marine PMC · Construction quality assurance',
  },
  {
    id: 6,
    category: 'Surveys',
    src: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    title: 'Coastal GIS & Spatial Analysis',
    location: 'Pan-India',
    scope: '3D modeling · Spatial data infrastructure',
  },
  {
    id: 7,
    category: 'Port & Harbor',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    title: 'Port Basin Mapping & Navigation',
    location: 'Maharashtra, India',
    scope: 'Pre-construction surveys · Basin depth analysis',
  },
  {
    id: 8,
    category: 'Offshore',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    title: 'Subsea Pipeline Corridor Survey',
    location: 'Offshore India',
    scope: 'Geophysical data acquisition · Route optimization',
  },
  {
    id: 9,
    category: 'Construction',
    src: 'https://images.unsplash.com/photo-1559136560-17d09f0e0c88?w=1200&q=80',
    title: 'Marine Infrastructure PMC',
    location: 'Andhra Pradesh, India',
    scope: 'End-to-end project management · Stakeholder coordination',
  },
]

const ProjectCard = ({ project, isWide }) => {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-card overflow-hidden relative group cursor-pointer w-full ${
        isWide ? 'md:col-span-2 aspect-[4/3] md:aspect-[21/9]' : 'col-span-1 aspect-[4/5] md:aspect-[4/5]'
      }`}
    >
      <img
        ref={imgRef}
        src={project.src}
        alt={project.title}
        className="absolute -top-[15%] left-0 w-full h-[130%] object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.33,1,0.68,1)] sm:grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100 group-hover:translate-y-0" />
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 flex items-end justify-between sm:translate-y-4 opacity-100 sm:opacity-0 transition-all duration-500 delay-100 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 group-hover:opacity-100">
        <div className="pr-4">
          <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-300 mb-2">
            {project.location}
          </div>
          <div className="font-display text-white text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-wide mb-3">
            {project.title}
          </div>
          <div className="text-[0.7rem] text-gray-300/80 tracking-[0.04em] uppercase font-medium">
            {project.scope}
          </div>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shrink-0 sm:-translate-x-4 transition-transform duration-500 delay-150 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0">
          <ArrowUpRight size={22} strokeWidth={2} className="text-black" />
        </div>
      </div>
    </div>
  )
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const headerRef = useRef()
  const filterRef = useRef()
  const gridRef = useRef()

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === activeFilter))
    }
  }, [activeFilter])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: '120%', opacity: 0 })
      gsap.set(filterRef.current.children, { y: 20, opacity: 0 })

      const tl = gsap.timeline()
      tl.to(headerRef.current, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.2,
      }).to(filterRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.8')
    }, headerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')
      ScrollTrigger.refresh()

      gsap.fromTo(cards,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          stagger: 0.1,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [filteredProjects])

  return (
    <main className="min-h-screen bg-white pt-[clamp(120px,15vw,180px)] pb-[clamp(80px,10vw,140px)]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-[clamp(40px,8vw,80px)]">
          <div className="overflow-hidden">
            <h1
              ref={headerRef}
              className="font-display text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.9] tracking-[0.01em] origin-bottom"
            >
              Completed<br />Projects
            </h1>
          </div>
          <p className="text-[0.8rem] text-gray-500 tracking-[0.06em] max-w-[340px] leading-relaxed pb-3">
            Our portfolio reflects decades of successful marine, coastal, and offshore projects across India and international waters — delivering precise, client-focused solutions.
          </p>
        </div>

        <div ref={filterRef} className="flex flex-wrap items-center gap-2 sm:gap-4 mb-[clamp(40px,6vw,64px)] border-b border-gray-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative overflow-hidden group px-6 py-2.5 rounded-full border transition-colors duration-300 ${
                activeFilter === cat
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 bg-transparent text-gray-500 hover:border-black'
              }`}
            >
              <span className="relative z-10 text-[0.65rem] font-bold tracking-[0.15em] uppercase">
                {cat}
              </span>
              {activeFilter !== cat && (
                <div className="absolute inset-0 h-full w-full bg-black scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
              )}
              {activeFilter !== cat && (
                <span className="absolute inset-0 z-20 flex items-center justify-center text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  {cat}
                </span>
              )}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => {
            const isWide = index % 3 === 0
            return (
              <ProjectCard key={project.id} project={project} isWide={isWide} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage