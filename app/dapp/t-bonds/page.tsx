"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import { Button } from "../components/button"
import { Badge } from "../components/badge"
import { ArrowUpRight, Filter, TrendingUp, Clock, DollarSign, Search } from "lucide-react"
import Image from "next/image"

export default function TBondsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter bonds based on search query
  const filteredBonds = tBonds.filter(
    (bond) =>
      bond.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bond.issuer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold">T-Bonds</h1>
        <p className="text-gray-400 mt-1">Tokenized treasury bonds with secure government backing</p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search bonds..."
            className="w-full pl-10 py-2 bg-gray-900/70 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      {/* T-Bond Categories */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 max-w-lg bg-gray-900/50 p-1">
          <TabsTrigger value="all">All Bonds</TabsTrigger>
          <TabsTrigger value="us">US Treasury</TabsTrigger>
          <TabsTrigger value="intl">International</TabsTrigger>
          <TabsTrigger value="sovereign">Sovereign</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds.map((bond, index) => (
              <TBondCard key={index} {...bond} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="us" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((bond) => bond.category === "us")
              .map((bond, index) => (
                <TBondCard key={index} {...bond} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="intl" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((bond) => bond.category === "intl")
              .map((bond, index) => (
                <TBondCard key={index} {...bond} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sovereign" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((bond) => bond.category === "sovereign")
              .map((bond, index) => (
                <TBondCard key={index} {...bond} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TBondCardProps {
  title: string
  issuer: string
  imageUrl: string
  price: string
  apy: string
  maturity: string
  minInvestment: string
  isPopular?: boolean
  category: string
  description: string
}

function TBondCard({
  title,
  issuer,
  imageUrl,
  price,
  apy,
  maturity,
  minInvestment,
  isPopular = false,
  description,
}: TBondCardProps) {
  return (
    <Card className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)]">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg?height=160&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {isPopular && <Badge className="absolute right-2 top-2 bg-orange-500 text-white">Popular</Badge>}
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{issuer}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400">Current Price</div>
          <div className="font-medium">{price}</div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400">APY</div>
          <div className="flex items-center text-green-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            {apy}
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400 flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            Maturity
          </div>
          <div>{maturity}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400 flex items-center">
            <DollarSign className="mr-1 h-4 w-4" />
            Min Investment
          </div>
          <div>{minInvestment}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Details
        </Button>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          Invest <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample data for T-Bonds
const tBonds = [
  {
    title: "US Treasury 5-Year Bond",
    issuer: "United States Treasury",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$103.42",
    apy: "4.5%",
    maturity: "5 years",
    minInvestment: "$100",
    isPopular: true,
    category: "us",
    description: "5-year US Treasury bonds with quarterly interest payments, backed by the US government.",
  },
  {
    title: "US Treasury 10-Year Bond",
    issuer: "United States Treasury",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$105.87",
    apy: "4.8%",
    maturity: "10 years",
    minInvestment: "$100",
    category: "us",
    description: "10-year US Treasury bonds with semi-annual interest payments and long-term stability.",
  },
  {
    title: "UAE Sukuk 3-Year",
    issuer: "UAE Ministry of Finance",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$101.25",
    apy: "3.7%",
    maturity: "3 years",
    minInvestment: "$200",
    category: "sovereign",
    description: "Sharia-compliant sovereign sukuk issued by the UAE government with predictable returns.",
  },
  {
    title: "Singapore 7-Year Bond",
    issuer: "Monetary Authority of Singapore",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$104.65",
    apy: "4.3%",
    maturity: "7 years",
    minInvestment: "$250",
    category: "intl",
    description: "Highly-rated sovereign bonds from Singapore's central bank with competitive yields.",
  },
  {
    title: "UK Gilt 2-Year",
    issuer: "UK Treasury",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$99.85",
    apy: "3.9%",
    maturity: "2 years",
    minInvestment: "$150",
    category: "intl",
    description: "Short-term UK government bonds with regular interest payments and low risk profile.",
  },
  {
    title: "Japan 15-Year Bond",
    issuer: "Ministry of Finance Japan",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$112.35",
    apy: "2.8%",
    maturity: "15 years",
    minInvestment: "$300",
    category: "intl",
    description: "Long-term Japanese government bonds known for stability and regular income.",
  },
]

