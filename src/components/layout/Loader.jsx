import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const statuses = [
  "INITIALIZING CFD KERNEL [0x00A1]",
  "LOADING BATHYMETRIC DATA [0x00B2]",
  "CALIBRATING FLUID DYNAMICS [0x00C3]",
  "RENDERING TOPOGRAPHIC MESHES [0x00D4]",
  "ESTABLISHING GLOBAL NETWORK [0x00E5]",
  "SYSTEM OPTIMIZED [OK]"
]

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const topPanelRef = useRef(null)
  const bottomPanelRef = useRef(null)
  const contentRef = useRef(null)
  const counterRef = useRef(null)
  const statusRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    // Lock scrolling while the loader is active
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          if (onComplete) onComplete()
        }
      })

      // 1. Initial fade-in of the content
      tl.fromTo(contentRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      )

      // 2. Progress Bar & Number Counter & Terminal Text
      const proxy = { val: 0 }
      tl.to(proxy, {
        val: 100,
        duration: 3,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerHTML = Math.round(proxy.val)
          }
          
          // Calculate which terminal status to show based on percentage
          const progress = proxy.val / 100
          const index = Math.min(
            Math.floor(progress * statuses.length),
            statuses.length - 1
          )
          if (statusRef.current) {
            statusRef.current.innerHTML = statuses[index]
          }
        }
      }, 0.5)

      tl.to(progressBarRef.current, {
        scaleX: 1,
        duration: 3,
        ease: "power2.inOut"
      }, 0.5)

      // 3. Fade out the text content smoothly before the split
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power3.inOut"
      }, "+=0.2")

      // 4. Cinematic Split-Screen Exit
      // Top half slides up (-100%), Bottom half slides down (100%)
      tl.to([topPanelRef.current, bottomPanelRef.current], {
        yPercent: (i) => i === 0 ? -100 : 100,
        duration: 1.2,
        ease: "expo.inOut",
      }, "-=0.2")

    }, loaderRef)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col"
    >
      {/* Background Split Panels */}
      <div ref={topPanelRef} className="absolute top-0 left-0 w-full h-1/2 bg-black z-0 border-b border-white/5" />
      <div ref={bottomPanelRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-0" />

      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Foreground Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col justify-between h-full p-[clamp(24px,4vw,48px)]">
        
        {/* Top Header */}
        <div className="flex justify-between items-start w-full font-bold tracking-[0.2em] uppercase text-[0.65rem] text-gray-500">
          <span className="text-white text-[1rem] tracking-[0.1em] font-display">VIRAJCE</span>
          <div className="flex flex-col text-right gap-1 hidden sm:flex">
             <span>System Boot Sequence</span>
             <span>ENG // V.01</span>
          </div>
        </div>

        {/* Center Massive Counter */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="font-display text-[clamp(7rem,18vw,16rem)] leading-none flex items-start tracking-tight ml-[4vw]">
            <span 
              ref={counterRef} 
              className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)]"
            >
              0
            </span>
            <span className="text-[clamp(2rem,5vw,4rem)] text-white mt-[clamp(1rem,2vw,2.5rem)] ml-2 sm:ml-4">
              %
            </span>
          </div>
        </div>

        {/* Bottom Footer & Progress */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-end font-bold tracking-[0.15em] uppercase text-[0.6rem] sm:text-[0.65rem] text-gray-400">
             <span ref={statusRef}>INITIALIZING...</span>
             <span className="hidden sm:inline-block">[ SYSTEM SECURE ]</span>
          </div>
          
          <div className="h-[2px] w-full bg-white/10 overflow-hidden">
             <div ref={progressBarRef} className="h-full w-full bg-white origin-left scale-x-0" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Loader