import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dip Sarker - Computer Science Researcher & Software Developer",
  description: "Portfolio of Dip Sarker, a Computer Science student and researcher specializing in Machine Learning, Deep Learning, and AI-driven healthcare solutions at AIUB.",
  keywords: "Dip Sarker, Computer Science, Machine Learning, Deep Learning, AI, Healthcare, Research, AIUB, Software Developer, Publications",
  authors: [{ name: "Dip Sarker" }],
  creator: "Dip Sarker",
  publisher: "Dip Sarker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipsarker.dev",
    title: "Dip Sarker - Computer Science Researcher & Software Developer",
    description: "Portfolio of Dip Sarker, a Computer Science student and researcher specializing in Machine Learning, Deep Learning, and AI-driven healthcare solutions.",
    siteName: "Dip Sarker Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Sarker - Computer Science Researcher & Software Developer",
    description: "Portfolio of Dip Sarker, a Computer Science student and researcher specializing in Machine Learning, Deep Learning, and AI-driven healthcare solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
