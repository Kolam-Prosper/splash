import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { Providers } from "./providers"
import { DashboardLayout } from "./components/dashboard-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KolamProsper dApp",
  description: "Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options",
}

export default function DAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-gradient-to-b from-black to-gray-900 text-white`}>
      <Providers>
        <DashboardLayout>{children}</DashboardLayout>
      </Providers>
    </div>
  )
}

