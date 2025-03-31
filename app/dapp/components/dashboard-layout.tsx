"use client"

import type React from "react"

import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { address, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <ul>
          <li className="mb-2">
            {isConnected ? (
              <div>
                {ensAvatar && (
                  <img
                    src={ensAvatar || "/placeholder.svg"}
                    alt="ENS Avatar"
                    className="rounded-full w-8 h-8 mr-2 inline-block"
                  />
                )}
                {ensName
                  ? `${ensName} (${address?.slice(0, 6)}...${address?.slice(-4)})`
                  : `${address?.slice(0, 6)}...${address?.slice(-4)}`}
                <button
                  onClick={disconnect}
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Connect Wallet
              </button>
            )}
          </li>
          <li>
            <a href="#" className="block hover:bg-gray-200 p-2 rounded">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-gray-200 p-2 rounded">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}

