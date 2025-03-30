"use client"

import { useState } from "react"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(true) // For demo purposes, assume connected
  const [address] = useState("0x1234...5678") // Simulated wallet address

  const handleConnect = () => {
    // This is a placeholder for actual wallet connection logic
    // In a real implementation, this would connect to MetaMask or other wallets
    setIsConnected(true)
  }

  if (!isConnected) {
    return (
      <button
        onClick={handleConnect}
        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Connect Wallet
      </button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 bg-black/20 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-md">
        Ethereum
      </button>
      <button className="flex items-center gap-1 bg-orange-600/10 text-orange-500 border border-orange-500/20 px-3 py-1.5 rounded-md">
        {address}
      </button>
    </div>
  )
}

