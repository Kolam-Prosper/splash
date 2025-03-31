"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  useToast,
  Spinner,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { ethers } from "ethers"

// Replace with your contract address and ABI
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_propertyId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ownerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "addProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_propertyId",
        type: "string",
      },
    ],
    name: "getProperty",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPropertyCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "properties",
    outputs: [
      {
        internalType: "string",
        name: "propertyId",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "ownerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]

const PropertyDeeds = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const toast = useToast()

  useEffect(() => {
    loadProperties()
  }, [])

  const loadProperties = async () => {
    try {
      setLoading(true)
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const propertyDeedsContract = new ethers.Contract(contractAddress, contractABI, signer)

        const propertyCount = await propertyDeedsContract.getPropertyCount()
        const propertyArray = []

        for (let i = 0; i < propertyCount; i++) {
          const property = await propertyDeedsContract.properties(i)
          propertyArray.push({
            propertyId: property.propertyId,
            location: property.location,
            ownerName: property.ownerName,
            price: ethers.utils.formatEther(property.price),
          })
        }

        setProperties(propertyArray)
      } else {
        console.log("Ethereum object not found")
        toast({
          title: "Ethereum object not found",
          description: "Please install Metamask!",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error("Error loading properties:", error)
      toast({
        title: "Error loading properties",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredProperties = properties.filter(
    (property) =>
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.propertyId.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Box p={5}>
      <Flex align="center" mb={5}>
        <Heading as="h1" size="xl">
          Property Deeds
        </Heading>
        <Spacer />
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            placeholder="Search by location, owner, or ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </Flex>

      {loading ? (
        <Flex justify="center" align="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
          {filteredProperties.map((property, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size="md">{property.location}</Heading>
              </CardHeader>
              <CardBody>
                <Text>Owner: {property.ownerName}</Text>
                <Text>Property ID: {property.propertyId}</Text>
                <Text>Price: {property.price} ETH</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default PropertyDeeds

