"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import { Button } from "../components/button"
import { Badge } from "../components/badge"
import { ArrowUpRight, Filter, TrendingUp, MapPin, Home, Building, Search } from "lucide-react"
import Image from "next/image"

export default function PropertyDeedsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter properties based on search query
  const filteredProperties = propertyDeeds.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold">Property Deeds</h1>
        <p className="text-gray-400 mt-1">Tokenized real estate with fractional ownership opportunities</p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full pl-10 py-2 bg-gray-900/70 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Property Categories */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 max-w-lg bg-gray-900/50 p-1">
          <TabsTrigger value="all">All Properties</TabsTrigger>
          <TabsTrigger value="residential">Residential</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="mixed">Mixed-Use</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyDeedCard key={index} {...property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="residential" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((property) => property.category === "residential")
              .map((property, index) => (
                <PropertyDeedCard key={index} {...property} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="commercial" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((property) => property.category === "commercial")
              .map((property, index) => (
                <PropertyDeedCard key={index} {...property} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="mixed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((property) => property.category === "mixed")
              .map((property, index) => (
                <PropertyDeedCard key={index} {...property} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PropertyDeedCardProps {
  title: string
  location: string
  imageUrl: string
  price: string
  apy: string
  occupancyRate?: string
  propertyType: string
  minInvestment: string
  isPopular?: boolean
  category: string
  description: string
}

function PropertyDeedCard({
  title,
  location,
  imageUrl,
  price,
  apy,
  occupancyRate,
  propertyType,
  minInvestment,
  isPopular = false,
  description,
}: PropertyDeedCardProps) {
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
        <CardDescription className="flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400">Token Price</div>
          <div className="font-medium">{price}</div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400">Yield</div>
          <div className="flex items-center text-green-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            {apy}
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-400 flex items-center">
            {propertyType === "Residential" ? <Home className="mr-1 h-4 w-4" /> : <Building className="mr-1 h-4 w-4" />}
            Type
          </div>
          <div>{propertyType}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">Min Investment</div>
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

// Sample data for Property Deeds
const propertyDeeds = [
  {
    title: "Manhattan Commercial Building",
    location: "New York, USA",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$24.18 per token",
    apy: "7.2%",
    occupancyRate: "98%",
    propertyType: "Commercial Office",
    minInvestment: "$250",
    isPopular: true,
    category: "commercial",
    description: "Class A office building in prime Manhattan location with multi-national tenants and stable income.",
  },
  {
    title: "Dubai Marina Residential",
    location: "Dubai, UAE",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$18.32 per token",
    apy: "6.8%",
    occupancyRate: "95%",
    propertyType: "Residential",
    minInvestment: "$200",
    category: "residential",
    description: "Luxury residential complex in Dubai Marina with high rental demand and premium amenities.",
  },
  {
    title: "Tokyo Office Complex",
    location: "Tokyo, Japan",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$31.45 per token",
    apy: "5.9%",
    occupancyRate: "100%",
    propertyType: "Commercial Office",
    minInvestment: "$300",
    category: "commercial",
    description: "Premium office complex in central Tokyo with long-term corporate leases and stable returns.",
  },
  {
    title: "Berlin Mixed-Use Development",
    location: "Berlin, Germany",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$15.76 per token",
    apy: "6.5%",
    occupancyRate: "92%",
    propertyType: "Mixed-Use",
    minInvestment: "$150",
    isPopular: true,
    category: "mixed",
    description: "Modern mixed-use property with retail, office, and residential units in trendy Berlin district.",
  },
  {
    title: "Sydney Waterfront Apartments",
    location: "Sydney, Australia",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$27.95 per token",
    apy: "7.5%",
    occupancyRate: "97%",
    propertyType: "Residential",
    minInvestment: "$275",
    category: "residential",
    description: "Waterfront luxury apartments with stunning harbor views and premium rental income potential.",
  },
  {
    title: "Madrid Retail Center",
    location: "Madrid, Spain",
    imageUrl: "/placeholder.svg?height=160&width=400",
    price: "$12.86 per token",
    apy: "6.2%",
    occupancyRate: "89%",
    propertyType: "Commercial Retail",
    minInvestment: "$125",
    category: "commercial",
    description: "Centrally located retail center with established tenants and foot traffic from tourists and locals.",
  },
]

