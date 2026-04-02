import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog - Kevin Miiso Novo",
  description:
    "Writing on AI, full-stack engineering, SaaS development, and building products as a solo founder. Thoughts from Kevin Miiso Novo, Founder and CEO of myClerkBook.",
  keywords: [
    "AI SaaS",
    "Miiso",
    "miisodev",
    "Kevin Miiso Novo",
    "Founder blog",
    "CEO blog",
    "Product development",
    "SaaS development",
    "web development",
    "game development",
    "Building in public",
  ],
  openGraph: {
    title: "Blog — Kevin Miiso Novo",
    description:
      "Writing on AI, full-stack engineering, and building products as a solo founder.",
    url: "https://miiso.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Kevin Miiso Novo",
    description:
      "Writing on AI, full-stack engineering, and building products as a solo founder.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  alternates: {
    canonical: "https://miiso.dev/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 fade-in stagger-item-1">
        <h1 className="text-4xl md:text-5xl font-display font-normal">
          Blog.
        </h1>

        <p className="text-base font-mono">
          Writing on AI, engineering, SaaS, and building in public.
        </p>

        <p
          className="text-sm leading-relaxed max-w-2xl"
          style={{ opacity: 0.85 }}
        >
          Thoughts on full-stack development, AI integration, solo founder
          workflows, and what it actually takes to build and ship products.
          Written by Kevin Miiso Novo, Founder and CEO of myClerkBook.
        </p>
      </section>

      {/* Posts Section */}
      <section className="fade-in stagger-item-2">
        <PostList posts={posts} showLink={false} />
      </section>
    </div>
  );
}
