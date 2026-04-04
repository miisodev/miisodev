import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug, formatDate, calculateReadTime } from "@/lib/posts";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaScripts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  const canonicalUrl = `https://miiso.dev/blog/${slug}`;
  const ogImage = "https://miiso.dev/og-image.png";
  return {
    title: `${post.title} — Miiso`,
    description: post.excerpt,
    authors: [{ name: "Kevin Miiso Novo" }],
    openGraph: { title: post.title, description: post.excerpt, url: canonicalUrl, type: "article", publishedTime: new Date(post.date).toISOString(), authors: ["Kevin Miiso Novo"], siteName: "Kevin Miiso Novo", images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, creator: "@miisodev", images: [ogImage] },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div style={{ maxWidth: 672, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, color: "var(--text)", marginBottom: 16 }}>Post not found</h1>
        <Link href="/blog" style={{ fontFamily: "var(--font-outfit)", fontSize: 15, color: "var(--accent)" }}>← Back to all posts</Link>
      </div>
    );
  }

  const readTime = calculateReadTime(post.content);

  return (
    <>
      <ArticleSchema title={post.title} description={post.excerpt} publishedDate={new Date(post.date).toISOString()} slug={slug} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://miiso.dev" }, { name: "Blog", url: "https://miiso.dev/blog" }, { name: post.title, url: `https://miiso.dev/blog/${slug}` }]} />
      <article className="animate-page" style={{ maxWidth: 672, margin: "0 auto", padding: "64px 24px 96px" }}>

        <Link href="/blog" style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--accent)", display: "inline-block", marginBottom: 40 }}>
          ← All posts
        </Link>

        <header style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Blog</p>
          <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--text)", marginBottom: 16 }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: 13, color: "var(--muted)" }}>
            <time>{formatDate(post.date)}</time>{" · "}<span>{readTime} min read</span>
          </p>
        </header>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: 40 }} />

        <div className="prose-content">
          <MDXRemote source={post.content} />
        </div>

        <div style={{ borderTop: "1px solid var(--border)", marginTop: 64, paddingTop: 32 }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--accent)" }}>
            ← All posts
          </Link>
        </div>
      </article>
    </>
  );
}
