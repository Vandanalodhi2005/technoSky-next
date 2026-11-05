import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | TechnoSky Solutions",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-36 pb-20 bg-white">
      <div className="container max-w-3xl">
        <Link href="/" className="text-[#1e6fff] font-bold text-[14px] hover:underline mb-6 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="section-title text-[36px] mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-[#64748b] leading-relaxed text-[16px]">
          <p>TechnoSky Solutions is committed to protecting your privacy and confidential business information.</p>
          <p>We do not sell, rent, or trade your personal or corporate contact details to any third-party marketing services.</p>
          <p>For inquiries regarding data protection and governance, please reach us directly at contact@technosky.solutions.</p>
        </div>
      </div>
    </main>
  );
}

