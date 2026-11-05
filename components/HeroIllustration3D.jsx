"use client";

export default function HeroIllustration3D() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Radial soft background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1e6fff]/20 via-[#00d4ff]/15 to-transparent rounded-full blur-[90px] pulse-ring" />
      
      {/* Rotating geometric dashed halo rings */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#1e6fff]/30 spin-slow" />
      <div className="absolute w-[75%] h-[75%] rounded-full border border-[#00d4ff]/20 animate-spin" style={{ animationDuration: "35s" }} />

      {/* Main SVG Composition */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(30,111,255,0.22)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4788ff" />
            <stop offset="50%" stopColor="#1e6fff" />
            <stop offset="100%" stopColor="#0a4fd4" />
          </linearGradient>

          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>

          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="100%" stopColor="rgba(235, 245, 255, 0.4)" />
          </linearGradient>

          <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e6fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
          </linearGradient>

          <radialGradient id="hologramBase" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#1e6fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0a1628" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* 1. Holographic Base Platform */}
        <g transform="translate(100, 390)">
          {/* Base shadow ellipse */}
          <ellipse cx="200" cy="110" rx="190" ry="50" fill="url(#hologramBase)" />
          <ellipse cx="200" cy="95" rx="170" ry="40" fill="none" stroke="#1e6fff" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="6 6" />
          <ellipse cx="200" cy="85" rx="145" ry="32" fill="url(#platformGrad)" stroke="#00d4ff" strokeWidth="1.5" />
          <ellipse cx="200" cy="80" rx="110" ry="22" fill="#e0f2fe" fillOpacity="0.3" stroke="#4788ff" strokeWidth="1" />
        </g>

        {/* 2. Floating Main Glass Dashboard Window (Central 3D Block) */}
        <g className="float" filter="url(#cardShadow)">
          {/* Window Glass Container */}
          <rect
            x="130"
            y="110"
            width="340"
            height="270"
            rx="24"
            fill="url(#glassGrad)"
            stroke="white"
            strokeWidth="2"
          />

          {/* Window Header Bar */}
          <rect x="130" y="110" width="340" height="42" rx="24" fill="#f8fafc" fillOpacity="0.8" />
          <line x1="130" y1="152" x2="470" y2="152" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Window action dots */}
          <circle cx="160" cy="131" r="5" fill="#ef4444" />
          <circle cx="178" cy="131" r="5" fill="#f59e0b" />
          <circle cx="196" cy="131" r="5" fill="#10b981" />
          
          {/* Search/Address bar inside mockup */}
          <rect x="220" y="122" width="160" height="18" rx="9" fill="#e2e8f0" fillOpacity="0.6" />
          <line x1="230" y1="131" x2="280" y2="131" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* Window Inner Content: Hero Chart & Article preview */}
          <rect x="155" y="170" width="130" height="75" rx="14" fill="url(#blueGrad)" />
          {/* Graph wave in hero block */}
          <path
            d="M 165 220 Q 185 185, 210 205 T 255 190 T 275 210"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="255" cy="190" r="4" fill="white" />

          {/* Right column text placeholders */}
          <rect x="300" y="174" width="145" height="12" rx="6" fill="#1e6fff" fillOpacity="0.8" />
          <rect x="300" y="196" width="125" height="8" rx="4" fill="#94a3b8" fillOpacity="0.5" />
          <rect x="300" y="210" width="135" height="8" rx="4" fill="#94a3b8" fillOpacity="0.5" />
          <rect x="300" y="224" width="90" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />

          {/* Bottom Feed preview cards */}
          <rect x="155" y="265" width="290" height="42" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="178" cy="286" r="12" fill="#00d4ff" fillOpacity="0.2" />
          <path d="M174 286h8M178 282v8" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <rect x="200" y="278" width="130" height="8" rx="4" fill="#334155" />
          <rect x="200" y="291" width="80" height="6" rx="3" fill="#94a3b8" />
          <rect x="390" y="277" width="40" height="18" rx="9" fill="#1e6fff" fillOpacity="0.1" />

          <rect x="155" y="318" width="290" height="42" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="178" cy="339" r="12" fill="#1e6fff" fillOpacity="0.15" />
          <path d="M174 339l3 3 5-5" stroke="#1e6fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="200" y="331" width="150" height="8" rx="4" fill="#334155" />
          <rect x="200" y="344" width="95" height="6" rx="3" fill="#94a3b8" />
        </g>

        {/* 3. Floating Left Glass Card (Analytics / Speed) */}
        <g className="float-alt" filter="url(#cardShadow)">
          <rect
            x="60"
            y="230"
            width="140"
            height="110"
            rx="18"
            fill="url(#glassGrad)"
            stroke="white"
            strokeWidth="1.5"
          />
          <circle cx="95" cy="265" r="18" fill="url(#cyanGrad)" />
          <path
            d="M90 265 L94 269 L101 260"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="85" y="305" fill="#0a1628" fontSize="14" fontWeight="bold" fontFamily="sans-serif">99.9%</text>
          <text x="75" y="322" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="sans-serif">Uptime Reliability</text>
        </g>

        {/* 4. Floating Right Glass Card (Growth / AI Indicator) */}
        <g className="float-slow" filter="url(#cardShadow)">
          <rect
            x="410"
            y="170"
            width="145"
            height="125"
            rx="18"
            fill="url(#glassGrad)"
            stroke="white"
            strokeWidth="1.5"
          />
          <rect x="425" y="185" width="34" height="34" rx="10" fill="url(#blueGrad)" />
          {/* Sparkles / AI icon inside */}
          <path
            d="M442 193L443.5 198.5L449 200L443.5 201.5L442 207L440.5 201.5L435 200L440.5 198.5Z"
            fill="white"
          />
          <text x="425" y="240" fill="#0a1628" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Smart Cloud</text>
          <text x="425" y="258" fill="#1e6fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">+350% Scale</text>
          <rect x="425" y="270" width="115" height="6" rx="3" fill="#e2e8f0" />
          <rect x="425" y="270" width="85" height="6" rx="3" fill="url(#cyanGrad)" />
        </g>

        {/* 5. Floating 3D Geometric Ornaments */}
        {/* Glossy blue sphere top right */}
        <g className="float" style={{ animationDelay: "1s" }}>
          <circle cx="480" cy="90" r="22" fill="url(#blueGrad)" filter="url(#cardShadow)" />
          <ellipse cx="473" cy="83" rx="7" ry="4" fill="white" fillOpacity="0.6" transform="rotate(-30 473 83)" />
        </g>

        {/* Cyan mini sphere top left */}
        <g className="float-alt" style={{ animationDelay: "0.5s" }}>
          <circle cx="105" cy="130" r="14" fill="url(#cyanGrad)" />
          <ellipse cx="100" cy="125" rx="4" ry="2" fill="white" fillOpacity="0.7" />
        </g>

        {/* Floating 3D Cube / Diamond bottom right */}
        <g className="float-slow" style={{ animationDelay: "1.5s" }} transform="translate(470, 360)">
          <path d="M25 0 L50 15 L25 30 L0 15 Z" fill="#60a5fa" />
          <path d="M0 15 L25 30 L25 60 L0 45 Z" fill="#2563eb" />
          <path d="M50 15 L25 30 L25 60 L50 45 Z" fill="#1d4ed8" />
        </g>

        {/* Floating Ring / Torus bottom left */}
        <g className="float" style={{ animationDelay: "2s" }} transform="translate(70, 380)">
          <ellipse cx="30" cy="20" rx="28" ry="14" fill="none" stroke="url(#cyanGrad)" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

