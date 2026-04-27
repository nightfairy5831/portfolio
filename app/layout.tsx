import type { Metadata } from "next";
import { Nunito, Oswald } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald-var",
});

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: "Max Li - Senior Full Stack & AI Automation Engineer",
  description:
    "Max Li - Senior Full Stack Engineer with 8+ years specializing in Laravel, React, React Native, and AI Automation. 40+ projects delivered, 20K+ users served.",
  keywords:
    "Max Li, Full Stack Developer, Senior Engineer, Laravel, React, React Native, AI Automation, SaaS, Remote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${oswald.variable}`}>
      <body className="font-sans bg-bg antialiased">{children}</body>
    </html>
  );
}
