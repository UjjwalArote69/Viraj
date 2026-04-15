import { useState } from "react";
import { ArrowRight, Calendar, Plus, Minus, MessageCircle, Send } from "lucide-react";

const posts = [
  {
    title: "Top 10 Tips For First-Time Home Buyers In 2025",
    category: "Buying Guide",
    date: "Mar 15, 2025",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How To Stage Your Home For A Quick Sale",
    category: "Selling Tips",
    date: "Mar 10, 2025",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "The Future Of Smart Homes And Real Estate",
    category: "Industry Trends",
    date: "Mar 5, 2025",
    img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=600&q=80",
  },
];

const faqs = [
  { q: "How do I start the home buying process?", a: "Begin by assessing your budget, getting pre-approved for a mortgage, and connecting with one of our experienced agents who will guide you through every step." },
  { q: "What documents do I need to buy a property?", a: "Typically you'll need proof of identity, income verification, bank statements, tax returns, and a pre-approval letter from your lender." },
  { q: "How long does it take to close on a property?", a: "The closing process usually takes 30-45 days from the accepted offer, depending on financing, inspections, and any negotiations." },
  { q: "Do you offer virtual property tours?", a: "Yes! We offer immersive 3D virtual tours and live video walkthroughs for all our listed properties." },
  { q: "What areas do you serve?", a: "We serve major metropolitan areas across the United States, including Beverly Hills, Manhattan, Miami Beach, Austin, and Chicago." },
];

export default function PhilosophySection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* ── Blog / Insights ── */}
      <section className="py-24 lg:py-32" id="blog">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">Our Blog</p>
              <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold leading-[1.15]">
                Discover Insights, Trends,<br className="hidden sm:block" /> And Inspiration
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:gap-2.5 transition-all">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Featured + Sidebar */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
            {/* Featured */}
            <article className="group relative rounded-2xl overflow-hidden h-[400px] lg:h-auto">
              <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="inline-block bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{posts[0].category}</span>
                <h3 className="font-playfair font-semibold text-xl text-white leading-snug mb-2">{posts[0].title}</h3>
                <p className="text-white/50 text-[12px] flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {posts[0].date}</p>
              </div>
            </article>

            {/* Side Posts */}
            <div className="flex flex-col gap-6">
              {posts.slice(1).map((post) => (
                <article key={post.title} className="group flex gap-5 items-center rounded-2xl border border-line bg-white overflow-hidden hover:shadow-md transition-shadow">
                  <div className="w-40 h-36 shrink-0 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="py-4 pr-5">
                    <span className="text-accent text-[10px] font-semibold uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-playfair font-semibold text-[15px] leading-snug mt-1.5 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-muted text-[12px] flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">FAQ</p>
              <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.15] mb-5">
                Frequently Asked<br />Questions
              </h2>
              <p className="text-muted text-[15px] leading-[1.75] mb-8">
                Have questions about buying, selling, or renting? We've got answers to help you navigate your journey.
              </p>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4 border border-line">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[14px] font-medium">Still have questions?</p>
                  <p className="text-muted text-[13px]">
                    <a href="mailto:hello@leonhome.com" className="text-accent hover:underline">hello@leonhome.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className={`rounded-xl border transition-all duration-200 ${isOpen ? "bg-white border-accent/30" : "bg-white border-line"}`}>
                    <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                      <span className={`text-[14px] font-medium pr-4 ${isOpen ? "text-primary" : "text-primary/80"}`}>{faq.q}</span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-muted text-[14px] leading-[1.7]">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-5">Get Started</p>
          <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold text-white leading-[1.15] mb-5">
            Start Your Journey To A New Home With Leon
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
            Subscribe to our newsletter for new listings, market insights, and exclusive property deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[13px] outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-[13px] font-medium transition-colors flex items-center gap-2 justify-center">
              Subscribe <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
