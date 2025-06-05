import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rajanya Roy - Web Developer & Game Developer",
  description:
    "Passionate full-stack web developer and game developer. Building the future, one line of code at a time. Specializing in React, Next.js, Unity, and creative digital experiences.",
  keywords: ["web developer", "game developer", "React", "Next.js", "Unity", "JavaScript", "TypeScript", "portfolio"],
  authors: [{ name: "Rajanya Roy" }],
  creator: "Rajanya Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajanyaroy.dev",
    title: "Rajanya Roy - Web Developer & Game Developer",
    description:
      "Passionate full-stack web developer and game developer. Building the future, one line of code at a time.",
    siteName: "Rajanya Roy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajanya Roy - Web Developer & Game Developer",
    description:
      "Passionate full-stack web developer and game developer. Building the future, one line of code at a time.",
    creator: "@rajanyaroy",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
