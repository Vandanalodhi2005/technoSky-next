const techStacks = [
  {
    category: "Frontend Development",
    tools: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3 / Tailwind"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "Backend Development",
    tools: ["Node.js", "Express.js", "REST APIs", "Microservices", "GraphQL"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    category: "Database Technologies",
    tools: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    category: "Mobile Development",
    tools: ["React Native", "Android Technologies", "iOS / Swift", "Cross-Platform"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "CMS & E-Commerce",
    tools: ["WordPress", "Shopify", "Custom E-Commerce", "Headless CMS"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    category: "Cloud & Infrastructure",
    tools: ["AWS", "Google Cloud", "Docker", "CI/CD Pipelines", "Managed Hosting"],
    icon: (
      <svg className="w-6 h-6 text-[#1e6fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function TechExpertiseSection() {
  return (
    <section className="section bg-[#fafcff] relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">TECHNOLOGY THAT POWERS INNOVATION</span>
          <h2 className="section-title mb-4">
            The Right Technology for Every Ambition.
          </h2>
          <p className="section-desc">
            We work with modern technologies and development tools to create digital products that are flexible, efficient, and ready for tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="bg-white rounded-2xl p-7 border border-[#e8efff] shadow-sm hover:shadow-xl hover:border-[#1e6fff]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#e8f4ff] flex items-center justify-center">
                  {stack.icon}
                </div>
                <h3 className="font-extrabold text-[18px] text-[#0a1628]">
                  {stack.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[13px] font-semibold bg-[#f1f5f9] text-[#334155] px-3 py-1.5 rounded-lg border border-transparent hover:border-[#1e6fff]/40 hover:bg-[#e8f4ff] hover:text-[#1e6fff] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[14px] text-[#94a3b8] italic mt-12">
          * Technology selection depends on your project requirements and business objectives.
        </p>
      </div>
    </section>
  );
}

