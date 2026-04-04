import Link from "next/link";
import Logs from "@/components/Logs";
import PostList from "@/components/PostList";
import { ProjectSchema } from "@/components/SchemaScripts";
import { getLatestPosts } from "@/lib/posts";

export default async function Home() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <style>{`
        .social-link { color: var(--muted); transition: color 150ms ease; }
        .social-link:hover { color: var(--accent); }

        .clerk-card { transition: transform 200ms ease, box-shadow 200ms ease; }
        .clerk-card:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04); }

        .capability-card { transition: border-color 150ms ease, background 150ms ease; }
        .capability-card:hover { border-color: var(--accent) !important; background: rgba(249,92,75,0.02) !important; }

        .venture-card { transition: border-color 150ms ease, transform 200ms ease; }
        .venture-card:hover { border-color: var(--accent) !important; transform: translateY(-2px); }
      `}</style>

      <ProjectSchema />
      <div className="animate-page" style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero */}
        <section style={{ paddingTop: 120, paddingBottom: 96 }}>
          <h1 className="sr-only">Kevin Miiso Novo — Founder & CEO | Product Developer | Full-Stack Engineer</h1>

          <p className="hero-label" style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
            Founder &amp; CEO · Durban, South Africa
          </p>

          <p className="hero-name" style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(48px, 7vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 20 }}>
            Kevin Miiso Novo
          </p>

          <p className="hero-tagline" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: 20, color: "var(--muted)", marginBottom: 16 }}>
            Building AI-powered products that ship.
          </p>

          <p className="hero-bio" style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: "var(--muted)", maxWidth: 480, marginBottom: 24 }}>
            I build AI-powered SaaS products, craft web templates in Framer, and create game experiences in Fortnite. Currently leading myClerkBook — a privacy-first financial management platform. Based in Durban, South Africa.
          </p>

          <div className="hero-socials" style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
            {[
              { href: "https://x.com/miisodev", label: "x.com" },
              { href: "https://twitch.tv/miisodev", label: "twitch" },
              { href: "https://youtube.com/@miisodev", label: "youtube" },
              { href: "https://tiktok.com/@miisodev", label: "tiktok" },
              { href: "https://github.com/miisodev", label: "github" },
              { href: "mailto:miisodev@gmail.com", label: "miisodev@gmail.com" },
            ].map(({ href, label }, i, arr) => (
              <span key={href} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="social-link"
                  style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14 }}
                >
                  {label}
                </a>
                {i < arr.length - 1 && <span style={{ color: "var(--muted)", opacity: 0.4 }}>·</span>}
              </span>
            ))}
          </div>
        </section>

        {/* myClerkBook Card */}
        <section style={{ paddingBottom: 96 }}>
          <a
            href="https://myclerkbook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="clerk-card"
            style={{
              display: "block",
              background: "var(--surface)",
              border: "2px solid var(--brand)",
              borderRadius: 12,
              padding: 24,
              textDecoration: "none",
            }}
          >
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 6 }}>myClerkBook</p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 15, color: "var(--muted)", marginBottom: 8 }}>Smart bookkeeping for modern professionals.</p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "var(--muted)", marginBottom: 16, maxWidth: 480 }}>
              Take control of your finances without compromising your privacy. AI-powered expense and income tracking — no bank linking required.
            </p>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--brand)" }}>myclerkbook.com →</p>
          </a>
        </section>

        {/* What I Can Do */}
        <section style={{ paddingBottom: 96 }}>
          <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 32 }}>What I can do</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              { label: "Product & Strategy", desc: "Full product lifecycle from ideation to launch and marketing. Research, brand establishment, feature prioritization, roadmap planning, go-to-market execution, business and revenue modeling." },
              { label: "Design & Branding", desc: "UI/UX in Figma, design systems, responsive and accessible interfaces. Graphic design, motion, and brand identity from concept to execution." },
              { label: "Development & Engineering", desc: "TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase. REST APIs, authentication, real-time sync, and performance-optimized architecture." },
              { label: "DevOps & Infrastructure", desc: "CI/CD pipelines, deployment and preview environments. Error tracking, uptime monitoring, and performance optimization. Core Web Vitals tuned to production standards." },
              { label: "AI/ML & Automation", desc: "LLM APIs across Claude, OpenAI, and Gemini. Prompt engineering, RAG, NLP, OCR, and intelligent automation in production products." },
              { label: "Mobile & Desktop", desc: "Native Android with Kotlin and Jetpack Compose. Mobile with React Native and Expo. Desktop with Electron and Tauri. Offline-first design across platforms." },
            ].map(({ label, desc }) => (
              <div
                key={label}
                className="capability-card"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}
              >
                <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{label}</p>
                <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "var(--text)", opacity: 0.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section style={{ paddingBottom: 96 }}>
          <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 32 }}>What I do</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              {
                href: "/saas", label: "SaaS",
                desc: "Building AI-powered software products designed to be acquired. Modern full-stack engineering with clean architecture and scalable infrastructure.",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
              },
              {
                href: "/web-dev", label: "Web Dev",
                desc: "Creating Framer templates from concept to polished site. UI/UX, motion, and performance-optimized builds. SEO-ready and built to convert.",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
              },
              {
                href: "/game-dev", label: "Game Dev",
                desc: "Creating game experiences in Fortnite from concept to published map. World design, mechanics, scripting, and performance-optimized builds.",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
              },
            ].map(({ href, label, desc, icon }) => (
              <Link
                key={href}
                href={href}
                className="venture-card"
                style={{ display: "flex", flexDirection: "column", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, textDecoration: "none" }}
              >
                <span style={{ color: "var(--accent)", marginBottom: 16 }}>{icon}</span>
                <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: 18, color: "var(--text)", marginBottom: 10 }}>{label}</span>
                <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "var(--muted)", flex: 1, marginBottom: 20 }}>{desc}</span>
                <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--accent)", marginTop: "auto" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Logs */}
        <section style={{ paddingBottom: 96 }}><Logs /></section>

        {/* Blog Preview */}
        <section style={{ paddingBottom: 96 }}>
          <PostList posts={latestPosts} showLink={true} heading="Latest writing" />
        </section>

      </div>
    </>
  );
}
