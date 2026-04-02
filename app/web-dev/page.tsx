import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/SchemaScripts";

export const metadata: Metadata = {
  title: "Web Dev — Kevin Miiso Novo | Framer Templates & Custom Sites",
  description:
    "Framer templates and custom web projects by Kevin Miiso Novo. UI/UX design, graphic design, motion, and performance-optimized builds. SEO-ready and available for custom work.",
  keywords: [
    "Framer templates",
    "web development",
    "Kevin Miiso Novo",
    "miisodev",
    "UI/UX design",
    "web design",
    "Framer sites",
    "custom websites",
    "SEO-ready templates",
  ],
  authors: [{ name: "Kevin Miiso Novo" }],
  openGraph: {
    title: "Web Dev — Kevin Miiso Novo | Framer Templates & Custom Sites",
    description:
      "Framer templates and custom web projects by Kevin Miiso Novo. UI/UX, motion, and performance-optimized builds available for custom work.",
    url: "https://miiso.dev/web-dev",
    type: "website",
    siteName: "Kevin Miiso Novo",
    images: [
      {
        url: "https://miiso.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Miiso Novo — Web Dev Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Dev — Kevin Miiso Novo | Framer Templates & Custom Sites",
    description:
      "Framer templates and custom web projects by Kevin Miiso Novo. Available for custom work.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  alternates: {
    canonical: "https://miiso.dev/web-dev",
  },
};

export default function WebDevPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://miiso.dev" },
          { name: "Web Dev", url: "https://miiso.dev/web-dev" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 fade-in stagger-item-1">
        <h1 className="text-4xl md:text-5xl font-display font-normal">
          Web Dev.
        </h1>

        <p className="text-base font-mono">
          Building Framer projects - from concept to polished site.
        </p>

        <p
          className="text-sm leading-relaxed max-w-2xl"
          style={{ opacity: 0.85 }}
        >
          I design and build Framer projects. UI/UX design, graphic design, motion, and performance-optimized builds. SEO-ready and built to convert. Available for custom projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-6 fade-in stagger-item-2">
        <h2 className="text-3xl font-display">&lt;/&gt; projects</h2>

        {/* Placeholder Card */}
        <div
          className="rounded-lg p-6 space-y-3"
          style={{
            border: "2px dashed rgba(107, 143, 113, 0.3)",
          }}
        >
          <div
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "#6B8F71" }}
          >
            Coming Soon
          </div>

          <h3 className="text-xl font-display font-normal">First Project</h3>

          <p className="text-sm" style={{ opacity: 0.7 }}>
            The first web dev project is currently in development. Check back soon or follow @miisodev on X for updates.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="font-mono text-xs px-3 py-1 rounded border"
              style={{
                borderColor: "var(--muted)",
                color: "var(--muted)",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            >
              🟢 Available on Framer
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
