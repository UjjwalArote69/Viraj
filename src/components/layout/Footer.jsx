import { MapPin, Phone, Mail, ArrowRight, ArrowUp } from "lucide-react";

const quickLinks = ["Home", "About Us", "Properties", "Our Agents", "Blog", "Contact"];
const services = ["Buy Property", "Sell Property", "Rent Property", "Property Management", "Consultation", "Valuation"];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white" id="contact-us">
      {/* Headline */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-3">Connect With Us</p>
            <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold leading-[1.1]">
              Buy Your Favourite <span className="italic font-normal text-accent">House</span>
            </h2>
          </div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-full hover:bg-accent-hover transition-colors w-fit shrink-0"
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c2a36e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="font-playfair text-[16px]"><span className="font-semibold">LEON</span> HOME</span>
            </a>
            <p className="text-white/35 text-[13px] leading-[1.7]">
              Your trusted partner in finding extraordinary properties. Making the journey to your dream home seamless.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/35 text-[13px] hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/35 text-[13px] hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-white/35 text-[13px] leading-relaxed">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+1234567890" className="text-white/35 text-[13px] hover:text-accent transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:hello@leonhome.com" className="text-white/35 text-[13px] hover:text-accent transition-colors">hello@leonhome.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[12px]">&copy; {new Date().getFullYear()} Leon Home. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-white/30 hover:text-white"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
