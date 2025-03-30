"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WalletConnect } from "./wallet-connect"
import { Home, Landmark, Building, LineChart, Wallet, Settings, CreditCard, Menu, X } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isConnected, setIsConnected] = useState(true) // For demo purposes, assume connected
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Navigation items
  const navItems = [
    { name: "Dashboard", path: "/dapp", icon: Home },
    { name: "T-Bonds", path: "/dapp/t-bonds", icon: Landmark },
    { name: "Property Deeds", path: "/dapp/property-deeds", icon: Building },
    { name: "Staking", path: "/dapp/staking", icon: LineChart },
    { name: "Lending", path: "/dapp/lending", icon: CreditCard },
    { name: "My Portfolio", path: "/dapp/portfolio", icon: Wallet },
    { name: "Settings", path: "/dapp/settings", icon: Settings },
  ]

  // If not connected, show wallet connect screen
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md p-8 bg-gray-900/50 backdrop-blur-md rounded-lg border border-white/10 text-center">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold">
                Kolam<span className="text-orange-500">Prosper</span>
              </h1>
              <div className="text-xs text-gray-400 -mt-1">كولام بروسبر</div>
            </Link>
          </div>
          <h2 className="text-xl font-bold mb-4">Connect Wallet to Continue</h2>
          <p className="text-gray-400 mb-6">Please connect your wallet to access the KolamProsper dApp.</p>
          <div className="flex justify-center">
            <WalletConnect />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 rounded-md text-white"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 transform z-40 md:translate-x-0 transition duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex flex-col w-64 bg-gray-900/80 backdrop-blur-md border-r border-white/10`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-white/10">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-bold">
                Kolam<span className="text-orange-500">Prosper</span>
              </h1>
            </Link>
            <div className="text-xs text-gray-400">كولام بروسبر</div>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                      pathname === item.path
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom section for wallet */}
          <div className="p-4 border-t border-white/10">
            <div className="mb-2 text-xs text-gray-400">Connected Wallet</div>
            <WalletConnect />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 py-6 px-4 md:pl-2 md:pr-6 overflow-x-hidden">{children}</main>
      </div>
    </div>
  )
}

