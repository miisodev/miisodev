import Logs from "@/components/Logs";
import PostList from "@/components/PostList";
import { ProjectSchema } from "@/components/SchemaScripts";
import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <ProjectSchema />
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-24">
        {/* Section 1: Hero */}
        <section className="space-y-4 fade-in stagger-item-1">
          <h1 className="sr-only">
            Kevin Miiso Novo - Founder & CEO | Product Developer | Full-Stack Engineer
          </h1>

          <div className="text-3xl md:text-4xl font-display font-normal">
            Kevin Miiso Novo
          </div>

          <p className="text-sm md:text-base font-mono font-medium">
            Wassup you can call me Miiso, I like learning, innovating and exploration
          </p>

          <p className="text-sm leading-relaxed max-w-2xl font-mono">
            I build AI-powered SaaS products, craft web templates in Framer, and create game experiences in Fortnite. Currently leading myClerkBook, a privacy-first financial management platform, while pushing what's possible with modern AI, agentic development, and cross-platform engineering. Based in Durban, South Africa. Always building, always shipping.
          </p>

          {/* Contact Strip */}
          <div className="flex flex-wrap gap-4 items-center text-sm font-mono pt-2">
            <a
              href="https://x.com/miisodev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              @miisodev
            </a>
            <span style={{ color: "rgba(107, 143, 113, 0.4)" }}>•</span>
            <a
              href="https://twitch.tv/miisodev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              twitch
            </a>
            <span style={{ color: "rgba(107, 143, 113, 0.4)" }}>•</span>
            <a
              href="https://youtube.com/@miisodev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              youtube
            </a>
            <span style={{ color: "rgba(107, 143, 113, 0.4)" }}>•</span>
            <a
              href="https://tiktok.com/@miisodev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              tiktok
            </a>
            <span style={{ color: "rgba(107, 143, 113, 0.4)" }}>•</span>
            <a
              href="https://github.com/miisodev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              github
            </a>
            <span style={{ color: "rgba(107, 143, 113, 0.4)" }}>•</span>
            <a
              href="mailto:miisodev@gmail.com"
              className="hover:transition-colors"
              style={{ color: "#6B8F71" }}
            >
              miisodev@gmail.com
            </a>
          </div>
        </section>

        {/* Section 2: myClerkBook Featured Card */}
        <section className="fade-in stagger-item-2">
          <Link
            href="https://myclerkbook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl p-4 md:p-5 transition-all duration-200 hover:shadow-lg"
            style={{
              border: "2px solid #0067ff",
            }}
          >
            <div className="space-y-3">
              <h2
                className="text-xl font-display font-normal"
                style={{ color: "var(--foreground)" }}
              >
                myClerkBook
              </h2>

              <p
                className="text-sm"
                style={{ color: "var(--foreground)" }}
              >
                Smart BOOK-KEEPING for modern professionals.
              </p>

              <p
                className="text-sm"
                style={{ color: "var(--foreground)" }}
              >
                Take control of your finances without compromising your privacy.
                myClerkBook provides AI-powered expense and income tracking that
                works the way you do — no bank linking required.
              </p>


              <p
                className="text-sm font-mono pt-2"
                style={{ color: "#0067ff" }}
              >
                myclerkbook.com →
              </p>
            </div>
          </Link>
        </section>

        {/* Section 3: what I can do */}
        <section className="fade-in stagger-item-3">
          <div className="space-y-4">
            <h2 className="text-3xl font-display mb-6">&lt;/&gt; what I can do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1. Product & Strategy */}
              <div
                className="rounded-lg p-5 space-y-2 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  Product &amp; Strategy
                </h3>
                <p className="text-sm leading-relaxed">
                  Full product lifecycle from ideation to launch and marketing.
                  Research, brand establishment, feature prioritization, roadmap
                  planning, go-to-market execution, business and revenue
                  modeling.
                </p>
              </div>

              {/* 2. Design & Branding */}
              <div
                className="rounded-lg p-6 space-y-3 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  Design &amp; Branding
                </h3>
                <p className="text-sm leading-relaxed">
                  UI/UX in Figma, design systems, responsive and accessible
                  interfaces. Graphic design, motion, and brand identity from
                  concept to execution.
                </p>
              </div>

              {/* 3. Development & Engineering */}
              <div
                className="rounded-lg p-6 space-y-3 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  Development & Engineering
                </h3>
                <p className="text-sm leading-relaxed">
                  TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase. REST
                  APIs, authentication, real-time sync, and performance-optimized
                  architecture.
                </p>
              </div>

              {/* 4. DevOps & Infrastructure */}
              <div
                className="rounded-lg p-6 space-y-3 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  DevOps &amp; Infrastructure
                </h3>
                <p className="text-sm leading-relaxed">
                  CI/CD pipelines, deployment and preview environments. Error
                  tracking, uptime monitoring, and performance optimization. Code
                  splitting, caching strategies, and Core Web Vitals tuned to
                  production standards.
                </p>
              </div>

              {/* 5. AI/ML & Automation */}
              <div
                className="rounded-lg p-6 space-y-3 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  AI/ML &amp; Automation
                </h3>
                <p className="text-sm leading-relaxed">
                  LLM APIs across Claude, OpenAI, and Gemini. Prompt
                  engineering, RAG, NLP, OCR, and intelligent automation in
                  production products.
                </p>
              </div>

              {/* 6. Mobile & Desktop */}
              <div
                className="rounded-lg p-6 space-y-3 transition-all duration-200"
                style={{
                  border: "1px solid #6B8F71",
                  backgroundColor: "rgba(107, 143, 113, 0.02)",
                }}
              >
                <h3
                  className="text-sm font-mono font-medium uppercase tracking-widest"
                  style={{ color: "#6B8F71" }}
                >
                  Mobile & Desktop
                </h3>
                <p className="text-sm leading-relaxed">
                  Native Android with Kotlin and Jetpack Compose. Mobile with
                  React Native and Expo. Desktop with Electron and Tauri. MVVM
                  architecture, offline-first design, and Material Design across
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What I Do */}
        <section className="fade-in stagger-item-4">
          <div className="space-y-6">
            <h2 className="text-3xl font-display">&lt;/&gt; what I do</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: SaaS */}
              <div
                className="flex flex-col h-full rounded-lg p-6 transition-all duration-200 hover:shadow-md"
                style={{
                  border: "1px solid #6B8F71",
                }}
              >
                <div className="mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "#6B8F71" }}
                  >
                    <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" />
                    <path d="M12 12L2 7L12 2L22 7L12 12Z" />
                    <path d="M12 12L12 22" />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-medium mb-3">SaaS</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Building AI-powered software products designed to be acquired.
                  Modern full-stack engineering with clean architecture,
                  maintainable codebases, and scalable infrastructure built to
                  grow.
                </p>
                <Link
                  href="/saas"
                  className="text-sm font-mono transition-colors mt-auto self-end"
                  style={{ color: "#6B8F71" }}
                >
                  Explore →
                </Link>
              </div>

              {/* Card 2: Web Dev */}
              <div
                className="flex flex-col h-full rounded-lg p-6 transition-all duration-200 hover:shadow-md"
                style={{
                  border: "1px solid #6B8F71",
                }}
              >
                <div className="mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "#6B8F71" }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-medium mb-3">Web Dev</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Creating Framer templates — from concept
                  to polished site. UI/UX design, graphic design, motion, and
                  performance-optimized builds. SEO-ready and built to convert.
                  Available for custom projects.
                </p>
                <Link
                  href="/web-dev"
                  className="text-sm font-mono transition-colors mt-auto self-end"
                  style={{ color: "#6B8F71" }}
                >
                  Explore →
                </Link>
              </div>

              {/* Card 3: Game Dev */}
              <div
                className="flex flex-col h-full rounded-lg p-6 transition-all duration-200 hover:shadow-md"
                style={{
                  border: "1px solid #6B8F71",
                }}
              >
                <div className="mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "#6B8F71" }}
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="17" x2="22" y2="17" />
                    <line x1="6" y1="21" x2="18" y2="21" />
                    <circle cx="9" cy="9" r="1" />
                    <circle cx="15" cy="9" r="1" />
                    <circle cx="9" cy="13" r="1" />
                    <circle cx="15" cy="13" r="1" />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-medium mb-3">Game Dev</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Creating game experiences in Fortnite — from concept
                  to published map. World design, game mechanics, scripting, and
                  performance-optimized builds. Platform-ready and built to
                  engage. Available for custom projects.
                </p>
                <Link
                  href="/game-dev"
                  className="text-sm font-mono transition-colors mt-auto self-end"
                  style={{ color: "#6B8F71" }}
                >
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Logs */}
        <Logs />

        {/* Section 6: Blog */}
        <PostList posts={latestPosts} showLink={true} />
      </div>
    </>
  );
}
