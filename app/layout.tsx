import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Barath Kumar R - Full Stack Developer",
  description:
    "Portfolio of Barath Kumar R - B.Tech IT Student, Full Stack Developer specializing in React, Angular, Java, Python, and MongoDB",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "React", "Angular", "Java", "Python", "MongoDB", "Web Development"],
  authors: [{ name: "Barath Kumar R" }],
  openGraph: {
    title: "Barath Kumar R - Full Stack Developer",
    description: "Portfolio showcasing projects in React, Angular, Java, Python, and MongoDB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
