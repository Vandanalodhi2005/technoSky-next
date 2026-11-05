"use client";

import { useState } from "react";
import Link from "next/link";

const stats = [
  {
    id: 0,
    value: "500+",
    label: "PROJECTS DELIVERED",
    icon: (
      <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 1,
    value: "99.8%",
    label: "CLIENT SATISFACTION",
    icon: (
      <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    value: "15+",
    label: "GLOBAL MARKETS",
    icon: (
      <svg className="w-8 h-8 shrink-0 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    value: "24/7",
    label: "DEDICATED SUPPORT",
    icon: (
      <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function StatsCounter() {
  const [activeBox, setActiveBox] = useState(3); // Default Box 4 (signature cyan box matching screenshot)

  return (
    <section id="stats" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Soft & Light Heading + Description + CTAs
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-[#38bdf8]">
              READY FOR WHAT&apos;S NEXT?
            </span>

            <h2 className="text-[30px] sm:text-[38px] font-bold text-[#1a202c] leading-tight tracking-tight">
              Your Business Deserves Better Technology.
            </h2>

            <p className="text-[#718096] text-[15px] sm:text-[15.5px] leading-relaxed max-w-xl font-normal">
              Whether you&apos;re launching a new idea, modernizing an existing platform, or improving business operations, we help you turn technology into a competitive advantage. Let&apos;s build solutions that simplify work, improve experiences, and create opportunities for growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/#contact"
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-semibold text-[14px] px-7 py-3 rounded-full shadow-[0_4px_16px_rgba(56,189,248,0.25)] hover:shadow-[0_8px_22px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <Link
                href="/#contact"
                className="bg-transparent hover:bg-slate-50 text-slate-700 hover:text-[#38bdf8] border border-slate-200 hover:border-[#38bdf8] font-semibold text-[14px] px-6 py-2.5 rounded-full transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: 2x2 Soft Light Stats Grid (Matching Screenshot)
          ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-lg mx-auto lg:ml-auto">
              {stats.map((stat, idx) => {
                const isActive = activeBox === idx;

                return (
                  <div
                    key={stat.label}
                    onClick={() => setActiveBox(idx)}
                    onMouseEnter={() => setActiveBox(idx)}
                    className={`rounded-lg p-6 sm:p-7 cursor-pointer transition-all duration-300 ease-out border flex items-center gap-4 sm:gap-5 ${
                      isActive
                        ? "bg-[#38bdf8] text-white border-[#38bdf8] shadow-[0_10px_25px_rgba(56,189,248,0.25)] -translate-y-0.5"
                        : "bg-white text-slate-800 border-slate-100/90 hover:border-[#38bdf8]/35 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(56,189,248,0.10)]"
                    }`}
                  >
                    {/* Minimalist Thin Line Icon */}
                    <div
                      className={`transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#38bdf8]"
                      }`}
                    >
                      {stat.icon}
                    </div>

                    {/* Number + Light Tracking Label */}
                    <div>
                      <div
                        className={`text-[26px] sm:text-[30px] font-bold leading-none mb-1.5 transition-colors duration-200 ${
                          isActive ? "text-white" : "text-[#2c3e50]"
                        }`}
                      >
                        {stat.value}
                      </div>

                      <div
                        className={`text-[11px] font-medium tracking-[1.5px] uppercase transition-colors duration-200 ${
                          isActive ? "text-white/85" : "text-[#8898aa]"
                        }`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
