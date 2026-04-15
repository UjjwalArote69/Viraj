import { useState } from "react";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight, ArrowUpRight } from "lucide-react";

const filters = ["All", "Apartment", "Villa", "Townhouse", "Penthouse"];

const properties = [
  {
    title: "Sunset Valley Estate",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    beds: 5, baths: 4, sqft: "4,200",
    type: "Villa",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Modern Skyline Apt",
    location: "Manhattan, NY",
    price: "$1,200,000",
    beds: 3, baths: 2, sqft: "2,100",
    type: "Apartment",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL",
    price: "$3,800,000",
    beds: 4, baths: 3, sqft: "3,500",
    type: "Penthouse",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Lakeside Townhouse",
    location: "Austin, TX",
    price: "$850,000",
    beds: 3, baths: 2, sqft: "2,400",
    type: "Townhouse",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hillside Modern Villa",
    location: "Malibu, CA",
    price: "$4,200,000",
    beds: 6, baths: 5, sqft: "5,800",
    type: "Villa",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Downtown Luxury Apt",
    location: "Chicago, IL",
    price: "$950,000",
    beds: 2, baths: 2, sqft: "1,800",
    type: "Apartment",
    img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  { title: "Apartment", count: "120+ Listings", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" },
  { title: "Villa", count: "85+ Listings", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80" },
  { title: "Penthouse", count: "45+ Listings", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80" },
  { title: "Commercial", count: "60+ Listings", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? properties : properties.filter((p) => p.type === active);

  return (
    <>
      {/* ── Property Listings ── */}
      <section className="py-24 lg:py-32" id="property">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">Properties</p>
              <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold leading-[1.15]">
                Find Your Dream Home Today
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:gap-2.5 transition-all">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-primary text-white"
                    : "bg-surface text-muted hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Property Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, 6).map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden bg-white border border-line hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    For Sale
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-muted text-[12px] mb-1.5">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </div>
                  <h3 className="font-playfair font-semibold text-[16px] mb-1">{p.title}</h3>
                  <p className="text-accent font-semibold text-lg font-playfair mb-4">{p.price}</p>
                  <div className="flex items-center gap-4 pt-3 border-t border-line text-muted text-[12px]">
                    <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" /> {p.beds} Beds</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths} Baths</span>
                    <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {p.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Property Categories ── */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">Categories</p>
            <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold leading-[1.15] mb-4">
              Discover Luxury Property
            </h2>
            <p className="text-muted text-[15px] leading-relaxed">
              Explore our curated collection of premium property categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[220px] lg:auto-rows-[240px]">
            {/* Apartment - tall left */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer lg:col-span-5 sm:row-span-2">
              <img src={categories[0].img} alt={categories[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-playfair font-semibold text-xl">{categories[0].title}</h3>
                  <p className="text-white/60 text-[13px] mt-1">{categories[0].count}</p>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            {/* Villa */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer lg:col-span-7">
              <img src={categories[1].img} alt={categories[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-playfair font-semibold text-xl">{categories[1].title}</h3>
                  <p className="text-white/60 text-[13px] mt-1">{categories[1].count}</p>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            {/* Penthouse */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer lg:col-span-4">
              <img src={categories[2].img} alt={categories[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-playfair font-semibold text-xl">{categories[2].title}</h3>
                  <p className="text-white/60 text-[13px] mt-1">{categories[2].count}</p>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            {/* Commercial */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer lg:col-span-3">
              <img src={categories[3].img} alt={categories[3].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-playfair font-semibold text-xl">{categories[3].title}</h3>
                  <p className="text-white/60 text-[13px] mt-1">{categories[3].count}</p>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
