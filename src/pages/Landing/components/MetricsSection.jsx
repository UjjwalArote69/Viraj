import { ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Sale" },
  { value: "16+", label: "Years Of Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

export default function MetricsSection() {
  return (
    <section className="py-24 lg:py-32" id="about-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold leading-[1.15] mb-6">
              Experience Excellence<br />In Real Estate
            </h2>
            <p className="text-muted text-[15px] leading-[1.75] mb-8 max-w-md">
              At Leon Home, we believe finding the perfect property is more than
              a transaction — it's a life-changing experience. With years of
              expertise and a passion for real estate, our dedicated team ensures
              every client receives personalized service.
            </p>
            <a
              href="#property"
              className="inline-flex items-center gap-2 bg-primary text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-primary/85 transition-colors"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Modern luxury house"
              className="w-full h-[400px] lg:h-[480px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 left-6 bg-accent text-white rounded-xl px-6 py-4">
              <p className="text-2xl font-bold font-playfair leading-none">16+</p>
              <p className="text-[12px] mt-1 text-white/80">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden mt-24 border border-line">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white p-8 text-center">
              <p className="text-3xl sm:text-4xl font-semibold font-playfair text-primary">{value}</p>
              <p className="text-muted text-[13px] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
