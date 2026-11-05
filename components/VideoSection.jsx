"use client";

import { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section bg-gradient-to-b from-white via-[#f0f6ff]/50 to-white relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#1e6fff]/10 rounded-full blur-3xl pointer-events-none float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none float-alt" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow">SEE US IN ACTION</span>
          <h2 className="section-title mb-4">
            How TechnoSky Powers Digital Growth
          </h2>
          <p className="section-desc">
            Take a 2-minute tour of how our engineering teams design, build, and scale enterprise-grade digital experiences.
          </p>
        </div>

        {/* Video Thumbnail Frame with Pulsing Play Button */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(30,111,255,0.18)] border border-[#e8efff] group bg-[#0a1628]">
          <div className="relative aspect-[16/9] w-full flex items-center justify-center overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628] via-[#102a54] to-[#1e6fff]/70 opacity-95 group-hover:scale-105 transition-transform duration-700" />
            
            {/* High-tech dashboard grid overlay */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Inner Content */}
            <div className="relative z-10 text-center text-white px-6">
              {/* Pulsing Play Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Play Product Video Demo"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-[#1e6fff] flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.3)] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative cursor-pointer"
              >
                {/* Ripple glow rings */}
                <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping" />
                <span className="absolute -inset-3 rounded-full border-2 border-white/60 animate-pulse" />
                
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <h3 className="font-extrabold text-[22px] md:text-[28px] mb-2 tracking-tight">
                Watch Our Engineering Showcase
              </h3>
              <p className="text-[#94a3b8] text-[15px] font-medium max-w-md mx-auto">
                Explore our architecture philosophy, agile sprint milestones, and production deployment quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0a1628]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeInUp"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Video"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="TechnoSky Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

