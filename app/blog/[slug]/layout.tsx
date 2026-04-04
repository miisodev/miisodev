import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <div className={jetbrainsMono.variable}>{children}</div>;
}
