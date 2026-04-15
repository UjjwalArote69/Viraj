import { Search, MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[750px] flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <p className="text-white/60 text-[11px] sm:text-[12px] tracking-[0.35em] uppercase mb-5 font-dm">
          Crafting Luxury For Modern Living
        </p>

        <h1 className="font-playfair text-[clamp(3rem,8vw,8rem)] font-bold text-white leading-[0.95] tracking-[-0.02em]">
          LEON <span className="italic font-normal">HOME</span>
        </h1>

        <p className="text-white/50 mt-6 text-[15px] max-w-md leading-relaxed">
          Discover extraordinary properties that redefine luxury living.
          Your dream home awaits.
        </p>

        {/* Search Bar */}
        <div className="mt-12 max-w-3xl">
          <div className="bg-white rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 items-stretch shadow-2xl">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-surface rounded-lg">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <input
                type="text"
                placeholder="Location"
                className="w-full text-[13px] outline-none bg-transparent placeholder:text-muted"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-surface rounded-lg">
              <select className="w-full text-[13px] outline-none bg-transparent text-muted cursor-pointer">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
              </select>
            </div>
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-surface rounded-lg">
              <select className="w-full text-[13px] outline-none bg-transparent text-muted cursor-pointer">
                <option>Price Range</option>
                <option>$100k - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-primary/85 transition-colors shrink-0">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about-us" className="flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
