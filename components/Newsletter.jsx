"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing to TechnoSky insights!");
      setEmail("");
    }, 600);
  };

  return (
    <div
      id="contact"
      className="relative w-full py-20 sm:py-24 px-4 overflow-hidden"
      style={{
        backgroundColor: "#50C1E5",
        backgroundImage: "linear-gradient(135deg, rgba(80, 193, 229, 0.90) 0%, rgba(56, 189, 248, 0.92) 100%), url('/hero-m.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-white text-[28px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight font-display drop-shadow-sm">
          Subscribe Our Newsletter
        </h2>

        {/* Sofbox Blue Underline Bar */}
        <div className="w-14 h-1 bg-white mx-auto rounded-full mt-3 mb-6" />

        <p className="text-white/95 text-[15px] sm:text-[16px] max-w-xl mx-auto font-light leading-relaxed mb-8">
          Join our weekly newsletter to receive curated technology insights, engineering architectures, and digital product strategies.
        </p>

        {/* Input Bar matching Sofbox reference: Clean White box + Dark Charcoal Button with Search/Send Icon */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-md shadow-2xl p-1.5 transition-all focus-within:ring-2 focus-within:ring-white">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 sm:py-3 text-[#1a202c] placeholder-[#94a3b8] text-[15px] bg-transparent outline-none border-none"
              aria-label="Enter your email"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Subscribe"
              className="bg-[#1a202c] hover:bg-[#2d3748] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
            >
              {status === "loading" ? (
                <span className="text-[13px] font-semibold">...</span>
              ) : (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Feedback states */}
          {status === "error" && (
            <p className="text-white bg-red-500/80 backdrop-blur-sm rounded-md py-1.5 px-3 mt-3 text-[13px] font-medium inline-block">
              {message}
            </p>
          )}
          {status === "success" && (
            <p className="text-[#1a202c] bg-white/95 rounded-md py-2 px-4 mt-3 text-[14px] font-semibold inline-block shadow-md">
              ✓ {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
