"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"
import ProductCardSkeleton from "@/components/product-card-skeleton"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Mock data - would be fetched from an API in a real application
const featuredProducts = [
  {
    id: 1,
    name: "Smart Backpack Pro",
    description: "Anti-theft backpack with GPS tracking and USB charging",
    price: 12999,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop",
    category: "Bags",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
  },
  {
    id: 2,
    name: "Secure Wallet Plus",
    description: "RFID blocking wallet with Bluetooth tracking",
    price: 5999,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    category: "Wallets",
    rating: 4.6,
    reviewCount: 89,
    isNew: false,
  },
  {
    id: 3,
    name: "Travel Luggage X1",
    description: "Smart luggage with fingerprint lock and built-in scale",
    price: 24999,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1000&auto=format&fit=crop",
    category: "Luggage",
    rating: 4.9,
    reviewCount: 56,
    isNew: true,
  },
  {
    id: 4,
    name: "Power Bank 10000mAh",
    description: "Slim power bank with fast charging technology",
    price: 4999,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    rating: 4.7,
    reviewCount: 112,
    isNew: false,
  },
]

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="border-0 shadow-none bg-background">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Featured Products</CardTitle>
        <CardDescription className="text-lg">Discover our most popular smart travel essentials</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
        </div>
      </CardContent>
    </Card>
  )
}

