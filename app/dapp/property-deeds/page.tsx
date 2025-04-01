"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, ArrowUpDown, MapPin, User, DollarSign, Building, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PropertyDeedsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample property data
  const properties = [
    {
      id: "prop-001",
      propertyId: "NYC-COM-001",
      location: "Manhattan, New York",
      ownerName: "Kolam Prosper DAO",
      price: "24.18",
      type: "Commercial",
      image: "/placeholder.svg?height=200&width=300",
      yield: "7.2%",
      occupancy: "98%",
      sqft: "12,500",
    },
    {
      id: "prop-002",
      propertyId: "DXB-RES-002",
      location: "Dubai Marina, UAE",
      ownerName: "Kolam Prosper DAO",
      price: "18.32",
      type: "Residential",
      image: "/placeholder.svg?height=200&width=300",
      yield: "6.8%",
      occupancy: "92%",
      sqft: "8,200",
    },
    {
      id: "prop-003",
      propertyId: "TKY-OFF-003",
      location: "Shibuya, Tokyo",
      ownerName: "Kolam Prosper DAO",
      price: "31.45",
      type: "Office",
      image: "/placeholder.svg?height=200&width=300",
      yield: "5.9%",
      occupancy: "95%",
      sqft: "15,800",
    },
    {
      id: "prop-004",
      propertyId: "LON-MIX-004",
      location: "Canary Wharf, London",
      ownerName: "Kolam Prosper DAO",
      price: "27.65",
      type: "Mixed Use",
      image: "/placeholder.svg?height=200&width=300",
      yield: "6.5%",
      occupancy: "94%",
      sqft: "18,300",
    },
    {
      id: "prop-005",
      propertyId: "SIN-RET-005",
      location: "Orchard Road, Singapore",
      ownerName: "Kolam Prosper DAO",
      price: "22.80",
      type: "Retail",
      image: "/placeholder.svg?height=200&width=300",
      yield: "7.8%",
      occupancy: "97%",
      sqft: "9,500",
    },
    {
      id: "prop-006",
      propertyId: "SYD-RES-006",
      location: "Bondi Beach, Sydney",
      ownerName: "Kolam Prosper DAO",
      price: "19.95",
      type: "Residential",
      image: "/placeholder.svg?height=200&width=300",
      yield: "6.2%",
      occupancy: "96%",
      sqft: "7,800",
    },
  ]

  const filteredProperties = properties.filter(
    (property) =>
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.propertyId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Property Deeds</h1>
          <p className="text-gray-400 mt-1">Fractional ownership in premium real estate</p>
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
          placeholder="Search by location, owner, ID, or type..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="residential">Residential</TabsTrigger>
          <TabsTrigger value="retail">Retail</TabsTrigger>
          <TabsTrigger value="mixed">Mixed Use</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="commercial" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((p) => p.type === "Commercial" || p.type === "Office")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="residential" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((p) => p.type === "Residential")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="retail" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((p) => p.type === "Retail")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="mixed" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties
              .filter((p) => p.type === "Mixed Use")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PropertyCardProps {
  property: {
    id: string
    propertyId: string
    location: string
    ownerName: string
    price: string
    type: string
    image: string
    yield: string
    occupancy: string
    sqft: string
  }
}

function PropertyCard({ property }: PropertyCardProps) {
  const TypeIcon =
    property.type === "Commercial" || property.type === "Office"
      ? Building
      : property.type === "Residential"
        ? Home
        : Building

  return (
    <Card className="overflow-hidden bg-black/40 backdrop-blur-sm border-white/10">
      <div className="relative h-48">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.location}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">{property.type}</div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg">{property.location}</h3>
          <div className="text-green-400 font-medium">{property.yield}</div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {property.location}
          </div>
          <div className="flex items-center text-gray-300">
            <User className="h-4 w-4 mr-2 text-gray-400" />
            {property.ownerName}
          </div>
          <div className="flex items-center text-gray-300">
            <TypeIcon className="h-4 w-4 mr-2 text-gray-400" />
            {property.sqft} sq ft • {property.occupancy} Occupied
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
          <span className="font-bold">${property.price}</span>
          <span className="text-xs text-gray-400 ml-1">per token</span>
        </div>

        <Link href={`/dapp/property-deeds/${property.id}`}>
          <Button variant="default" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

