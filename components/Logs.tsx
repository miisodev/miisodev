const timeline = [
  {
    period: "January 2025 — present",
    company: "myClerkBook",
    role: "CEO and Founder",
    description: "Leading the development and launch of an AI-powered income and expense management platform designed for privacy-conscious professionals, freelancers, and small business owners.",
  },
  {
    period: "January 2025 — present",
    company: "Brilliant.org",
    role: "Computer Science, Coding and AI",
    location: "Online",
    description: "Advanced computer science fundamentals including algorithms, data structures, and computational thinking.",
  },
  {
    period: "January 2024 — January 2025",
    company: "Freelancer.com",
    role: "UI/UX & Graphic Designer",
    description: "Delivered comprehensive design solutions for diverse clients across multiple industries, specializing in user-centered design, brand identity, and marketing collateral.",
  },
  {
    period: "January 2022 — January 2023",
    company: "Satrian - Shopify",
    role: "CEO and Founder",
    description: "Executed the end-to-end development of the business, including platform architecture on Shopify, curated product catalog integration, and supply chain synchronization. Beyond the technical build, I spearheaded the brand's market entry through comprehensive social media management and targeted marketing campaigns.",
  },
  {
    period: "Graduated 2025",
    company: "Udemy",
    role: "Certificate — Graphic Design, Web Design, Web Development",
  },
  {
    period: "Graduated 2016",
    company: "Mater Dolorosa High School",
    role: "Certificate — IGCSE",
  },
];

export default function Logs() {
  return (
    <section>
      <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 48 }}>
        Logs
      </h2>

      <div style={{ position: "relative", paddingLeft: 24 }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "rgba(249, 92, 75, 0.2)" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {timeline.map((item, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              {/* Coral dot */}
              <div style={{ position: "absolute", left: -28, top: 6, width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />

              <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: 18, color: "var(--text)", marginBottom: 4 }}>
                {item.company}
              </p>
              <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 13, color: "var(--accent)", marginBottom: item.location ? 2 : 4 }}>
                {item.role}
              </p>
              {item.location && (
                <p style={{ fontFamily: "var(--font-outfit)", fontSize: 12, color: "var(--muted)", marginBottom: 4 }}>
                  {item.location}
                </p>
              )}
              <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 13, color: "var(--muted)", marginBottom: item.description ? 8 : 0 }}>
                {item.period}
              </p>
              {item.description && (
                <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: "var(--text)", opacity: 0.8, maxWidth: 560 }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
