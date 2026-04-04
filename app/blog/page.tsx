import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";
import { BreadcrumbSchema } from "@/components/SchemaScripts";

export const metadata = {
  title: "Blog — Kevin Miiso Novo | Building in Public",
  description:
    "Writing on AI, full-stack engineering, SaaS development, and building in public — by Kevin Miiso Novo, indie founder and CEO of myClerkBook.",
  keywords: ["AI SaaS", "Miiso", "miisodev", "Kevin Miiso Novo", "Founder blog", "CEO blog", "Product development", "SaaS development", "web development", "game development", "Building in public"],
  openGraph: { title: "Blog — Kevin Miiso Novo | Building in Public", description: "Writing on AI, full-stack engineering, SaaS development, and building in public by Kevin Miiso Novo, indie founder and CEO of myClerkBook.", url: "https://miiso.dev/blog", type: "website" },
  twitter: { card: "summary_large_image", title: "Blog — Kevin Miiso Novo | Building in Public", description: "Writing on AI, full-stack engineering, SaaS development, and building in public by Kevin Miiso Novo, indie founder and CEO of myClerkBook.", creator: "@miisodev", images: ["https://miiso.dev/og-image.png"] },
  alternates: { canonical: "https://miiso.dev/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://miiso.dev" }, { name: "Blog", url: "https://miiso.dev/blog" }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Blog</p>
          <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>Thoughts on building.</h1>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: 18, color: "var(--muted)" }}>Writing on AI, engineering, SaaS, and building in public.</p>
        </section>

        <section style={{ paddingBottom: 96 }}>
          <PostList posts={posts} showLink={false} heading="All posts" />
        </section>
      </div>
    </>
  );
}
