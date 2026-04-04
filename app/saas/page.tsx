import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/SchemaScripts";

export const metadata: Metadata = {
  title: "AI SaaS Products by Kevin Miiso Novo | Built to Ship",
  description:
    "AI-powered SaaS products built to ship and designed for acquisition. Clean architecture, maintainable code, and scalable infrastructure by Kevin Miiso Novo.",
  keywords: ["SaaS", "AI SaaS", "software products", "Kevin Miiso Novo", "miisodev", "indie SaaS", "software acquisition", "full-stack engineering", "Next.js SaaS"],
  authors: [{ name: "Kevin Miiso Novo" }],
  openGraph: {
    title: "AI SaaS Products by Kevin Miiso Novo | Built to Ship",
    description:
      "AI-powered SaaS products built to ship and designed for acquisition. Clean architecture and scalable infrastructure by Kevin Miiso Novo.",
    url: "https://miiso.dev/saas",
    type: "website",
    siteName: "Kevin Miiso Novo",
    images: [{ url: "https://miiso.dev/og-image.png", width: 1200, height: 630, alt: "Kevin Miiso Novo — SaaS Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SaaS Products by Kevin Miiso Novo | Built to Ship",
    description:
      "AI-powered SaaS products built to ship and designed for acquisition. Clean architecture and scalable infrastructure by Kevin Miiso Novo.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  alternates: { canonical: "https://miiso.dev/saas" },
};

export default function SaaSPage() {
  return (
    <>
<BreadcrumbSchema items={[{ name: "Home", url: "https://miiso.dev" }, { name: "SaaS", url: "https://miiso.dev/saas" }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>SaaS</p>
          <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>SaaS.</h1>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: 18, color: "var(--muted)", marginBottom: 16 }}>Building AI-powered software products designed to be acquired.</p>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: "var(--muted)", maxWidth: 480 }}>
            I build standalone software projects, ship them, and make them available for acquisition. Modern full-stack engineering with clean architecture, maintainable codebases, and scalable infrastructure built to grow.
          </p>
        </section>

        <section style={{ paddingBottom: 96 }}>
          <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 24 }}>Projects</h2>

          {/* Placeholder */}
          <div style={{ border: "1px dashed rgba(249,92,75,0.3)", borderRadius: 12, padding: 24 }}>
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-block", marginBottom: 10 }}>In Development</span>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 8 }}>First Project</p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, color: "var(--muted)", marginBottom: 16 }}>The first SaaS project is currently in development. Follow @miisodev on X for updates.</p>
            <div style={{ display: "flex", gap: 12 }}>
              {["Live", "Buy on Acquire", "Buy Now"].map((label) => (
                <span key={label} style={{ fontFamily: "var(--font-outfit)", fontSize: 12, fontWeight: 500, color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 10px", opacity: 0.5 }}>{label}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
