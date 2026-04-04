import Link from "next/link";
import { Post, formatDate, calculateReadTime } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
  showLink?: boolean;
  heading?: string;
}

export default function PostList({ posts, showLink = true, heading = "Latest writing" }: PostListProps) {
  return (
    <section>
      <style>{`
        .post-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 12px 14px 16px;
          border-left: 2px solid transparent;
          text-decoration: none;
          transition: background 150ms ease, border-left-color 150ms ease;
        }
        .post-row:hover {
          background: var(--surface);
          border-left-color: var(--accent);
        }
      `}</style>

      <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 32 }}>
        {heading}
      </h2>

      <div>
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="post-row"
            style={{
              borderTop: idx === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", minWidth: 100, flexShrink: 0 }}>
              {formatDate(post.date)}
            </span>
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 15, color: "var(--text)", flex: 1 }}>
              {post.title}
            </span>
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 12, color: "var(--muted)", flexShrink: 0 }}>
              {calculateReadTime(post.content)} min read
            </span>
            <span style={{ color: "var(--accent)", fontSize: 16, flexShrink: 0 }}>→</span>
          </Link>
        ))}
      </div>

      {showLink && (
        <div style={{ marginTop: 20 }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-outfit)", fontWeight: 500, fontSize: 14, color: "var(--accent)" }}>
            All posts →
          </Link>
        </div>
      )}
    </section>
  );
}
