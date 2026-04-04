"use client";

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
      <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 32 }}>
        {heading}
      </h2>

      <div>
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 12px 14px 16px",
              borderTop: idx === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
              borderLeft: "2px solid transparent",
              textDecoration: "none",
              transition: "background 150ms ease, border-left-color 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.borderLeftColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderLeftColor = "transparent";
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
