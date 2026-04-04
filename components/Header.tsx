"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/saas", label: "SaaS" },
  { href: "/web-dev", label: "Web Dev" },
  { href: "/game-dev", label: "Game Dev" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest(".hamburger-btn")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @keyframes underlineIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nav-link { color: var(--muted); opacity: 0.9; transition: color 150ms ease; }
        .nav-link:hover { color: var(--accent); }
        .nav-link-active { color: var(--accent); opacity: 1; }
        .hamburger-btn { background: none; border: none; cursor: pointer; padding: 6px; color: var(--text); display: flex; align-items: center; justify-content: center; border-radius: 6px; }
        .hamburger-btn:hover { background: var(--surface); }
        .mobile-nav-link { display: block; font-family: var(--font-outfit); font-weight: 500; font-size: 15px; color: var(--text); padding: 10px 16px; border-radius: 8px; transition: background 120ms ease, color 120ms ease; white-space: nowrap; }
        .mobile-nav-link:hover { background: var(--surface); color: var(--accent); }
        .mobile-nav-link-active { color: var(--accent); }

        @media (min-width: 640px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 639px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          isolation: "isolate",
        }}
      >
        <nav
          aria-label="Main"
          style={{
            maxWidth: 896,
            margin: "0 auto",
            padding: "0 20px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--text)",
              letterSpacing: "-0.01em",
              flexShrink: 0,
            }}
          >
            miiso.dev
          </Link>

          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 24 }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive(href) ? " nav-link-active" : ""}`}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  fontSize: 14,
                  position: "relative",
                  paddingBottom: 2,
                }}
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

          {/* Mobile: theme toggle + hamburger */}
          <div
            className="mobile-controls"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <ThemeToggle />
            <button
              className="hamburger-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile popup */}
        {menuOpen && (
          <div
            id="mobile-menu"
            style={{
              position: "absolute",
              top: 52,
              right: 16,
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
              zIndex: 100,
              padding: "6px",
              animation: "popIn 160ms ease-out both",
              minWidth: 160,
            }}
          >
            <nav aria-label="Mobile">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`mobile-nav-link${isActive(href) ? " mobile-nav-link-active" : ""}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
