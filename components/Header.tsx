"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = [
    { href: "/saas", label: "SaaS" },
    { href: "/web-dev", label: "Web Dev" },
    { href: "/game-dev", label: "Game Dev" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 56,
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        aria-label="Main"
        style={{
          maxWidth: 896,
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            transition: "color 150ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        >
          miiso.dev
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 500,
                fontSize: 14,
                color: isActive(href) ? "var(--accent)" : "var(--muted)",
                opacity: isActive(href) ? 1 : 0.9,
                position: "relative",
                paddingBottom: 2,
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.opacity = "0.9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive(href) ? "var(--accent)" : ""; e.currentTarget.style.opacity = isActive(href) ? "1" : "0.9"; }}
            >
              {label}
              {isActive(href) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "var(--accent)",
                    borderRadius: 1,
                    transformOrigin: "left",
                    animation: "underlineIn 200ms ease-out both",
                  }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>

      <style>{`
        @keyframes underlineIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </header>
  );
}
