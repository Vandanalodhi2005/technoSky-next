"use client";

import { useState } from "react";
import Link from "next/link";

const advantages = [
  {
    id: 0,
    shortTitle: "Business-First",
    heading: "We Are An Agency That Focuses On Business-First Digital Solutions",
    desc: "Choosing the right technology partner makes all the difference. We thoroughly understand your commercial goals, user workflows, and growth targets before recommending the right technology stack, ensuring every digital product creates measurable, long-term commercial value.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 1,
    shortTitle: "Modern Tech",
    heading: "Future-Ready Architecture Built With Cutting-Edge Technology",
    desc: "We leverage modern frameworks, cloud architectures, and agile engineering practices to create fast, resilient, and future-ready digital solutions. From robust microservices to fluid interfaces, we build technology that keeps your business competitive.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    shortTitle: "Scalable Solutions",
    heading: "Software Architectures Engineered To Scale With Confidence",
    desc: "Your technology should accelerate your growth, never bottleneck it. Our software solutions are architected to scale smoothly as your user base and business transaction volumes grow, maintaining ultra-low latency and peak reliability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 3,
    shortTitle: "Quality-Focused",
    heading: "Rigorous Quality Standards & Pixel-Perfect Implementation",
    desc: "We emphasize high performance, intuitive usability, maintainability, and clean code that stands the test of time. Every product undergoes thorough automated and manual testing before launch to ensure flawless execution on every device.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    shortTitle: "Transparent Comm",
    heading: "Direct Collaboration & Clear Sprint Cadence Throughout",
    desc: "We believe great software is built through open, honest partnerships. We keep you informed throughout the project lifecycle with regular sprint reviews, transparent project milestones, and direct collaboration with our engineering team.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 5,
    shortTitle: "Ongoing Partnership",
    heading: "Long-Term Growth Partnership Beyond Initial Deployment",
    desc: "Our commitment doesn't end at launch. We support your digital journey well beyond initial deployment, assisting in ongoing performance optimization, feature iterations, security updates, and long-term strategic roadmapping.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function SofboxWhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeAdvantage = advantages[activeTab];

  return (
    <section
      id="advantage"
      className="py-24 sm:py-28 relative overflow-hidden text-white"
      style={{
        backgroundColor: "#50C1E5",
        backgroundImage: "linear-gradient(135deg, #50C1E5 0%, #38bdf8 100%)",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none float-alt" />

      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* HEADER: Matching Screenshot "Why Choose Sofbox ?"          */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-white font-display tracking-tight leading-tight">
            Why Choose TechnoSky ?
          </h2>
          {/* Centered white line bar */}
          <div className="w-14 h-1 bg-white mx-auto rounded-full mt-3 mb-4" />
          <p className="text-white/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Choosing the right technology partner makes all the difference. We focus on understanding your business, identifying opportunities, and delivering solutions that create meaningful value.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 6 INTERACTIVE TABS ROW (Matching Reference Screenshot)    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-14 sm:mb-18">
          {advantages.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl transition-all duration-300 text-center cursor-pointer ${
                  isActive
                    ? "bg-white/20 backdrop-blur-md border border-white/35 shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-white -translate-y-1 scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent transition-transform hover:-translate-y-0.5"
                }`}
              >
                <div className={`mb-2.5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                  {item.icon}
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold tracking-tight">
                  {item.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN LOWER CONTENT: Headline + Paragraph (Left) & Laptop (Right) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Dynamic Headline, Description & White CTA
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h3 className="text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold text-white font-display leading-[1.18] tracking-tight transition-all duration-300">
              {activeAdvantage.heading}
            </h3>

            <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal transition-all duration-300">
              {activeAdvantage.desc}
            </p>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-white text-[#1a202c] hover:bg-white/95 hover:text-[#50C1E5] font-bold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-[4px] shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 tracking-wide"
              >
                Let&apos;s Started
              </Link>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: Laptop Mockup (/hero.png) Matching Screenshot
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] float">
              <img
                src="/hero.png"
                alt="TechnoSky Dashboard Interface"
                className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.22)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                width={1069}
                height={687}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

