import Link from "next/link";
import FloatingBubbles from "@/components/FloatingBubbles";
import SofboxHeroDevices from "@/components/SofboxHeroDevices";
import SofboxIntroBlobs from "@/components/SofboxIntroBlobs";
import SofboxTabletShowcase from "@/components/SofboxTabletShowcase";
import ServicesSection from "@/components/ServicesSection";
import SofboxWhyChooseUs from "@/components/SofboxWhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TechExpertiseSection from "@/components/TechExpertiseSection";
import VideoSection from "@/components/VideoSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SofboxBlogSlider from "@/components/SofboxBlogSlider";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white">
      {/* ========================================================= */}
      {/* SECTION 1: EXACT SOFBOX HERO RECREATION (2-COLUMN DESKTOP) */}
      {/* ========================================================= */}
      <section
        className="relative pt-28 pb-0 md:pt-36 lg:pt-40 text-white overflow-hidden"
        style={{
          backgroundColor: "#50C1E5",
          backgroundImage:
            "linear-gradient(135deg, rgba(80, 193, 229, 0.86) 0%, rgba(56, 189, 248, 0.80) 100%), url('/hero-m.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Layer 3: Preserved Floating Glass Bubbles Animation */}
        <FloatingBubbles count={14} variant="upward" color="white" baseOpacity={0.45} />

        {/* Ambient Subtle Highlights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none float" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none float-alt" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ══════════════════════════════════════════════════════════
                LEFT COLUMN: Heading, Subtitle & White Rectangular Button
            ══════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-6 text-left hero-entrance-left">
              {/* Optional Eyebrow */}
              <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-white/90 mb-3 font-display">
                INNOVATION MEETS TECHNOLOGY
              </div>

              {/* Large White Uppercase Heading matching reference */}
              <h1 className="text-white uppercase mb-6 font-display leading-[1.08] tracking-tight">
                <span className="block font-light text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[56px] tracking-wide text-white">
                  BUILDING
                </span>
                <span className="block font-black text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[56px] text-white mt-1">
                  DIGITAL SOLUTIONS THAT MOVE BUSINESS FORWARD
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mb-8 font-normal font-display">
                We create innovative websites, custom software, and digital experiences that help businesses simplify operations, connect with customers, and grow with confidence.
              </p>

              {/* White Rectangular CTA Button matching reference */}
              <div className="flex items-center gap-4">
                <Link
                  href="#services"
                  className="inline-block bg-white text-[#1a202c] hover:text-[#50C1E5] font-bold text-[14px] px-8 py-3.5 rounded-[4px] shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 tracking-wide"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
                RIGHT COLUMN: 3-Device Mockup Composition (Laptop + Watch + Phone)
            ══════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end hero-entrance-right -mb-6 sm:-mb-10 lg:-mb-14">
              <SofboxHeroDevices />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM CURVED WHITE WAVE (Matching Screenshot Arc)
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mt-6 sm:-mt-12 md:-mt-16">
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block min-h-[90px] sm:min-h-[130px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,175 C320,240 580,110 920,135 C1180,155 1340,95 1440,115 L1440,220 L0,220 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT IS TECHNOSKY ? (4 ORGANIC BLOBS MATCHING SCREENSHOT) */}
      {/* ========================================================= */}
      <SofboxIntroBlobs />

      {/* Client Logos / Trust Ribbon */}
      <div className="container pb-14 pt-4">
        <p className="text-center text-[12px] font-bold uppercase tracking-[2px] text-[#94a3b8] mb-8">
          Trusted by Forward-Thinking Enterprises &amp; Fast-Growing Startups
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {["CloudSphere", "NeuralCore", "OmniTech", "VanguardData", "SynapseAI", "ApexLogistics"].map((brand) => (
            <span key={brand} className="text-[17px] font-extrabold tracking-tight text-[#334155] font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#2596be]" />
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 2: WHAT CAN TECHNOSKY DO? (IPAD + PENCIL BLOBS) */}
      {/* ========================================================= */}
      <SofboxTabletShowcase />

      {/* ========================================================= */}
      {/* SECTION 3: OUR SERVICES                                   */}
      {/* ========================================================= */}
      <ServicesSection />

      {/* ========================================================= */}
      {/* SECTION 4: WHY CHOOSE TECHNOSKY (ADVANTAGE TABS + LAPTOP) */}
      {/* ========================================================= */}
      <SofboxWhyChooseUs />

      {/* ========================================================= */}
      {/* SECTION 5: OUR DEVELOPMENT PROCESS                       */}
      {/* ========================================================= */}
      <ProcessSection />

      {/* ========================================================= */}
      {/* SECTION 6: TECHNOLOGY EXPERTISE                           */}
      {/* ========================================================= */}
      <TechExpertiseSection />

      {/* ========================================================= */}
      {/* SECTION 7: VIDEO DEMO SHOWCASE (SOFBOX SECTION 7)         */}
      {/* ========================================================= */}
      <div id="video">
        <VideoSection />
      </div>

      {/* ========================================================= */}
      {/* SECTION 8: FEATURED PROJECTS / PORTFOLIO                  */}
      {/* ========================================================= */}
      <PortfolioSection />

      {/* ========================================================= */}
      {/* SECTION 8: BUSINESS TRANSFORMATION & STATS COUNTER        */}
      {/* ========================================================= */}
      <StatsCounter />

      {/* ========================================================= */}
      {/* SECTION 9: CLIENT TESTIMONIALS                            */}
      {/* ========================================================= */}
      <TestimonialsSection />

      {/* ========================================================= */}
      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS                   */}
      {/* ========================================================= */}
      <FAQSection />

      {/* ========================================================= */}
      {/* SECTION 11: SOFBOX BLOG SLIDER (AUTO SLIDES EVERY 8 SEC)   */}
      {/* ========================================================= */}
      <SofboxBlogSlider />

      {/* ========================================================= */}
      {/* SECTION 12: SOFBOX NEWSLETTER (CYAN PHOTO OVERLAY)         */}
      {/* ========================================================= */}
      <Newsletter />
    </main>
  );
}

