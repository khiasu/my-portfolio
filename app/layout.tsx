import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";

export const metadata: Metadata = {
  title: "Khiasu 2vis | Full-Stack Developer",
  description: "Full-Stack Developer based in Dimapur, India. Building scalable applications with modern web technologies.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
