"use client";

import Link from "next/link";

export default function SofboxTabletShowcase() {
  return (
    /*
     * IMPORTANT: overflow is intentionally NOT set on this section.
     * The <main> wrapper already has overflow-x:clip, so the blobs
     * bleed off the left/right edges naturally — just like the reference —
     * without creating a horizontal scrollbar. Do NOT add overflow-hidden here.
     */
    <section id="about" className="py-24 bg-white relative">

      {/* ─────────────────────────────────────────────────────────────
          LEFT ORGANIC BLOB
          Outer div handles position; inner div handles animation transform.
          Bleeds off the left edge — matches the reference exactly.
      ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{ left: "-14vw", top: "50%", transform: "translateY(-55%)" }}
      >
        <div
          className="blob-move-left"
          style={{
            width: "clamp(300px, 38vw, 500px)",
            height: "clamp(360px, 46vw, 580px)",
            background: "#38bdf8",
            borderRadius: "52% 48% 44% 56% / 42% 56% 44% 58%",
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          RIGHT CIRCLE BLOB
          Matches the large circle on the bottom-right of the reference.
          It bleeds off the right edge and is partially cut by the viewport.
      ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none z-0 blob-move-right"
        style={{
          right: "-12vw",
          bottom: "-8%",
          width: "clamp(240px, 30vw, 420px)",
          height: "clamp(240px, 30vw, 420px)",
          background: "#38bdf8",
          borderRadius: "50%",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ═══════════════════════════════════════════
              LEFT COLUMN: Tablet + Pencil Showcase Image
          ═══════════════════════════════════════════ */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <img
              src="/whatcan.png"
              alt="What TechnoSky Can Do"
              className="w-full max-w-[560px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.13)] select-none pointer-events-none transition-transform duration-700 hover:scale-[1.02]"
              width={1596}
              height={953}
              loading="lazy"
            />
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN: Text Content
          ═══════════════════════════════════════════ */}
          <div className="space-y-5 order-1 lg:order-2">
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a202c] font-display tracking-tight leading-tight">
              What can TechnoSky do ?
            </h2>

            {/* Blue accent bar — matches reference exactly */}
            <div className="w-12 h-1 bg-[#38bdf8] rounded-full" />

            <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed max-w-xl pt-1 pb-3 font-normal">
              You can fully customize the template with ease. Every page is fully
              responsive and retina ready which makes your creation look good on
              any device.
            </p>

            <div>
              <Link
                href="/#services"
                className="inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-bold text-[15px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(56,189,248,0.35)] hover:shadow-[0_14px_30px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Click Here
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
