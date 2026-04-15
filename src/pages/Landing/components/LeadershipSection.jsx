const team = [
  {
    name: "Alexander Mitchell",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophia Reynolds",
    role: "Senior Agent",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James Thornton",
    role: "Consultant",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Olivia Bennett",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column: Text + Cards */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.2em] mb-4">
              Our Team
            </p>
            <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.15] mb-5">
              Meet Our<br />Expert Team
            </h2>
            <p className="text-muted text-[15px] leading-[1.75] mb-8">
              Our talented professionals bring expertise, dedication, and a genuine
              passion for helping you find the perfect home.
            </p>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
              alt="Our office"
              className="w-full h-40 object-cover rounded-xl hidden lg:block"
            />
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {team.map((member) => (
              <div key={member.name} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-playfair font-semibold text-lg">{member.name}</h3>
                  <p className="text-white/60 text-[13px] mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
