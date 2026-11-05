"use client";

const blobFeatures = [
  {
    title: "High Resolution",
    desc: "Provided with high resolution architecture and ultra-crisp responsive interfaces.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="13" rx="2" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20h8M12 17v3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Color Schemes",
    desc: "You can customize color schemes and brand aesthetics to fit your exact business needs.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Google Fonts",
    desc: "Engineered with clean, readable typography that enhances brand recognition and engagement.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 5v14m4-7h8m-4-4v8" />
      </svg>
    ),
  },
  {
    title: "Clean Codes",
    desc: "Clean, modular, and maintainable code engineered for high-performance scalability.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function SofboxIntroBlobs() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container">
        {/* Section Title matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#1a202c] mb-3 tracking-tight font-display">
            What is TechnoSky ?
          </h2>
          {/* Centered blue accent line */}
          <div className="w-14 h-1 bg-[#2596be] mx-auto rounded-full mb-4" />
          <p className="text-[#718096] text-[16px] sm:text-[17px] leading-relaxed">
            TechnoSky is a sleek, clean, and powerful technology partner for modern business growth.
          </p>
        </div>

        {/* 4 Floating Organic Blob Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {blobFeatures.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Organic Blob Container matching Sofbox */}
              <div
                className="w-24 h-24 mb-6 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #2596be 100%)",
                  borderRadius:
                    idx === 0
                      ? "45% 55% 63% 37% / 40% 48% 52% 60%"
                      : idx === 1
                      ? "58% 42% 35% 65% / 55% 60% 40% 45%"
                      : idx === 2
                      ? "40% 60% 50% 50% / 60% 40% 60% 40%"
                      : "50% 50% 65% 35% / 45% 55% 45% 55%",
                  boxShadow: "0 18px 35px rgba(37, 150, 190, 0.35)",
                }}
              >
                <div className="transition-transform duration-300 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-[19px] text-[#1a202c] mb-2 font-display group-hover:text-[#2596be] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#718096] text-[14px] leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
