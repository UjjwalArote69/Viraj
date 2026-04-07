import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Anchor, Shield, Waves, Map, Layers, Briefcase, Compass, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const detailedServices = [
  {
    id: '01',
    icon: Waves,
    title: 'Hydrographic & Bathymetric Surveys',
    desc: 'Precise underwater mapping using advanced multibeam echo sounders, side-scan sonar, and sediment analysis. We deliver high-resolution depth data and seabed characterization to support marine construction, dredging, and coastal infrastructure projects.',
    features: ['Multibeam & Single-Beam Surveys', 'Seabed Profiling & Mapping', 'Tide Monitoring & Analysis', 'Dredging Feasibility Studies'],
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
  },
  {
    id: '02',
    icon: Layers,
    title: 'Geotechnical & Environmental Surveys',
    desc: 'Reliable soil sampling, seabed characterization, and environmental impact assessments tailored for marine and infrastructure projects. We deliver accurate insights into ground conditions to ensure safe, sustainable, and compliant project execution.',
    features: ['Soil Sampling & Lab Testing', 'Seabed Characterization', 'Environmental Impact Assessments', 'Regulatory Compliance Support'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: '03',
    icon: Anchor,
    title: 'Port & Harbor Development',
    desc: 'End-to-end solutions for port and harbor projects — from pre-construction surveys and dredging feasibility to basin mapping. We design marine infrastructure that meets international standards for operational efficiency and environmental compliance.',
    features: ['Pre-Construction Surveys', 'Basin Mapping & Navigation', 'Cargo Handling Optimization', 'Sustainable Coastal Growth'],
    img: 'https://images.unsplash.com/photo-1590846083693-f23fdede538d?w=800&q=80',
  },
  {
    id: '04',
    icon: Map,
    title: 'Offshore Wind, Cable & Pipeline Mapping',
    desc: 'Specialized route surveys and corridor mapping for the growing offshore energy and marine sectors. We deliver high-precision geophysical and geotechnical data for cable landfalls, pipeline corridors, and wind farm site assessments.',
    features: ['Cable Route Surveys', 'Pipeline Corridor Mapping', 'Wind Farm Site Assessment', 'Geophysical Data Acquisition'],
    img: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800&q=80',
  },
  {
    id: '05',
    icon: Briefcase,
    title: 'Project Management Consultancy',
    desc: 'End-to-end PMC services covering cost optimization, quality control, and lifecycle support for marine and infrastructure projects. From planning and resource allocation to compliance monitoring and stakeholder coordination, we act as trusted partners throughout.',
    features: ['Cost Optimization & Budgeting', 'Quality Control Systems', 'Resource & Schedule Planning', 'Stakeholder Coordination'],
    img: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
  },
  {
    id: '06',
    icon: Compass,
    title: 'Engineering Consulting',
    desc: 'Specialized consulting ensuring the structural integrity, functionality, and sustainability of marine and coastal infrastructure. Our experts deliver design reviews, feasibility assessments, and technical advisory for complex engineering challenges.',
    features: ['Structural Integrity Analysis', 'Design Review & Advisory', 'Feasibility Assessments', 'Sustainable Infrastructure Planning'],
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80',
  },
  {
    id: '07',
    icon: Shield,
    title: 'Marine Construction Supervision',
    desc: 'Phase-by-phase construction oversight ensuring every stage strictly adheres to international safety standards. We provide on-site supervision, compliance verification, and real-time progress monitoring from mobilization through commissioning.',
    features: ['On-Site Quality Assurance', 'Safety Compliance Audits', 'Progress Monitoring & Reporting', 'International Standards Adherence'],
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
  },
  {
    id: '08',
    icon: Globe,
    title: 'GIS & Geospatial Solutions',
    desc: 'Transforming complex data into actionable insights through advanced geospatial technologies. We deliver 3D modeling, spatial analysis, and custom mapping solutions to support informed decision-making for marine and coastal projects.',
    features: ['3D Modeling & Visualization', 'Spatial Analysis & Mapping', 'Custom GIS Development', 'Remote Sensing Integration'],
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
]

const ServiceDetailCard = ({ service }) => {
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
    <div ref={cardRef} className="service-card group border-t border-gray-200 py-[clamp(40px,6vw,80px)]">
      <div className="flex flex-col xl:flex-row gap-[clamp(32px,5vw,64px)]">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-[clamp(1.5rem,2.5vw,2rem)] text-gray-300 transition-colors duration-500 group-hover:text-black">
              {service.id}
            </span>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 transition-colors duration-500 group-hover:bg-black group-hover:border-black">
              <service.icon size={16} strokeWidth={1.5} className="text-gray-500 transition-colors duration-500 group-hover:text-white" />
            </div>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] uppercase leading-[0.95] tracking-[0.01em] mb-6">
            {service.title}
          </h2>
          <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-500 leading-relaxed mb-8 max-w-[500px]">
            {service.desc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:w-[45%] overflow-hidden aspect-[4/3] sm:aspect-[16/9] xl:aspect-[4/5] relative">
          <img
            ref={imgRef}
            src={service.img}
            alt={service.title}
            className="absolute -top-[15%] left-0 w-full h-[130%] object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:grayscale-0 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </div>
  )
}

const ServicesPage = () => {
  const headerRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current.children, { y: '120%', opacity: 0 })
      gsap.to(headerRef.current.children, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
        delay: 0.2,
      })

      const cards = gsap.utils.toArray('.service-card')
      gsap.set(cards, { y: 60, opacity: 0 })
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(card, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-[clamp(140px,18vw,220px)] pb-[clamp(60px,8vw,100px)] border-b border-gray-200">
        <div className="container-main">
          <div ref={headerRef} className="max-w-[1000px]">
            <div className="overflow-hidden mb-6">
              <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] uppercase leading-[0.9] tracking-[0.01em] origin-bottom">
                Featured Services
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-[0.85rem] sm:text-[1rem] text-gray-500 leading-relaxed max-w-[600px] origin-bottom">
                We bring together decades of technical expertise and advanced engineering practices to deliver high-quality solutions for the marine and coastal infrastructure sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-start gap-[clamp(40px,8vw,100px)]">
            <div className="w-full lg:w-[35%] lg:sticky lg:top-[120px] shrink-0 pb-10 lg:pb-0">
              <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
                Our Expertise
              </div>
              <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[0.95] uppercase mb-6">
                Precision-Driven<br />Marine Consultancy.
              </h2>
              <p className="text-[0.8rem] text-gray-500 leading-relaxed mb-10">
                From hydrographic surveys and geotechnical analysis to port development, offshore wind mapping, and GIS solutions — we address the unique challenges of ports, harbors, offshore energy, and coastal development projects across India and international waters.
              </p>
              <a href="/contact" className="group relative overflow-hidden inline-flex items-center gap-3 py-3.5 px-8 bg-black text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase border border-black transition-colors duration-400 hover:text-black">
                <span className="relative z-10 flex items-center gap-2">
                  Request A Call
                  <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
              </a>
            </div>
            <div ref={listRef} className="w-full lg:w-[65%] flex flex-col pt-0 lg:-mt-[clamp(40px,6vw,80px)]">
              {detailedServices.map((service) => (
                <ServiceDetailCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-gray-50 border-t border-gray-200 text-center">
        <div className="container-main">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] uppercase mb-6">
            Have A Project In Mind?
          </h2>
          <p className="text-[0.85rem] text-gray-500 mb-10 max-w-[500px] mx-auto">
            Our team of marine and infrastructure specialists is ready to guide you from feasibility studies through to project delivery.
          </p>
          <a href="/contact" className="inline-block relative overflow-hidden group text-[0.7rem] font-bold tracking-[0.15em] uppercase py-4 px-10 border-2 border-black bg-black text-white transition-colors duration-400 hover:text-black">
            <span className="relative z-10">Contact The Team</span>
            <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage