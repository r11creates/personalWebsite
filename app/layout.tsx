import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithvik | Software Engineering Portfolio",
  description:
    "University of Toronto Computer Science student building software across systems, AI infrastructure, backend platforms, and full-stack products.",
  keywords: [
    "software engineer",
    "University of Toronto",
    "systems programming",
    "machine learning",
    "AI infrastructure",
    "full-stack developer",
    "developer tools",
  ],
  authors: [{ name: "Rithvik" }],
  creator: "Rithvik",
  metadataBase: new URL("https://r11creates.com"),
  openGraph: {
    title: "Rithvik | Software Engineering Portfolio",
    description:
      "Building software from silicon to AI across systems, machine learning, backend infrastructure, and full-stack products.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#05070A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
