import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { blogArticles } from "@/data/blogData";

export const metadata = {
  title: "All Blog Posts | TechnoSky Solutions",
  description: "Browse all technology, AI, and digital transformation articles from TechnoSky Solutions.",
};

export default function AllPostsPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-40 bg-gradient-to-b from-[#f0f6ff]/70 via-white to-white">
      <div className="container pb-16">
        <div className="max-w-3xl mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1e6fff] mb-4 hover:underline">
            &larr; Back to Blog Overview
          </Link>
          <span className="eyebrow block">ARCHIVE &bull; ALL POSTS</span>
          <h1 className="section-title text-[36px] sm:text-[46px] mb-4">
            All Technology Insights &amp; Publications
          </h1>
          <p className="section-desc">
            Explore our complete archive of engineering deep-dives, strategic architectural patterns, and industry analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogArticles.map((article, idx) => (
            <BlogCard
              key={article.id}
              article={article}
              featured={idx === 4}
            />
          ))}
        </div>
      </div>

      <Newsletter />
    </main>
  );
}

