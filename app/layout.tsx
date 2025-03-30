import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KolamProsper - Tokenized T-bonds and Property Deeds",
  description: "Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get the current path from headers
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""

  // Check if the current path is in the dApp section
  const isDappPath = pathname.startsWith("/dapp")

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isDappPath && <Navigation />}
        {children}
      </body>
    </html>
  )
}

