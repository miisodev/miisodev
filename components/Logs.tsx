const timeline = [
  {
    period: "January 2025 — present",
    company: "myClerkBook",
    role: "CEO and Founder",
    description:
      "Leading the development and launch of an AI-powered income and expense management platform designed for privacy-conscious professionals, freelancers, and small business owners.",
  },
  {
    period: "January 2025 — present",
    company: "Brilliant.org",
    role: "Computer Science, Coding and AI",
    location: "Online",
    description:
      "Advanced computer science fundamentals including algorithms, data structures, and computational thinking.",
  },
  {
    period: "January 2024 — January 2025",
    company: "Freelancer.com",
    role: "UI/UX & Graphic Designer",
    description:
      "Delivered comprehensive design solutions for diverse clients across multiple industries, specializing in user-centered design, brand identity, and marketing collateral.",
  },
  {
    period: "January 2022 — January 2023",
    company: "Satrian - Shopify",
    role: "CEO and Founder",
    description:
      "Executed the end-to-end development of the business, including platform architecture on Shopify, curated product catalog integration, and supply chain synchronization. Beyond the technical build, I spearheaded the brand's market entry through comprehensive social media management and targeted marketing campaigns, maintaining full-cycle responsibility for both the storefront's backend infrastructure and its external digital presence.",
  },
  {
    period: "Graduated 2025",
    company: "Udemy",
    role: "Certificate - Graphic Design, Web Design, Web Development",
  },
  {
    period: "Graduated 2016",
    company: "Mater Dolorosa High School",
    role: "Certificate - IGCSE",
  },
];

export default function Logs() {
  return (
    <section className="space-y-12 fade-in stagger-item-5">
      <div>
        <h2 className="text-3xl font-display mb-8">&lt;/&gt; logs</h2>
      </div>

      <div className="space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="space-y-3">
            {/* Company/Institution Header */}
            <div>
              <h3 className="text-lg font-display">{item.company}</h3>
            </div>

            {/* Role */}
            <div>
              <p className="text-sm font-mono font-medium" style={{ color: "#6B8F71" }}>
                {item.role}
              </p>
              {item.location && (
                <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                  {item.location}
                </p>
              )}
            </div>

            {/* Period and Duration */}
            <div className="space-y-1">
              <p className="text-sm font-mono">
                {item.period}
              </p>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-sm leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Divider */}
            {idx < timeline.length - 1 && (
              <div className="pt-4 mt-4" style={{ borderTop: "1px solid rgba(107, 143, 113, 0.2)" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
