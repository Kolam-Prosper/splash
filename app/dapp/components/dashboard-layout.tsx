"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Building, Landmark, Wallet, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Simulated wallet connection state
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectWallet = () => {
    setIsConnected(true)
    setWalletAddress("0x1234...5678")
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  const navItems = [
    { name: "Dashboard", href: "/dapp", icon: Home },
    { name: "Property Deeds", href: "/dapp/property-deeds", icon: Building },
    { name: "T-Bonds", href: "/dapp/t-bonds", icon: Landmark },
    { name: "Wallet", href: "/dapp/wallet", icon: Wallet },
    { name: "Settings", href: "/dapp/settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-gray-900 border-gray-800"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:flex flex-col w-64 bg-gray-900 border-r border-gray-800">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-500"></div>
            <span className="font-bold text-xl">Kolam Prosper</span>
          </Link>
        </div>

        <div className="px-4 py-2">
          {isConnected ? (
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-2">
                  <div className="text-sm font-medium">Connected</div>
                  <div className="text-xs text-gray-400">{walletAddress}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto h-8 w-8 text-gray-400 hover:text-white"
                  onClick={disconnectWallet}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-400 flex justify-between">
                <span>Balance:</span>
                <span className="font-medium text-white">1.45 ETH</span>
              </div>
            </div>
          ) : (
            <Button className="w-full" variant="default" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </div>

        <nav className="mt-6 flex-1">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                      isActive
                        ? "bg-orange-500/10 text-orange-500"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                <Landmark className="h-4 w-4" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium">Need Help?</div>
                <Link href="/support" className="text-xs text-orange-500 hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex flex-col w-64 max-w-xs bg-gray-900 border-r border-gray-800">
            <div className="p-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                <span className="font-bold text-xl">Kolam Prosper</span>
              </Link>
            </div>

            <div className="px-4 py-2">
              {isConnected ? (
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-medium">Connected</div>
                      <div className="text-xs text-gray-400">{walletAddress}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto h-8 w-8 text-gray-400 hover:text-white"
                      onClick={disconnectWallet}
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-400 flex justify-between">
                    <span>Balance:</span>
                    <span className="font-medium text-white">1.45 ETH</span>
                  </div>
                </div>
              ) : (
                <Button className="w-full" variant="default" onClick={connectWallet}>
                  Connect Wallet
                </Button>
              )}
            </div>

            <nav className="mt-6 flex-1">
              <ul className="space-y-1 px-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                          isActive
                            ? "bg-orange-500/10 text-orange-500"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="p-4 mt-auto">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <Landmark className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Need Help?</div>
                    <Link href="/support" className="text-xs text-orange-500 hover:underline">
                      Contact Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

