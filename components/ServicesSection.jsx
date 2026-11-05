"use client";

import { useState } from "react";
import Link from "next/link";

const allServices = [
  {
    id: 0,
    category: "development",
    num: "01",
    title: "Web Development",
    tagline: "Websites That Work as Hard as Your Business.",
    desc: "We create responsive, high-performance websites and web applications that deliver exceptional user experiences and support business growth.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    id: 1,
    category: "development",
    num: "02",
    title: "Mobile App Development",
    tagline: "Powerful Experiences in Every Hand.",
    desc: "We develop intuitive, scalable mobile applications that help businesses connect with customers across Android and iOS platforms.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    category: "development",
    num: "03",
    title: "Custom Software Development",
    tagline: "Software Designed Around Your Business.",
    desc: "We build customized software solutions that streamline operations, automate workflows, and solve real business challenges.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: 3,
    category: "design-cloud",
    num: "04",
    title: "UI/UX Design",
    tagline: "Beautiful Design. Meaningful Experiences.",
    desc: "We design modern, user-friendly digital experiences that combine visual creativity, intuitive navigation, and usability.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: 4,
    category: "design-cloud",
    num: "05",
    title: "Cloud & IT Solutions",
    tagline: "Build a Smarter Digital Infrastructure.",
    desc: "We help businesses adopt modern cloud technologies and IT solutions to improve flexibility, security, and operational efficiency.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    category: "design-cloud",
    num: "06",
    title: "Digital Marketing & Branding",
    tagline: "Reach the Right Audience with Impact.",
    desc: "We craft targeted digital marketing strategies and cohesive brand identities that expand your reach and accelerate customer acquisition.",
    icon: (
      <svg
        className="w-10 h-10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
];

const categories = [
  { id: "development", label: "Development & Engineering" },
  { id: "design-cloud", label: "Design, Cloud & Growth" },
  { id: "all", label: "All Specialities" },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("development");
  const [activeCard, setActiveCard] = useState(0);

  const displayedServices =
    activeCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Clean Sofbox Specialities Header          */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            Our Core Specialities
          </h2>
          {/* Centered cyan line bar */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            From initial concept to scalable deployment, we engineer digital solutions that solve real business challenges and unlock new possibilities.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN LAYOUT: Tablet on Left + Soft Glowing Cards Right */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Tablet with Apple Pencil (/about.png)
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] float-slow">
              <img
                src="/about.png"
                alt="TechnoSky Solutions Tablet"
                className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                width={1596}
                height={1032}
                loading="lazy"
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: TechnoSky Services with Soft Cyan Glow Cards
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 bg-[#f0f9ff]/70 rounded-full border border-sky-100 max-w-fit">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveCard(0);
                    }}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-[#38bdf8] text-white shadow-md shadow-sky-300/40 -translate-y-0.5"
                        : "text-[#64748b] hover:text-[#38bdf8] bg-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Stacked Cards with Soft Cyan Glow */}
            <div className="flex flex-col gap-5">
              {displayedServices.map((service, idx) => {
                const isActive = activeCard === service.id || (activeCard === 0 && idx === 0);

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveCard(service.id)}
                    onMouseEnter={() => setActiveCard(service.id)}
                    className={`group relative p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out border ${
                      isActive
                        ? "bg-white border-[#38bdf8]/40 -translate-y-1 shadow-[0_15px_40px_rgba(56,189,248,0.22),0_0_25px_rgba(80,193,229,0.18)]"
                        : "bg-white border-slate-100 hover:border-[#38bdf8]/30 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(56,189,248,0.16)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                      {/* Icon */}
                      <div className="shrink-0 w-13 h-13 rounded-xl flex items-center justify-center transition-transform duration-300">
                        {service.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <h3
                            className={`text-[19px] sm:text-[21px] font-extrabold font-display transition-colors duration-200 ${
                              isActive
                                ? "text-[#1a202c]"
                                : "text-[#1a202c] group-hover:text-[#38bdf8]"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <span className="text-[12px] font-extrabold text-[#38bdf8]/70 font-display">
                            {service.num}
                          </span>
                        </div>

                        <div className="text-[13px] font-semibold text-[#2596be] mb-1.5">
                          {service.tagline}
                        </div>

                        <p className="text-[#718096] text-[14px] leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Link */}
            <div className="mt-8 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#38bdf8] hover:text-[#0284c7] transition-all hover:translate-x-1"
              >
                <span>Discuss Your Project Requirements</span>
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
        </div>
      </div>
    </section>
  );
}
