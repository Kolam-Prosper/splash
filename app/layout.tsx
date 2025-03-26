import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import NotificationBanner from "./components/notification-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KolamProsper",
  description: "Revolutionizing Finance Through Tokenization",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationBanner />
        <Navigation />
        <div className="pt-16">
          {" "}
          {/* Add padding to account for fixed navbar */}
          {children}
        </div>
      </body>
    </html>
  )
}

