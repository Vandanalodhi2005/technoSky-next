"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-[#2b303a] font-sans relative overflow-hidden">
      {/* Main 5-Column Navigation matching Sofbox Reference */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Platforms */}
          <div>
            <h4 className="text-[16px] font-bold text-[#1a202c] mb-4 font-display">
              Platforms
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#718096]">
              {["Linux", "Windows", "Web", "Android", "iOS / Cloud"].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="hover:text-[#2596be] transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="text-[16px] font-bold text-[#1a202c] mb-4 font-display">
              Menu
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#718096]">
              {[
                { name: "Home", href: "/" },
                { name: "About us", href: "/#about" },
                { name: "Our team", href: "/#services" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#2596be] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h4 className="text-[16px] font-bold text-[#1a202c] mb-4 font-display">
              Community
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#718096]">
              {[
                { name: "Knowledge", href: "/blog" },
                { name: "Developers", href: "/#services" },
                { name: "FAQ", href: "/#faq" },
                { name: "Forum", href: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#2596be] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[16px] font-bold text-[#1a202c] mb-4 font-display">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#718096]">
              {[
                { name: "About", href: "/#about" },
                { name: "Blog", href: "/blog" },
                { name: "Press", href: "/blog" },
                { name: "Careers", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#2596be] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Address */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[16px] font-bold text-[#1a202c] mb-4 font-display">
              Address
            </h4>
            <div className="space-y-3.5 text-[13.5px] text-[#718096] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-[#718096] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Innovation Hub, Tech District, Silicon Valley, CA 94016</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-[#718096] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+18005558324"
                  className="hover:text-[#2596be] transition-colors"
                >
                  +1 (800) 555-TECH
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-[#718096] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@technosky.solutions"
                  className="hover:text-[#2596be] transition-colors break-all"
                >
                  contact@technosky.solutions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider matching Sofbox screenshot */}
        <div className="border-t border-slate-200/80 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Brand Logo + Terms / Privacy */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Link href="/" className="inline-block">
                <img
                  src="/Techno-Sky-Logo.png"
                  alt="TechnoSky Solutions"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center gap-5 text-[13px] text-[#718096]">
                <Link
                  href="/terms"
                  className="hover:text-[#2596be] transition-colors"
                >
                  Term and Condition
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-[#2596be] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Right: Copyright */}
            <div className="text-[13px] text-[#718096]">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-[#38bdf8] font-semibold">TechnoSky</span> All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (Matching Sofbox screenshot bottom-right) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#1a202c] hover:bg-[#38bdf8] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}
