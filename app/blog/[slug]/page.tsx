import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPostSlugs,
  getPostBySlug,
  formatDate,
  calculateReadTime,
} from "@/lib/posts";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaScripts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  const canonicalUrl = `https://miiso.dev/blog/${slug}`;
  const ogImage = "https://miiso.dev/og-image.png";

  return {
    title: `${post.title} — Miiso`,
    description: post.excerpt,
    authors: [{ name: "Kevin Miiso Novo" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Kevin Miiso Novo"],
      siteName: "Kevin Miiso Novo",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@miisodev",
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-display">Post not found</h1>
          <Link
            href="/blog"
            style={{ color: "#6B8F71" }}
            className="transition-opacity"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  const readTime = calculateReadTime(post.content);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        publishedDate={new Date(post.date).toISOString()}
        slug={slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://miiso.dev" },
          { name: "Blog", url: "https://miiso.dev/blog" },
          { name: post.title, url: `https://miiso.dev/blog/${slug}` },
        ]}
      />
      <article className="mx-auto max-w-2xl px-4 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-block text-sm font-mono transition-opacity mb-8"
        style={{ color: "#6B8F71" }}
      >
        ← All posts
      </Link>

      {/* Header */}
      <header className="space-y-4 mb-12 fade-in">
        <h1 className="text-5xl font-display leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm font-mono" style={{ color: "var(--muted)" }}>
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
      </header>

      {/* Content */}
      <div className="fade-in space-y-4 leading-loose text-base prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 fade-in" style={{ borderTop: "1px solid rgba(102, 102, 102, 0.2)" }}>
        <Link
          href="/blog"
          className="inline-block text-sm font-mono transition-opacity"
          style={{ color: "#6B8F71" }}
        >
          ← All posts
        </Link>
      </footer>
      </article>
    </>
  );
}
