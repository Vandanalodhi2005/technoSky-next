"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blogData";

export default function SofboxBlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = blogArticles.length;

  // Auto-slide every 8 seconds (8000ms) as requested
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 8000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Create an extended array for smooth circular display
  const extendedArticles = [...blogArticles, ...blogArticles, ...blogArticles];

  return (
    <section id="blog" className="py-24 sm:py-28 bg-[#fafcff] relative overflow-hidden">
      <div className="container relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matching Screenshot "Latest Blog Post"     */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
            Latest Blog Post
          </h2>
          {/* Centered cyan line bar matching reference */}
          <div className="w-14 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Stay updated with our latest technical insights, industry trends, and software engineering breakthroughs.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BLOG CAROUSEL: Auto Slides Every 8 Seconds (8000ms)       */}
        {/* ========================================================= */}
        <div
          className="relative max-w-6xl mx-auto px-2 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_6px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center justify-center text-[#1a202c] hover:text-[#38bdf8] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_6px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center justify-center text-[#1a202c] hover:text-[#38bdf8] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {extendedArticles.slice(0, total + 3).map((article, idx) => {
                const isAudio = idx % total === 0;

                return (
                  <div
                    key={`${article.id}-${idx}`}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-4"
                  >
                    <article className="group bg-white rounded-lg border border-slate-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden">
                      {/* Featured Image with media overlay */}
                      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Optional Audio player bar overlay matching Card 1 in screenshot */}
                        {isAudio && (
                          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center justify-between text-xs text-slate-700 shadow-md z-10 border border-slate-200/50">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#38bdf8] text-white flex items-center justify-center text-[10px]">
                                ▶
                              </span>
                              <span className="text-[11px] font-semibold text-slate-600">0:00 / 4:30</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <span className="text-[10px]">🔊</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content Details */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-extrabold text-[18px] sm:text-[19px] text-[#1a202c] font-display group-hover:text-[#38bdf8] transition-colors line-clamp-1 mb-2.5 leading-snug">
                          <Link href={article.destination}>
                            {isAudio ? "Blogpost With Audio" : article.title}
                          </Link>
                        </h3>

                        <p className="text-[#718096] text-[13.5px] leading-relaxed line-clamp-2 mb-6 font-normal">
                          {article.description}
                        </p>

                        {/* Meta Row: Author + Date + Comments matching screenshot */}
                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-[12px] text-[#718096] font-medium">
                          {/* Author */}
                          <span className="flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors">
                            <svg className="w-3.5 h-3.5 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span>Tom Herry</span>
                          </span>

                          {/* Date */}
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>12 Aug 2025</span>
                          </span>

                          {/* Comments */}
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span>5</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Indicators / Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {blogArticles.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-8 h-2 bg-[#38bdf8] shadow-sm shadow-sky-300"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BRAND LOGOS RIBBON: Matching Bottom of Screenshot         */}
        {/* ========================================================= */}
        <div className="mt-20 pt-10 border-t border-slate-100/80">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {["APPINO", "APPINO", "APPINO", "APPINO", "APPINO"].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#334155] font-black tracking-tight text-[18px] font-display">
                <span className="w-5 h-5 rounded-md border-2 border-[#38bdf8] flex items-center justify-center text-[10px] text-[#38bdf8] font-bold">
                  A
                </span>
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

