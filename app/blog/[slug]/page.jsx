import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogData";
import Newsletter from "@/components/Newsletter";

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | TechnoSky Blog`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-32 md:pt-40 bg-gradient-to-b from-[#f0f6ff]/70 via-white to-white">
      <article className="container max-w-4xl pb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[13px] text-[#64748b] font-medium mb-6">
          <Link href="/" className="hover:text-[#1e6fff]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#1e6fff]">Blog</Link>
          <span>/</span>
          <span className="text-[#0a1628] font-bold line-clamp-1">{article.category}</span>
        </div>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="badge">{article.category}</span>
          <span className="text-[14px] text-[#64748b]">&bull;</span>
          <span className="text-[14px] text-[#64748b]">{article.date}</span>
          <span className="text-[14px] text-[#64748b]">&bull;</span>
          <span className="text-[14px] text-[#64748b]">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="section-title text-[32px] sm:text-[44px] lg:text-[50px] leading-tight mb-8">
          {article.title}
        </h1>

        {/* Lead Summary Callout */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#e8f4ff]/70 border border-[#b9dcff] mb-10 text-[18px] md:text-[20px] text-[#0a1628] font-semibold leading-relaxed">
          {article.description}
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-[#e8efff]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none space-y-6 text-[#334155] text-[17px] md:text-[18px] leading-[1.85] pb-12 border-b border-[#e8efff]">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <h2 className="text-[26px] font-extrabold text-[#0a1628] pt-6 pb-2">
            Strategic Implications for Digital Leaders
          </h2>
          <p>
            When implementing these concepts into enterprise workflows, technological leadership must prioritize architectural resilience, data governance, and modularity. Choosing the appropriate partner and tech stack ensures that digital investments generate sustained competitive advantages.
          </p>
        </div>

        {/* Author Card */}
        <div className="my-10 p-6 md:p-8 rounded-2xl bg-white border border-[#e8efff] shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e6fff] to-[#00d4ff] flex items-center justify-center text-white font-extrabold text-[22px] shrink-0">
            TS
          </div>
          <div>
            <div className="font-extrabold text-[18px] text-[#0a1628]">{article.author}</div>
            <div className="text-[13px] text-[#1e6fff] font-bold">{article.authorRole}</div>
            <p className="text-[14px] text-[#64748b] mt-1">
              Publishing peer-reviewed insights on modern cloud infrastructure, applied artificial intelligence, and enterprise technology.
            </p>
          </div>
        </div>

        {/* Back Link & Navigation */}
        <div className="flex items-center justify-between pt-6">
          <Link href="/blog" className="btn-secondary !py-2.5 !px-6 text-[14px]">
            &larr; Back to All Articles
          </Link>
          <Link href="/#contact" className="btn-primary !py-2.5 !px-6 text-[14px]">
            Discuss This Topic With Us
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-[#e8efff]">
          <h3 className="text-[22px] font-extrabold text-[#0a1628] mb-6">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={rel.destination}
                className="p-6 rounded-2xl bg-white border border-[#e8efff] hover:border-[#1e6fff]/30 hover:shadow-lg transition-all group block"
              >
                <span className="badge mb-2">{rel.category}</span>
                <h4 className="font-bold text-[17px] text-[#0a1628] group-hover:text-[#1e6fff] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-[13px] text-[#94a3b8] mt-3 font-medium">
                  {rel.date} &bull; {rel.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

