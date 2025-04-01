"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, ArrowUpDown, Globe, Calendar, Percent, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TBondsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample bond data
  const bonds = [
    {
      id: "bond-001",
      name: "US 5-Year Treasury Bond",
      issuer: "United States Treasury",
      country: "United States",
      yield: "4.5%",
      price: "$103.42",
      maturity: "5 years",
      change: "+2.3%",
      type: "Government",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bond-002",
      name: "UAE 2-Year Sukuk",
      issuer: "UAE Ministry of Finance",
      country: "United Arab Emirates",
      yield: "3.7%",
      price: "$99.85",
      maturity: "2 years",
      change: "+0.8%",
      type: "Sukuk",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bond-003",
      name: "Singapore 10-Year Bond",
      issuer: "Monetary Authority of Singapore",
      country: "Singapore",
      yield: "5.2%",
      price: "$108.16",
      maturity: "10 years",
      change: "-0.5%",
      type: "Government",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bond-004",
      name: "UK 3-Year Gilt",
      issuer: "UK Debt Management Office",
      country: "United Kingdom",
      yield: "4.1%",
      price: "$101.75",
      maturity: "3 years",
      change: "+1.2%",
      type: "Government",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bond-005",
      name: "Japan 7-Year Bond",
      issuer: "Ministry of Finance Japan",
      country: "Japan",
      yield: "2.8%",
      price: "$98.60",
      maturity: "7 years",
      change: "+0.3%",
      type: "Government",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bond-006",
      name: "Germany 5-Year Bund",
      issuer: "German Finance Agency",
      country: "Germany",
      yield: "3.5%",
      price: "$102.20",
      maturity: "5 years",
      change: "-0.2%",
      type: "Government",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredBonds = bonds.filter(
    (bond) =>
      bond.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bond.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bond.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bond.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Treasury Bonds</h1>
          <p className="text-gray-400 mt-1">Tokenized government bonds with competitive yields</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by name, issuer, country, or type..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="sukuk">Sukuk</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds.map((bond) => (
              <BondCard key={bond.id} bond={bond} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="government" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((b) => b.type === "Government")
              .map((bond) => (
                <BondCard key={bond.id} bond={bond} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sukuk" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((b) => b.type === "Sukuk")
              .map((bond) => (
                <BondCard key={bond.id} bond={bond} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="corporate" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBonds
              .filter((b) => b.type === "Corporate")
              .map((bond) => (
                <BondCard key={bond.id} bond={bond} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface BondCardProps {
  bond: {
    id: string
    name: string
    issuer: string
    country: string
    yield: string
    price: string
    maturity: string
    change: string
    type: string
    image: string
  }
}

function BondCard({ bond }: BondCardProps) {
  const isPositive = bond.change.startsWith("+")

  return (
    <Card className="overflow-hidden bg-black/40 backdrop-blur-sm border-white/10">
      <div className="relative h-48">
        <img src={bond.image || "/placeholder.svg"} alt={bond.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">{bond.type}</div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg">{bond.name}</h3>
          <div className="text-green-400 font-medium">{bond.yield}</div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-300">
            <Globe className="h-4 w-4 mr-2 text-gray-400" />
            {bond.country} • {bond.issuer}
          </div>
          <div className="flex items-center text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            Maturity: {bond.maturity}
          </div>
          <div className="flex items-center text-gray-300">
            <Percent className="h-4 w-4 mr-2 text-gray-400" />
            Yield: {bond.yield}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
          <span className="font-bold">{bond.price}</span>
          <span className="text-xs text-gray-400 ml-1">per token</span>
        </div>

        <div className={`flex items-center ${isPositive ? "text-green-400" : "text-red-400"}`}>
          <TrendingUp className="h-4 w-4 mr-1" />
          {bond.change}
        </div>

        <Link href={`/dapp/t-bonds/${bond.id}`}>
          <Button variant="default" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

