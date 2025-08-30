import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer & Designer",
  description: "Professional portfolio showcasing creative development, design, and innovative solutions. Explore my work, skills, and projects.",
  keywords: ["portfolio", "developer", "designer", "creative", "web development", "UI/UX"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Portfolio | Creative Developer & Designer",
    description: "Professional portfolio showcasing creative development, design, and innovative solutions.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Creative Developer & Designer",
    description: "Professional portfolio showcasing creative development, design, and innovative solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
