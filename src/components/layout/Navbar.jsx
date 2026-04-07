/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';

// ═══════════════════════════════════════════════
// 1. DESKTOP NAV ITEM (Handles Hover & Dropdown)
// ═══════════════════════════════════════════════
function DesktopNavItem({ link, handleNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    if (!dropdownRef.current) return;
    if (isOpen) {
      gsap.killTweensOf(dropdownRef.current);
      gsap.to(dropdownRef.current, {
        autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", display: "block",
      });
      const links = dropdownRef.current.querySelectorAll('.dropdown-link');
      if (links.length) {
        gsap.fromTo(links, 
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.04, ease: "power2.out", overwrite: "auto" }
        );
      }
    } else {
      gsap.killTweensOf(dropdownRef.current);
      gsap.to(dropdownRef.current, {
        autoAlpha: 0, y: 10, duration: 0.3, ease: "power2.in", display: "none",
      });
    }
  }, [isOpen]);

  const innerContent = (
    <>
      <span className="relative pb-1">
        {link.label}
        <span className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-400 ease-out ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </span>
      {link.children && (
        <ChevronDown 
          size={12} strokeWidth={2.5}
          className={`transition-transform duration-400 ${isOpen ? "rotate-180 text-black" : "text-gray-400 group-hover:text-black"}`} 
        />
      )}
    </>
  );

  const linkClasses = `flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
    isOpen ? "text-black" : "text-gray-500 hover:text-black"
  }`;

  // Handle external links
  if (link.external) {
    return (
      <div className="relative flex items-center h-full py-4 group cursor-pointer">
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          {innerContent}
        </a>
      </div>
    );
  }

  return (
    <div
      className="relative flex items-center h-full py-4 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClasses}>
        {innerContent}
      </a>

      {link.children && (
        <div
          ref={dropdownRef}
          className="absolute top-[90%] left-1/2 -translate-x-1/2 pt-4 hidden opacity-0 translate-y-3 z-50 min-w-[260px]"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-black rounded-b-full" />
            <div className="flex flex-col mt-1">
              {link.children.map((child, idx) => (
                <a
                  key={idx}
                  href={child.href}
                  onClick={(e) => {
                    handleNavClick(e, child.href);
                    setIsOpen(false);
                  }}
                  className="dropdown-link group/link flex items-center justify-between px-5 py-3.5 transition-all duration-300 hover:bg-gray-100 rounded-xl"
                >
                  <span className="text-[10px] font-bold text-gray-500 group-hover/link:text-black transition-colors duration-300 uppercase tracking-[0.15em]">
                    {child.label}
                  </span>
                  <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-black shrink-0">
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
// 2. MAIN NAVBAR COMPONENT
// ═══════════════════════════════════════════════
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const tlRef = useRef(null);

  // ── CUSTOM ROUTING & SCROLL ENGINE ──
  const handleNavClick = (e, targetHref) => {
    e.preventDefault();
    setIsOpen(false);

    const [path, hash] = targetHref.split('#');

    if (location.pathname === path || (path === '' && location.pathname === '/')) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', targetHref);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(targetHref);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => {
        const el = document.getElementById(location.hash.replace('#', ''));
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 400);
      return () => clearTimeout(timeout);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!menuRef.current) return;
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    if (isOpen) {
      tl.to(menuRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power4.inOut' })
        .fromTo('.mobile-nav-link', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.3')
        .fromTo('.mobile-nav-rule', { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.7, ease: 'power2.inOut' }, '-=0.4')
        .fromTo('.mobile-nav-footer', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4');
    } else {
      tl.to(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  const navLinks = [
    { 
      label: 'Home', href: '/', num: '01'
    },
    { 
      label: 'Services', href: '/services', num: '02',
      children: [
        { label: 'Hydropgraphic & Bathymetric Surveys', href: '/services#hydrographic' },
        { label: 'Geotechnical & Environmental Surveys', href: '/services#geotechnical' },
        { label: 'Port & Harbour Development', href: '/services#port' },
        { label: 'Offshore Wind, Cable & Pipeline Mapping', href: '/services#offshore' },
        { label: 'Project Management Consultancy', href: '/services#project' },
        { label: 'Engineering Consulting', href: '/services#engineering' },
        { label: 'Marine Construction Supervision', href: '/services#marine' },
        { label: 'GIS & Geospatial Solutions', href: '/services#gis' },
      ]
    },
    { label: 'Projects', href: '/projects', num: '03' },
    { label: 'About', href: '/about', num: '04' },
    { label: 'Careers', href: '/careers', num: '05' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[60] px-4 lg:px-8 pt-4 lg:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto  mx-auto max-w-[1050px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]  ${
            scrolled && !isOpen
              ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-1.5'
              : isOpen
                ? 'bg-transparent py-1.5'
                : 'bg-white/40 backdrop-blur-md py-1.5'
          }`}
        >
          <div className="px-5 lg:px-7">
            <div className="flex items-center justify-between h-14 ">
              
              <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="relative z-[60] flex items-center">
                {/* <span className="font-display text-[1.5rem] tracking-[0.08em] text-black">
                  VIRAJCE
                </span> */}
                <img src="/viraj_logo.png" className='md:w-20 md:h-5 md:-mt-1 w-18 h-5' alt="Viraj Logo" />
              </Link>

              <div className="hidden lg:flex items-center gap-9 h-full">
                {navLinks.map((link) => (
                  <DesktopNavItem key={link.label} link={link} handleNavClick={handleNavClick} />
                ))}
              </div>

              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="hidden lg:flex items-center px-7 py-3.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-500"
              >
                Contact Us
              </a>

              <button
                className="relative z-[60] lg:hidden w-10 h-10 flex items-center justify-center text-black"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={`absolute transition-all duration-400 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}>
                  <Menu size={22} strokeWidth={1.8} />
                </span>
                <span className={`absolute transition-all duration-400 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}>
                  <X size={22} strokeWidth={1.8} />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[55] bg-gray-50 lg:hidden flex flex-col overflow-y-auto"
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        <div className="shrink-0 h-[100px]" />
        
        <div className="flex-1 flex flex-col justify-center pt-4 px-8 sm:px-12 min-h-0">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <div key={link.label} className="mobile-nav-link overflow-hidden">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-gray-400 font-display text-[15px] italic leading-none">{link.num}</span>
                    <span className="text-black text-[clamp(1.8rem,6vw,2.8rem)] font-display uppercase tracking-[0.02em] group-hover:text-gray-500 transition-colors duration-400">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight size={22} strokeWidth={1.5} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-400" />
                </a>
              </div>
            ))}
          </div>

          <div className="mobile-nav-link mt-10">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="inline-flex items-center justify-center gap-3 w-full py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 rounded-xl transition-colors duration-400"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="shrink-0 px-8 sm:px-12 pb-10 mt-8">
          <div className="mobile-nav-rule h-px bg-gray-200 mb-6" />
          <div className="mobile-nav-footer flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
            <a href="tel:+441234567890" className="flex items-center gap-3 text-gray-500 text-[13px] font-light hover:text-black transition-colors">
              <Phone size={14} className="text-black" />
              +44 123 456 7890
            </a>
            <a href="mailto:info@virajce.com" className="flex items-center gap-3 text-gray-500 text-[13px] font-light hover:text-black transition-colors">
              <Mail size={14} className="text-black" />
              info@virajce.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}