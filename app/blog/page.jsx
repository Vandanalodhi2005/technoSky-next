"use client";

import { useState } from "react";
import Link from "next/link";
import HeroIllustration3D from "@/components/HeroIllustration3D";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { blogArticles } from "@/data/blogData";

const categories = ["All", "AI & Future Tech", "Technology", "AI", "Business", "Cloud Solutions"];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-32 md:pt-40 bg-gradient-to-b from-[#f0f6ff]/70 via-white to-white">
      {/* ========================================================= */}
      {/* PHASE 3: BLOG HERO SECTION                                */}
      {/* ========================================================= */}
      <section className="pb-20 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1e6fff]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#00d4ff]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow">BLOG &bull; Insights &amp; Intelligence</span>
              </div>

              <h1 className="section-title text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12]">
                Leading the conversation <br />
                <span className="text-grad">in technology innovation.</span>
              </h1>

              <p className="section-desc max-w-2xl mx-auto lg:mx-0 text-[18px]">
                We share insights, strategies, and industry knowledge to help businesses grow, innovate, and stay ahead in the digital world.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link href="/all-posts" className="btn-primary">
                  <span>View All Posts</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link href="#newsletter" className="btn-secondary">
                  <span>Subscribe to Updates</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Illustration */}
            <div className="lg:col-span-5">
              <HeroIllustration3D />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEARCH & CATEGORY FILTERING                               */}
      {/* ========================================================= */}
      <section className="py-8 bg-white border-y border-[#e8efff]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#1e6fff] text-white shadow-[0_4px_16px_rgba(30,111,255,0.35)]"
                    : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e8f4ff] hover:text-[#1e6fff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#e2e8f0] bg-[#fafcff] text-[14px] text-[#0a1628] focus:border-[#1e6fff] focus:outline-none focus:bg-white"
            />
            <svg
              className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ARTICLE CARDS SECTION (PHASE 4 & 5)                       */}
      {/* ========================================================= */}
      <section className="section bg-[#fafcff]">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#e8efff]">
              <h3 className="text-[20px] font-bold text-[#0a1628] mb-2">No articles found</h3>
              <p className="text-[#64748b] text-[15px]">Try adjusting your search query or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.slice(0, 4).map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
              {filteredArticles[4] && (
                <BlogCard article={filteredArticles[4]} featured={true} />
              )}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* PHASE 6: NEWSLETTER SECTION                               */}
      {/* ========================================================= */}
      <div id="newsletter">
        <Newsletter />
      </div>
    </main>
  );
}

