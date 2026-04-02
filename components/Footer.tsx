export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-4xl px-4 py-8 fade-in">
      <div style={{ borderTop: "1px solid rgba(102, 102, 102, 0.2)" }} className="pt-8">
        <div className="flex items-center justify-center gap-4 text-sm font-mono">
          <span>© {currentYear} miisodev</span>
          <a
            href="https://x.com/miisodev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#6B8F71" }}
            title="Follow on X"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.688-5.888 6.688H.645l7.73-8.835L.645 2.25h6.734l4.888 6.469L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
