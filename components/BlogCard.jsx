"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ article, featured = false }) {
  return (
    <article
      className={`blog-card-glass group flex flex-col ${
        featured ? "lg:flex-row lg:col-span-2" : "md:flex-col lg:flex-row"
      } h-full relative overflow-hidden`}
    >
      {/* Glossy highlight sweep effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transition-transform z-20" />

      {/* Article Image Container */}
      <div
        className={`blog-card-img relative shrink-0 ${
          featured
            ? "w-full lg:w-1/2 min-h-[260px] lg:min-h-[340px]"
            : "w-full lg:w-5/12 min-h-[220px] lg:min-h-[260px]"
        }`}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft gradient shadow on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

        {/* Category Badge overlay on image for mobile & quick identification */}
        <div className="absolute top-4 left-4 z-10">
          <span className="badge !bg-white/90 backdrop-blur-md !text-[#1e6fff] shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Content Details */}
      <div className="p-7 lg:p-9 flex flex-col justify-between flex-1 bg-white/60">
        <div>
          {/* Metadata bar: Date + Reading Time */}
          <div className="flex items-center gap-4 text-[13px] text-[#64748b] font-medium mb-3">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-extrabold text-[#0a1628] group-hover:text-[#1e6fff] transition-colors leading-snug tracking-tight mb-3 text-[19px] lg:text-[22px]">
            <Link href={article.destination} className="hover:underline decoration-[#1e6fff]/30">
              {article.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-[#64748b] text-[15px] leading-relaxed line-clamp-3 mb-6">
            {article.description}
          </p>
        </div>

        {/* Read Article Link & Animated Arrow */}
        <div className="pt-4 border-t border-[#e8efff] flex items-center justify-between">
          <Link href={article.destination} className="read-link">
            <span>Read Article</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <span className="text-[12px] font-bold text-[#94a3b8] tracking-wider uppercase">
            ARTICLE {article.id}
          </span>
        </div>
      </div>
    </article>
  );
}

