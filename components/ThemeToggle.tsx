"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

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

  useEffect(() => {
    const stored = localStorage.getItem("theme-preference") as Theme | null;
    const initial: Theme = stored ?? "system";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const select = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return <div style={{ width: 100, height: 32 }} />;

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
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

  const index = options.findIndex((o) => o.value === theme);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
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
          transition: "left 200ms ease",
          pointerEvents: "none",
        }}
      />
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={theme === opt.value}
          aria-label={opt.label}
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
            transition: "color 200ms ease",
          }}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
