import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kevin Miiso Novo — Founder & CEO | Product Developer | Full-Stack Engineer",
  description:
    "Founder, CEO, product developer, and full-stack engineer based in Durban, South Africa. Building myClerkBook and projects in SaaS, web dev, and game dev.",
  keywords: [
    "miiso.dev",
    "miisodev",
    "miiso",
    "Kevin Miiso Novo",
    "SaaS",
    "Founder",
    "CEO",
    "Product Developer",
    "Full-Stack Engineer",
    "AI",
    "myClerkBook",
    "game developer",
    "web developer",
  ],
  authors: [{ name: "Kevin Miiso Novo" }],
  creator: "Kevin Miiso Novo",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Kevin Miiso Novo — Founder, CEO, Product Developer & Full-Stack Engineer",
    description:
      "Founder, CEO, product developer, and full-stack engineer based in Durban, South Africa. Building myClerkBook and projects in SaaS, web dev, and game dev.",
    url: "https://miiso.dev",
    type: "website",
    siteName: "Kevin Miiso Novo",
    locale: "en_US",
    images: [
      {
        url: "https://miiso.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Miiso Novo - Founder, CEO, Product Developer & Full-Stack Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Miiso Novo — Founder, CEO, Product Developer & Full-Stack Engineer",
    description:
      "Founder, CEO, product developer, and full-stack engineer based in Durban, South Africa. Building myClerkBook and projects in SaaS, web dev, and game dev.",
    creator: "@miisodev",
    images: ["https://miiso.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://miiso.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://miiso.dev/#person",
    name: "Kevin Miiso Novo",
    alternateName: "Miiso",
    url: "https://miiso.dev",
    email: "hello@miiso.dev",
    jobTitle: "Founder & Full-Stack Engineer",
    description:
      "Indie founder and full-stack engineer building privacy-first SaaS products, Fortnite/Roblox game experiences, and Framer web templates. Based in Durban, South Africa.",
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Durban",
        addressCountry: "ZA",
      },
    },
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Supabase",
      "AI/ML integration",
      "SaaS development",
      "Fintech",
      "Game development",
      "Open source",
    ],
    sameAs: [
      "https://x.com/miisodev",
      "https://github.com/miisodev",
      "https://twitch.tv/miisodev",
      "https://youtube.com/@miisodev",
      "https://tiktok.com/@miisodev",
      "https://myclerkbook.com",
    ],
    workExample: {
      "@type": "SoftwareApplication",
      "@id": "https://myclerkbook.com/#software",
      name: "myClerkBook",
      description:
        "Privacy-first AI-powered bookkeeping platform for freelancers, entrepreneurs, and small business owners.",
      url: "https://myclerkbook.com",
    },
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://miiso.dev/#website",
    name: "miisodev",
    url: "https://miiso.dev",
    description:
      "The home of Kevin Miiso Novo — founder, full-stack engineer, and indie SaaS builder. SaaS, game dev (Fortnite/Roblox), web dev, and open-source contributions.",
    publisher: {
      "@id": "https://miiso.dev/#person",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://miiso.dev/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-S54PGLF6Z2" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
