"use client";

import { useState } from "react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Global Fintech Cloud Portal",
    category: "Web & Apps",
    desc: "Next-gen enterprise banking dashboard featuring real-time financial telemetry, automated microservice settlements, and zero-trust security.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    title: "Autonomous Supply Chain Suite",
    category: "Enterprise Software",
    desc: "Custom ERP ecosystem orchestrating distributed warehouse robotics, real-time inventory telemetry, and predictive freight logistics.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Luxe Retail Omnichannel Platform",
    category: "E-Commerce",
    desc: "Headless commerce storefront engineered for sub-second page transitions, dynamic personalized checkout, and AR visualizer.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Healthcare Telematics App",
    category: "Web & Apps",
    desc: "Intuitive patient diagnostic mobile platform with encrypted consultations, biometric verification, and instant lab EHR telemetry.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Kubernetes Multi-Region Pipeline",
    category: "Cloud & DevOps",
    desc: "Automated multi-cloud infrastructure managing 50M+ daily transactions with sub-millisecond failover and horizontal scaling.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: "Cognitive CRM Workflow Engine",
    category: "Enterprise Software",
    desc: "Intelligent customer journey orchestrator with natural language intent classification, automated funnels, and unified telemetry.",
    icon: (
      <svg className="w-8 h-8 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2m0 16v-2m8-6h-2M4 12H2m15.5-6.5L16 7m-8 8l-1.5 1.5M19 16l-1.5-1.5M6.5 6.5L8 8" />
        <path d="M14 10l-9 9a2 2 0 0 1-2.83-2.83l9-9a2 2 0 0 1 2.83 2.83z" />
      </svg>
    ),
  },
];

const filterCategories = [
  "All",
  "Web & Apps",
  "Enterprise Software",
  "E-Commerce",
  "Cloud & DevOps",
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCard, setActiveCard] = useState(1); // Default active on Card 2 (matching screenshot)

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="pt-24 sm:pt-28 pb-0 bg-[#fafcff] relative overflow-hidden">
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* SECTION HEADER: Matching Reference Screenshot             */}
      {/* ========================================================= */}
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] uppercase text-[#38bdf8] mb-3 font-display">
            OUR WORK
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            Ideas Turned Into Digital Experiences.
          </h2>
          {/* Centered blue accent bar matching screenshot */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Every project is an opportunity to solve a complex challenge, architect scalable software, and deliver measurable commercial value.
          </p>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((cat) => {
              const isSelected = activeFilter === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#38bdf8] text-white shadow-md shadow-sky-300/40 -translate-y-0.5"
                      : "bg-white text-[#64748b] hover:text-[#38bdf8] border border-slate-200/80 hover:border-[#38bdf8]/40 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* EXACT CARDS DESIGN: Matching Reference Screenshot (3x2)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredItems.map((project, idx) => {
            const isActive = activeCard === idx;

            return (
              <div
                key={project.title}
                onClick={() => setActiveCard(idx)}
                onMouseEnter={() => setActiveCard(idx)}
                className={`group bg-white rounded-xl p-7 sm:p-8 cursor-pointer transition-all duration-300 ease-out border ${
                  isActive
                    ? "border-[#38bdf8]/40 border-b-2 border-b-[#38bdf8] -translate-y-1 shadow-[0_15px_40px_rgba(56,189,248,0.20),0_0_20px_rgba(80,193,229,0.15)]"
                    : "border-slate-100 hover:border-[#38bdf8]/30 hover:border-b-2 hover:border-b-[#38bdf8] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(56,189,248,0.14)] shadow-[0_2px_15px_rgba(0,0,0,0.02)]"
                }`}
              >
                {/* Header: Icon + Title in Horizontal Row */}
                <div className="flex items-center gap-4 mb-3.5">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {project.icon}
                  </div>
                  <h3
                    className={`font-extrabold text-[18px] sm:text-[19px] font-display transition-colors duration-200 leading-snug ${
                      isActive ? "text-[#1a202c]" : "text-[#1a202c] group-hover:text-[#38bdf8]"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#718096] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                  {project.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#1a202c] hover:bg-[#38bdf8] text-white font-bold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-[4px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Start a Project With Us</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 100% FULL-WIDTH WORKSPACE FLAT-LAY BANNER (AFTER CARDS)   */}
      {/* ========================================================= */}
      <div className="w-full mt-16 sm:mt-20 leading-none overflow-hidden">
        <img
          src="/bg.png"
          alt="TechnoSky Modern Digital Workspace"
          className="w-full h-auto object-cover sm:object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] block"
          width={1920}
          height={450}
        />
      </div>
    </section>
  );
}
