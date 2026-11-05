"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-[#1a202c]"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo in pure white against cyan hero, original when scrolled */}
        <Link href="/" className="flex items-center text-decoration-none group">
          <img
            src="/Techno-Sky-Logo.png"
            alt="TechnoSky Solutions"
            className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            width={765}
            height={337}
            priority="true"
          />
        </Link>

        {/* Desktop Navigation Links matching reference */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                  scrolled
                    ? isActive
                      ? "text-[#50C1E5] font-bold"
                      : "text-slate-700 hover:text-[#50C1E5]"
                    : isActive
                    ? "text-white font-bold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1">
                  {link.name}
                  {link.name === "Home" && (
                    <span className="text-[11px] opacity-75 leading-none">&or;</span>
                  )}
                </span>
                {/* Active Underline Indicator */}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      scrolled ? "bg-[#50C1E5]" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Rectangular White CTA Button matching screenshot */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            className={`font-bold text-[14px] px-6 py-2.5 rounded-[4px] transition-all duration-300 shadow-sm ${
              scrolled
                ? "bg-[#50C1E5] text-white hover:bg-[#3ba8cc] hover:shadow-md hover:-translate-y-0.5"
                : "bg-white text-[#1a202c] hover:bg-white/95 hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-6 px-6 flex flex-col gap-4 text-slate-900 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 hover:text-[#50C1E5] font-bold text-[16px] py-2 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#50C1E5] text-white rounded-[4px] font-bold block"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {scrolled && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to Top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-2xl hover:bg-[#50C1E5] hover:-translate-y-1 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </header>
  );
}
