import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/SchemaScripts";

export const metadata: Metadata = {
  title: "SaaS — Kevin Miiso Novo | AI-Powered Software Products",
  description: "AI-powered SaaS products built and designed for acquisition by Kevin Miiso Novo. Modern full-stack engineering with clean architecture and scalable infrastructure.",
  keywords: ["SaaS", "AI SaaS", "software products", "Kevin Miiso Novo", "miisodev", "indie SaaS", "software acquisition", "full-stack engineering", "Next.js SaaS"],
  authors: [{ name: "Kevin Miiso Novo" }],
  openGraph: {
    title: "SaaS — Kevin Miiso Novo | AI-Powered Software Products",
    description: "AI-powered SaaS products built and designed for acquisition by Kevin Miiso Novo.",
    url: "https://miiso.dev/saas",
    type: "website",
    siteName: "Kevin Miiso Novo",
    images: [{ url: "https://miiso.dev/og-image.png", width: 1200, height: 630, alt: "Kevin Miiso Novo — SaaS Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS — Kevin Miiso Novo | AI-Powered Software Products",
    description: "AI-powered SaaS products built and designed for acquisition by Kevin Miiso Novo.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  alternates: { canonical: "https://miiso.dev/saas" },
};

export default function SaaSPage() {
  return (
    <>
      <style>{`
        .clerk-card-saas { transition: transform 200ms ease, box-shadow 200ms ease; }
        .clerk-card-saas:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
      `}</style>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://miiso.dev" }, { name: "SaaS", url: "https://miiso.dev/saas" }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>SaaS</p>
          <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>Building to ship.</h1>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: 18, color: "var(--muted)", marginBottom: 16 }}>AI-powered software products designed to be acquired.</p>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: "var(--muted)", maxWidth: 480 }}>
            I build standalone software projects, ship them, and make them available for acquisition. Modern full-stack engineering with clean architecture, maintainable codebases, and scalable infrastructure built to grow.
          </p>
        </section>

        <section style={{ paddingBottom: 96 }}>
          <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 24 }}>Projects</h2>

          {/* myClerkBook featured */}
          <a
            href="https://myclerkbook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="clerk-card-saas"
            style={{ display: "block", background: "var(--surface)", border: "1px solid var(--border)", borderLeftWidth: 4, borderLeftColor: "var(--brand)", borderRadius: 12, padding: 24, marginBottom: 16, textDecoration: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 11, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.08em" }}>SaaS Product</span>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 11, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(0,103,255,0.08)", borderRadius: 6, padding: "2px 8px" }}>LIVE</span>
            </div>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 20, color: "var(--text)", marginBottom: 6 }}>myClerkBook</p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, color: "var(--muted)", marginBottom: 8 }}>Smart bookkeeping for modern professionals.</p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "var(--muted)", marginBottom: 16, maxWidth: 480 }}>Privacy-first AI-powered bookkeeping. No bank linking required — manual entry with AI document parsing, multi-currency support, and multiple dashboards.</p>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--brand)" }}>Live →</span>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--brand)" }}>Buy on Acquire →</span>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--brand)" }}>Buy Now →</span>
            </div>
          </a>

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
