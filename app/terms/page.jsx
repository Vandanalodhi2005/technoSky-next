import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | TechnoSky Solutions",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-36 pb-20 bg-white">
      <div className="container max-w-3xl">
        <Link href="/" className="text-[#1e6fff] font-bold text-[14px] hover:underline mb-6 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="section-title text-[36px] mb-6">Terms &amp; Conditions</h1>
        <div className="space-y-4 text-[#64748b] leading-relaxed text-[16px]">
          <p>By engaging with TechnoSky Solutions, clients enter into professional service agreements defined by specific statements of work and milestone specifications.</p>
          <p>All intellectual property developed under custom engineering contracts is assigned in accordance with signed contractual covenants.</p>
          <p>Contact contact@technosky.solutions for commercial terms documentation.</p>
        </div>
      </div>
    </main>
  );
}

