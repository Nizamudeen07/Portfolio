import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nizamudeen.dev"),
  title: "Nizamudeen N | Full Stack Developer — React.js, Next.js, Node.js",
  description:
    "Full Stack Developer based in Dubai, UAE, frontend-focused, specializing in React.js, Next.js, Node.js and TypeScript — nearly 3 years building high-performance, production-ready web applications. Open to opportunities.",
  openGraph: {
    title: "Nizamudeen N | Full Stack Developer",
    description:
      "Frontend-focused Full Stack Developer — React.js, Next.js, Node.js. Based in Dubai, UAE. Open to opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nizamudeen N | Full Stack Developer",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-fg font-display antialiased">{children}</body>
    </html>
  );
}
