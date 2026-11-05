"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "John Deo",
    role: "CEO, Softbox",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256",
    quote:
      "TechnoSky Solutions brought tremendous clarity to our product roadmap. Their team communicated transparently at every sprint, systematically eliminating technical debt and delivering an architecture that scales reliably under peak loads.",
  },
  {
    name: "Jason Adams",
    role: "CTO, CloudSphere",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256",
    quote:
      "The engineering quality and attention to detail exceeded all our benchmarks. Intuitive UX paired with clean, modular code made onboarding frictionless across our entire mobile and web ecosystem.",
  },
  {
    name: "Jenny Adams",
    role: "VP of Product, OmniTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256",
    quote:
      "Partnering with TechnoSky transformed our digital platform. Core performance improved dramatically, resulting in higher user retention and zero downtime during our highest-traffic marketing launches.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-28 bg-[#fafcff] relative overflow-hidden">
      {/* Ambient background soft light glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matching Screenshot "Loved By Our Customers" */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            Loved By Our Customers
          </h2>
          {/* Centered cyan line bar matching reference */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            See how forward-thinking companies scale faster, reduce technical friction, and succeed with TechnoSky.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TESTIMONIAL CARDS: 3 in a row matching reference screenshot */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg border border-slate-100/90 border-b-4 border-b-[#38bdf8] shadow-[0_6px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(56,189,248,0.18)] hover:-translate-y-2 transition-all duration-300 relative flex flex-col items-center text-center pt-14 pb-8 px-7 sm:px-9"
            >
              {/* Overlapping Centered Circular Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden bg-slate-100 z-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quotation Marks in Corners matching screenshot */}
              <span className="absolute top-4 left-6 text-[44px] font-serif text-slate-200/70 group-hover:text-[#38bdf8]/30 transition-colors leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              <span className="absolute bottom-4 right-6 text-[44px] font-serif text-slate-200/70 group-hover:text-[#38bdf8]/30 transition-colors leading-none select-none pointer-events-none">
                &rdquo;
              </span>

              {/* Client Name */}
              <h3 className="font-extrabold text-[19px] sm:text-[20px] text-[#1a202c] font-display mb-1 group-hover:text-[#38bdf8] transition-colors">
                {item.name}
              </h3>

              {/* Role & Company */}
              <div className="text-[#38bdf8] font-bold text-[13px] tracking-wide mb-4">
                {item.role}
              </div>

              {/* Testimonial Quote */}
              <p className="text-[#718096] text-[13.5px] sm:text-[14px] leading-relaxed font-normal relative z-10">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
