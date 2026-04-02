import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS - Kevin Miiso Novo",
  description:
    "Standalone AI-powered SaaS projects built and sold by Kevin Miiso Novo.",
};

export default async function SaaSPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 fade-in stagger-item-1">
        <h1 className="text-4xl md:text-5xl font-display font-normal">
          SaaS.
        </h1>

        <p className="text-base font-mono">
          Building AI-powered software products designed to be acquired.
        </p>

        <p
          className="text-sm leading-relaxed max-w-2xl"
          style={{ opacity: 0.85 }}
        >
          I build standalone software projects, ship them, and make them
          available for acquisition. Modern full-stack engineering with clean architecture, maintainable codebases, and scalable infrastructure built to grow.
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
            The first SaaS project is currently in development. Check back soon or follow @miisodev on X for updates.
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
              🌐 Live
            </a>
            <a
              href="https://acquire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1 rounded border"
              style={{
                borderColor: "var(--muted)",
                color: "var(--muted)",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            >
              Buy on Acquire
            </a>
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
              Buy Now
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
