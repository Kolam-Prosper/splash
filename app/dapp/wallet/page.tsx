"use client"

import { useState } from "react"
import { Wallet, CreditCard, ArrowUpRight, ArrowDownLeft, Clock, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WalletPage() {
  // Simulated wallet state
  const [walletAddress] = useState("0x1234...5678")
  const [balance] = useState("1.45 ETH")
  const [usdBalance] = useState("$2,890.00")

  // Sample transaction data
  const transactions = [
    {
      id: "tx1",
      type: "send",
      amount: "0.5 ETH",
      to: "0xabcd...efgh",
      date: "2025-03-28",
      time: "14:32",
      status: "completed",
    },
    {
      id: "tx2",
      type: "receive",
      amount: "0.75 ETH",
      from: "0x9876...5432",
      date: "2025-03-25",
      time: "09:15",
      status: "completed",
    },
    {
      id: "tx3",
      type: "send",
      amount: "0.2 ETH",
      to: "0xijkl...mnop",
      date: "2025-03-20",
      time: "18:45",
      status: "completed",
    },
    {
      id: "tx4",
      type: "receive",
      amount: "1.0 ETH",
      from: "0xqrst...uvwx",
      date: "2025-03-15",
      time: "11:22",
      status: "completed",
    },
  ]

  // Sample assets data
  const assets = [
    {
      id: "asset1",
      name: "Manhattan Commercial Building",
      type: "Property",
      amount: "5 tokens",
      value: "$120.90",
      totalValue: "$604.50",
    },
    {
      id: "asset2",
      name: "US 5-Year Treasury Bond",
      type: "T-Bond",
      amount: "10 tokens",
      value: "$103.42",
      totalValue: "$1,034.20",
    },
    {
      id: "asset3",
      name: "Dubai Marina Residential",
      type: "Property",
      amount: "8 tokens",
      value: "$18.32",
      totalValue: "$146.56",
    },
    {
      id: "asset4",
      name: "Singapore 10-Year Bond",
      type: "T-Bond",
      amount: "12 tokens",
      value: "$108.16",
      totalValue: "$1,297.92",
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Wallet</h1>
        <p className="text-gray-400 mt-1">Manage your assets and transactions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-black/40 backdrop-blur-sm border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Wallet Overview</CardTitle>
            <CardDescription>Your current balance and wallet address</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-800/50 rounded-lg mb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mr-4">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Wallet Address</div>
                  <div className="flex items-center">
                    <span className="font-medium">{walletAddress}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm text-gray-400">Balance</div>
                <div className="text-2xl font-bold">{balance}</div>
                <div className="text-sm text-gray-400">{usdBalance}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="w-full">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Send
              </Button>
              <Button className="w-full">
                <ArrowDownLeft className="mr-2 h-4 w-4" />
                Receive
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
            <CardDescription>Common wallet operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Buy Crypto
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Swap Tokens
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Transaction History
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assets">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assets">My Assets</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="assets" className="mt-6">
          <Card className="bg-black/40 backdrop-blur-sm border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Your Assets</CardTitle>
              <CardDescription>All your tokenized properties and T-bonds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4">Asset</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-right py-3 px-4">Amount</th>
                      <th className="text-right py-3 px-4">Price</th>
                      <th className="text-right py-3 px-4">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset) => (
                      <tr key={asset.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                        <td className="py-3 px-4">{asset.name}</td>
                        <td className="py-3 px-4">{asset.type}</td>
                        <td className="py-3 px-4 text-right">{asset.amount}</td>
                        <td className="py-3 px-4 text-right">{asset.value}</td>
                        <td className="py-3 px-4 text-right font-medium">{asset.totalValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="mt-6">
          <Card className="bg-black/40 backdrop-blur-sm border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Recent Transactions</CardTitle>
              <CardDescription>Your latest wallet activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">To/From</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-right py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {tx.type === "send" ? (
                              <ArrowUpRight className="mr-2 h-4 w-4 text-red-400" />
                            ) : (
                              <ArrowDownLeft className="mr-2 h-4 w-4 text-green-400" />
                            )}
                            {tx.type === "send" ? "Sent" : "Received"}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">{tx.amount}</td>
                        <td className="py-3 px-4">{tx.type === "send" ? tx.to : tx.from}</td>
                        <td className="py-3 px-4">
                          {tx.date} <span className="text-gray-400">{tx.time}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

