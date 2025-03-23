import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/aristaai/navbar"
import Footer from "@/components/aristaai/footer"
import BackgroundAnimation from "@/components/aristaai/background-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arista AI - Futuristic AI-Powered Platform",
  description: "AI-powered travel planning and smart product recommendations",
}

export default function AristaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden">
            <BackgroundAnimation />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}