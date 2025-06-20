import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pavan Sai Ganta - AI & ML Engineer",
  description:
    "AI & Machine Learning enthusiast with expertise in Deep Learning, NLP, Computer Vision, and AI Model Deployment. Building scalable AI solutions for real-world applications.",
  keywords: ["AI", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Python", "TensorFlow"],
  authors: [{ name: "Pavan Sai Ganta" }],
  openGraph: {
    title: "Pavan Sai Ganta - AI & ML Engineer",
    description: "AI & Machine Learning enthusiast building intelligent solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
