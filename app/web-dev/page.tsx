import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/SchemaScripts";

export const metadata: Metadata = {
  title: "Web Dev — Kevin Miiso Novo | Framer Templates & Custom Sites",
  description: "Framer templates and custom web development by Kevin Miiso Novo. UI/UX design, motion, and performance-optimized builds. SEO-ready and built to convert.",
  keywords: ["web development", "Framer templates", "Kevin Miiso Novo", "miisodev", "UI/UX", "web design"],
  authors: [{ name: "Kevin Miiso Novo" }],
  openGraph: {
    title: "Web Dev — Kevin Miiso Novo | Framer Templates & Custom Sites",
    description: "Framer templates and custom web development by Kevin Miiso Novo.",
    url: "https://miiso.dev/web-dev",
    type: "website",
    siteName: "Kevin Miiso Novo",
    images: [{ url: "https://miiso.dev/og-image.png", width: 1200, height: 630, alt: "Kevin Miiso Novo — Web Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Dev — Kevin Miiso Novo",
    description: "Framer templates and custom web development by Kevin Miiso Novo.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  alternates: { canonical: "https://miiso.dev/web-dev" },
};

export default function WebDevPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://miiso.dev" }, { name: "Web Dev", url: "https://miiso.dev/web-dev" }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Web Dev</p>
          <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>Crafted for the web.</h1>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: 18, color: "var(--muted)", marginBottom: 16 }}>Framer templates built to convert.</p>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: "var(--muted)", maxWidth: 480 }}>UI/UX design, graphic design, motion, and performance-optimized builds. SEO-ready and built to convert. Available for custom projects.</p>
        </section>

        <section style={{ paddingBottom: 64 }}>
          <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 24 }}>Templates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[1, 2].map((n) => (
              <div key={n} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "var(--surface)", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-outfit)", fontSize: 12, color: "var(--muted)" }}>Preview coming soon</span>
                </div>
                <div style={{ padding: 20 }}>
                  <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: 16, color: "var(--text)", marginBottom: 6 }}>Template {n}</p>
                  <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, color: "var(--muted)", marginBottom: 12 }}>A clean, conversion-focused Framer template.</p>
                  <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--muted)", opacity: 0.5 }}>View on Framer →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingBottom: 96 }}>
          <div style={{ background: "var(--surface)", borderRadius: 12, padding: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: 20, color: "var(--text)" }}>Need a custom site?</p>
            <a href="mailto:miisodev@gmail.com" style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 15, color: "var(--accent)" }}>Get in touch →</a>
          </div>
        </section>
      </div>
    </>
  );
}
