"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services does TechnoSky Solutions provide?",
    a: "We engineer end-to-end digital solutions including responsive web development, mobile app development (iOS & Android), custom enterprise software, UI/UX design, cloud architecture, and strategic digital marketing.",
  },
  {
    q: "Can you build a custom solution for my business?",
    a: "Yes. Every business has unique workflows. We conduct comprehensive discovery sessions to understand your commercial objectives, architect custom software, automate manual processes, and deliver scalable platforms that grow with you.",
  },
  {
    q: "How does a project begin and what is the typical workflow?",
    a: "It starts with an initial strategy consultation. We define the project roadmap, scope, deliverables, and architecture, followed by structured agile sprints with transparent milestone reporting.",
  },
  {
    q: "Do you provide ongoing support after project delivery?",
    a: "Yes. You can choose the maintenance tier that fits your needs. We provide proactive monitoring, routine cloud backups, framework security updates, and on-demand feature iterations as your business scales.",
  },
  {
    q: "How do you ensure code quality and system performance?",
    a: "Our senior engineering team follows strict clean-code principles, peer reviews, automated CI/CD pipelines, and rigorous cross-device testing to guarantee ultra-fast loading speeds and 99.9% uptime.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(3); // Default open 4th item matching screenshot

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. FAR LEFT: Potted House Plant (/pot.png)
          Shifted to the very left edge with generous distance to PC
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute left-0 sm:left-2 lg:left-6 bottom-0 z-20 pointer-events-none">
        <img
          src="/pot.png"
          alt="Office Plant Decoration"
          className="w-24 sm:w-36 lg:w-48 xl:w-52 h-auto select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
          width={200}
          height={400}
          loading="lazy"
        />
      </div>

      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matching Reference Screenshot             */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          {/* Centered cyan line bar */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Find clear answers to common questions about our technical capabilities, scoping, and ongoing engineering partnership.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN LAYOUT: iMac + Ring (Left) & FAQs (Right)         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Moving Ring + iMac Monitor (with distance from pot)
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[380px] sm:min-h-[440px] pl-4 sm:pl-8 lg:pl-12">
            {/* Moving Cyan Ring behind the monitor */}
            <div
              className="absolute z-0 pointer-events-none faq-ring-motion"
              style={{
                left: "8%",
                top: "14%",
                width: "clamp(240px, 32vw, 360px)",
                height: "clamp(240px, 32vw, 360px)",
                border: "22px solid #38bdf8",
                borderRadius: "50%",
                boxShadow: "0 10px 35px rgba(56, 189, 248, 0.22)",
              }}
            />

            {/* Center iMac Dashboard Display Mockup (/faq.png) */}
            <div className="relative z-10 w-full max-w-[480px] float-slow">
              <img
                src="/faq.png"
                alt="TechnoSky Dashboard FAQ Interface"
                className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.14)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                width={687}
                height={648}
                loading="lazy"
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: Sofbox Style FAQ Accordion with Cyan Buttons
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-[4px] transition-all duration-300 overflow-hidden"
                >
                  {/* Question Bar */}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className={`w-full flex items-center justify-between text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "bg-[#f8fafc] shadow-sm border border-slate-200/90 rounded-t-[4px]"
                        : "bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200/60 rounded-[4px]"
                    }`}
                  >
                    <span className="font-bold text-[15px] sm:text-[16px] text-[#1a202c] font-display px-5 sm:px-6 py-4 flex-1">
                      {faq.q}
                    </span>

                    {/* Cyan Square Button on Right */}
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#38bdf8] text-white flex items-center justify-center shrink-0 transition-colors hover:bg-[#0284c7]">
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Answer */}
                  {isOpen && (
                    <div className="bg-white px-5 sm:px-6 py-5 border-x border-b border-slate-200/90 rounded-b-[4px] text-[#718096] text-[14px] sm:text-[15px] leading-relaxed shadow-sm">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
