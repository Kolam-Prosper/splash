"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, LineChart, TrendingUp, TrendingDown, Bell, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DAppDashboard() {
  // Replace the useAccount hook with:
  const [address] = useState("0x1234...5678") // Simulated wallet address

  // Sample dashboard data (would come from your contracts in a real app)
  const dashboardData = {
    totalAssets: "$120,500",
    assetGrowth: "+5.3%",
    activeInvestments: 4,
    availableStaking: "$25,200",
    portfolioValue: "$142,800",
    portfolioChange: "+3.2%",
  }

  return (
    <div className="space-y-8 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome to KolamProsper dApp</p>
        </div>

        {/* Notifications */}
        <div className="mt-4 sm:mt-0 flex items-center gap-4">
          <button className="relative p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Assets"
          value={dashboardData.totalAssets}
          change={dashboardData.assetGrowth}
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <StatCard
          title="Active Investments"
          value={dashboardData.activeInvestments.toString()}
          type="number"
          icon={<LineChart className="h-5 w-5" />}
        />
        <StatCard
          title="Available for Staking"
          value={dashboardData.availableStaking}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard
          title="Portfolio Value"
          value={dashboardData.portfolioValue}
          change={dashboardData.portfolioChange}
          icon={<TrendingUp className="h-5 w-5" />}
        />
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured T-Bonds */}
        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold flex items-center justify-between">
              Featured T-Bonds
              <Link href="/dapp/t-bonds">
                <Button variant="outline" size="sm" className="h-8 px-2 text-xs border-white/20">
                  View All
                </Button>
              </Link>
            </CardTitle>
            <CardDescription>Treasury bonds with competitive yields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <FeaturedAssetItem
                name="US 5-Year Treasury Bond"
                apy="4.5%"
                price="$103.42"
                change="+2.3%"
                type="t-bond"
              />
              <FeaturedAssetItem name="UAE 2-Year Sukuk" apy="3.7%" price="$99.85" change="+0.8%" type="t-bond" />
              <FeaturedAssetItem
                name="Singapore 10-Year Bond"
                apy="5.2%"
                price="$108.16"
                change="-0.5%"
                type="t-bond"
              />
            </div>
          </CardContent>
        </Card>

        {/* Featured Property Deeds */}
        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold flex items-center justify-between">
              Featured Property Deeds
              <Link href="/dapp/property-deeds">
                <Button variant="outline" size="sm" className="h-8 px-2 text-xs border-white/20">
                  View All
                </Button>
              </Link>
            </CardTitle>
            <CardDescription>Fractional ownership in premium real estate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <FeaturedAssetItem
                name="Manhattan Commercial Building"
                apy="7.2%"
                price="$24.18"
                change="+4.7%"
                type="property"
              />
              <FeaturedAssetItem
                name="Dubai Marina Residential"
                apy="6.8%"
                price="$18.32"
                change="-0.8%"
                type="property"
              />
              <FeaturedAssetItem name="Tokyo Office Complex" apy="5.9%" price="$31.45" change="+2.1%" type="property" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-orange-900/30 to-orange-500/10 backdrop-blur-sm border-orange-500/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Start Investing Today</h3>
                <p className="text-gray-300 mb-4 md:mb-0">Browse our curated selection of T-bonds and property deeds</p>
              </div>
              <div className="flex space-x-3">
                <Link href="/dapp/t-bonds">
                  <Button variant="default">
                    Explore T-Bonds
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dapp/property-deeds">
                  <Button variant="outline">Explore Properties</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-gray-900/50 to-gray-700/10 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Need Liquidity?</h3>
                <p className="text-gray-300 mb-4 md:mb-0">Access our non-liquidating loans backed by your assets</p>
              </div>
              <Link href="/dapp/lending">
                <Button variant="default">
                  Apply for a Loan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  change?: string
  type?: "currency" | "number" | "percentage"
  icon: React.ReactNode
}

function StatCard({ title, value, change, type = "currency", icon }: StatCardProps) {
  const isPositive = change && change.startsWith("+")
  const changeColor = isPositive ? "text-green-400" : "text-red-400"

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-white/10">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">{icon}</div>
          {change && (
            <div className={`text-sm font-medium ${changeColor} flex items-center`}>
              {isPositive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
              {change}
            </div>
          )}
        </div>
        <div className="mt-4 text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
      </CardContent>
    </Card>
  )
}

interface FeaturedAssetItemProps {
  name: string
  apy: string
  price: string
  change: string
  type: "t-bond" | "property"
}

function FeaturedAssetItem({ name, apy, price, change, type }: FeaturedAssetItemProps) {
  const isPositive = change.startsWith("+")
  const path = type === "t-bond" ? "/dapp/t-bonds" : "/dapp/property-deeds"

  return (
    <Link href={path} className="block">
      <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-green-400 text-sm">{apy} APY</div>
        </div>
        <div className="text-right">
          <div>{price}</div>
          <div className={isPositive ? "text-green-400 text-sm" : "text-red-400 text-sm"}>{change}</div>
        </div>
      </div>
    </Link>
  )
}

