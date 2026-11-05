"use client";

import { useState } from "react";
import Link from "next/link";

const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discover & Understand",
    desc: "We learn about your business, commercial goals, target audience, and system requirements to establish a solid foundation.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "Plan & Strategize",
    desc: "We define the technical architecture, project scope, cloud stack, sprint timeline, and development strategy for clear execution.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="4" y1="21" x2="4" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="10" x2="4" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="21" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="8" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="21" x2="20" y2="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="12" x2="20" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="1" y1="14" x2="7" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="8" x2="15" y2="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17" y1="16" x2="23" y2="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "UI/UX & Prototyping",
    desc: "Our design team transforms the plan into intuitive user journeys, high-fidelity wireframes, and pixel-perfect interactive prototypes.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Engineering & Build",
    desc: "Our engineers transform approved designs into clean, modular, high-performance code and scalable digital solutions.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: "05",
    phase: "Phase 05",
    title: "Test & Refine",
    desc: "We rigorously evaluate functionality, usability, cross-device responsiveness, and performance, resolving all identified issues.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12l2.5 2.5L16 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "06",
    phase: "Phase 06",
    title: "Launch & Support",
    desc: "We help deploy your solution safely to production and provide ongoing assistance, cloud monitoring, and optimization as you scale.",
    milestone: "Quality Assured Milestone",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.12-8.54L4.22 19.78l5.41-1.35m0 0l1.35-5.41" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-28 bg-[#fafcff] relative overflow-hidden">
      {/* Ambient background soft light glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Professional Sofbox Style                 */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] uppercase text-[#38bdf8] mb-3 font-display">
            HOW WE WORK
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            From Your Vision to a Successful Digital Product.
          </h2>
          {/* Centered blue accent bar matching screenshot */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            A structured process helps us turn complex ideas into practical digital solutions that deliver lasting commercial value.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3 CARDS IN A ROW GRID: Perfectly Balanced & Professional   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((item, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group relative bg-white rounded-2xl p-8 sm:p-9 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-out border ${
                  isActive
                    ? "border-[#38bdf8]/40 -translate-y-1.5 shadow-[0_15px_45px_rgba(56,189,248,0.22),0_0_25px_rgba(80,193,229,0.18)]"
                    : "border-slate-100 hover:border-[#38bdf8]/35 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(56,189,248,0.16)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                }`}
              >
                {/* Phase Tag */}
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#94a3b8] mb-4 font-display">
                  {item.phase}
                </span>

                {/* Circular Icon Badge matching screenshot */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#38bdf8] text-white shadow-[0_8px_20px_rgba(56,189,248,0.35)] scale-105"
                      : "bg-[#f0f9ff] text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(56,189,248,0.35)]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={`font-extrabold text-[20px] sm:text-[21px] font-display mt-5 mb-2.5 transition-colors duration-200 leading-snug ${
                    isActive ? "text-[#1a202c]" : "text-[#1a202c] group-hover:text-[#38bdf8]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#718096] text-[14px] leading-relaxed font-normal mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Quality Assured Milestone verification footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-[12px] font-bold text-[#0284c7]">
                  <span className="w-4 h-4 rounded-full bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[11.5px] tracking-tight">{item.milestone}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom invitation link */}
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[15px] font-bold text-[#38bdf8] hover:text-[#0284c7] transition-all hover:translate-x-1"
          >
            <span>Have questions about our process? Let&apos;s talk about your project</span>
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
    </section>
  );
}
