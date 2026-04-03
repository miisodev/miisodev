"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "system" | "light" | "dark";

const VALID_THEMES: Theme[] = ["system", "light", "dark"];

const OPTIONS: { value: Theme; label: string; icon: React.ReactNode }[] = [
  {
    value: "system",
    label: "System theme",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    value: "light",
    label: "Light theme",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark theme",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
  localStorage.setItem("theme-preference", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("theme-preference");
    const initial: Theme = VALID_THEMES.includes(stored as Theme) ? (stored as Theme) : "system";
    setTheme(initial);
    applyTheme(initial);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    setMounted(true);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const select = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = OPTIONS.findIndex((o) => o.value === theme);
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % OPTIONS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + OPTIONS.length) % OPTIONS.length;
    } else {
      return;
    }
    const next = OPTIONS[nextIndex].value;
    select(next);
    buttonRefs.current[nextIndex]?.focus();
  };

  if (!mounted) return <div style={{ width: 102, height: 32 }} />;

  const index = OPTIONS.findIndex((o) => o.value === theme);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      onKeyDown={handleKeyDown}
      style={{
        display: "flex",
        alignItems: "center",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: 3,
        gap: 2,
        position: "relative",
      }}
    >
      {/* Sliding indicator */}
      <div
        style={{
          position: "absolute",
          top: 3,
          left: 3 + index * 34,
          width: 32,
          height: 26,
          background: "var(--bg)",
          borderRadius: 999,
          border: "1px solid var(--border)",
          transition: reducedMotion ? "none" : "left 200ms ease",
          pointerEvents: "none",
        }}
      />
      {OPTIONS.map((opt, i) => (
        <button
          key={opt.value}
          ref={(el) => { buttonRefs.current[i] = el; }}
          role="radio"
          aria-checked={theme === opt.value}
          aria-label={opt.label}
          tabIndex={theme === opt.value ? 0 : -1}
          onClick={() => select(opt.value)}
          style={{
            position: "relative",
            zIndex: 1,
            width: 32,
            height: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: "none",
            background: "transparent",
            color: theme === opt.value ? "var(--accent)" : "var(--muted)",
            cursor: "pointer",
            transition: reducedMotion ? "none" : "color 200ms ease",
          }}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
