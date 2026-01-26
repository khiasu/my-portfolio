import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";

export const metadata: Metadata = {
  title: "Khiasu 2vis | Full-Stack Developer | Portfolio",
  description: "Khiasu 2vis - Full-Stack Developer from Nagaland, India. Specializing in React, Next.js, Node.js. Building thoughtful solutions that bridge creativity and functionality.",
  keywords: ["khiasu", "2vis", "khiasu 2vis", "full-stack developer", "web developer", "react developer", "next.js", "nagaland", "dimapur", "india"],
  authors: [{ name: "Khiasu 2vis" }],
  creator: "Khiasu 2vis",
  openGraph: {
    title: "Khiasu 2vis | Full-Stack Developer",
    description: "Full-Stack Developer building modern web applications with emphasis on clean architecture and intuitive user experiences.",
    url: "https://khiasu-portfolio.vercel.app",
    siteName: "Khiasu 2vis Portfolio",
    images: [
      {
        url: "https://khiasu-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khiasu 2vis - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khiasu 2vis | Full-Stack Developer",
    description: "Full-Stack Developer building thoughtful solutions that bridge creativity and functionality.",
    images: ["https://khiasu-portfolio.vercel.app/og-image.jpg"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://khiasu-portfolio.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://khiasu-portfolio.vercel.app" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Khiasu 2vis",
              "alternateName": ["khiasu", "2vis"],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "url": "https://khiasu-portfolio.vercel.app",
              "sameAs": [
                "https://github.com/khiasu",
                "https://www.linkedin.com/in/khiasu2vis",
                "https://www.instagram.com/2vis000/"
              ],
              "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "Web Development"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dimapur",
                "addressRegion": "Nagaland",
                "addressCountry": "India"
              }
            }
          `}
        </script>
      </head>
      <body>
        <MotionProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
