import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Property", href: "#property" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={scrolled ? "#111" : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className={`font-playfair text-[17px] tracking-[0.02em] transition-colors duration-500 ${scrolled ? "text-primary" : "text-white"}`}>
            <span className="font-semibold">LEON</span> HOME
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-primary/70" : "text-white/75"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact-us"
          className={`hidden lg:inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-primary text-white hover:bg-primary/85"
              : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
          }`}
        >
          Contact Us <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className={`w-5 h-5 ${scrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-line">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[15px] text-primary/80 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 bg-primary text-white text-[13px] font-medium px-5 py-2.5 rounded-full mt-2"
              onClick={() => setOpen(false)}
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
