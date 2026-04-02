"use client";

import Link from "next/link";
import { useState } from "react";

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="inline-block text-sm font-mono px-4 py-2 rounded transition-colors"
      style={{
        border: "1px solid #6B8F71",
        backgroundColor: hovered ? "#6B8F71" : "transparent",
        color: hovered ? "white" : "#6B8F71",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      <section className="space-y-4 fade-in stagger-item-1">
        <h1 className="text-4xl md:text-5xl font-display font-normal">
          404.
        </h1>
        <p className="text-base font-mono">
          This page doesn't exist.
        </p>
        <p
          className="text-sm leading-relaxed max-w-2xl"
          style={{ opacity: 0.85 }}
        >
          The link you followed may be broken or the page may have been moved.
          Here's where you can go instead.
        </p>
      </section>

      <section className="flex flex-wrap gap-3 fade-in stagger-item-2">
        <HoverLink href="/">Home</HoverLink>
        <HoverLink href="/saas">SaaS</HoverLink>
        <HoverLink href="/game-dev">Game Dev</HoverLink>
        <HoverLink href="/web-dev">Web Dev</HoverLink>
        <HoverLink href="/blog">Blog</HoverLink>
      </section>
    </div>
  );
}
