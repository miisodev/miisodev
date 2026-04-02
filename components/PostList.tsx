import Link from "next/link";
import { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
  showLink?: boolean;
}

export default function PostList({ posts, showLink = true }: PostListProps) {
  return (
    <section className="space-y-8 fade-in stagger-item-5">
      <div>
        <h2 className="text-3xl font-display mb-2">&lt;/&gt; blog</h2>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="pb-6 last:border-b-0"
            style={{
              borderBottom: "1px solid rgba(102, 102, 102, 0.2)",
            }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block transition-colors"
            >
              <h3 className="text-xl font-display leading-tight">{post.title}</h3>
            </Link>
            <p className="text-xs font-mono mt-2" style={{ color: "var(--muted)" }}>
              {formatDate(post.date)}
            </p>
            <p className="text-sm mt-2 leading-relaxed" style={{ opacity: 0.9 }}>
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>

      {showLink && (
        <div>
          <Link
            href="/blog"
            className="inline-block text-sm font-mono transition-opacity"
            style={{ color: "#6B8F71" }}
          >
            All posts →
          </Link>
        </div>
      )}
    </section>
  );
}
