"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm fade-in"
      style={{
        backgroundColor: `rgba(var(--background), 0.95)`,
      }}
    >
      <nav className="mx-auto max-w-4xl px-4 py-4 flex justify-between items-center">
        {/* Logo/Home */}
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          miiso.dev
        </Link>

        {/* Nav links */}
        <div className="flex gap-6 items-center font-mono text-sm flex-wrap">
          <Link
            href="/saas"
            className={isActive("/saas") ? "font-medium" : ""}
            style={{
              color: isActive("/saas") ? "#6B8F71" : "inherit",
            }}
          >
            SaaS
          </Link>
          <Link
            href="/web-dev"
            className={isActive("/web-dev") ? "font-medium" : ""}
            style={{
              color: isActive("/web-dev") ? "#6B8F71" : "inherit",
            }}
          >
            Web Dev
          </Link>
          <Link
            href="/game-dev"
            className={isActive("/game-dev") ? "font-medium" : ""}
            style={{
              color: isActive("/game-dev") ? "#6B8F71" : "inherit",
            }}
          >
            Game Dev
          </Link>
          <Link
            href="/blog"
            className={isActive("/blog") ? "font-medium" : ""}
            style={{
              color: isActive("/blog") ? "#6B8F71" : "inherit",
            }}
          >
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
