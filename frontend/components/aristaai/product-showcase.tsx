"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Wallet Pro",
    description: "Premium leather wallet with GPS tracking, RFID protection, and fingerprint security.",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Wallets",
    features: ["GPS Tracking", "RFID Protection", "Fingerprint Lock"],
  },
  {
    id: 2,
    name: "TravelSafe Luggage",
    description: "Smart luggage with built-in scale, GPS tracking, and USB charging port.",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Luggage",
    features: ["GPS Tracking", "Built-in Scale", "USB Charging"],
  },
  {
    id: 3,
    name: "SecureBackpack",
    description: "Anti-theft backpack with hidden compartments, RFID blocking, and water resistance.",
    price: 179.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Bags",
    features: ["Anti-Theft Design", "RFID Blocking", "Water Resistant"],
  },
  {
    id: 4,
    name: "Smart Passport Holder",
    description: "Secure passport holder with RFID protection and Bluetooth tracking.",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
    features: ["RFID Protection", "Bluetooth Tracking", "Water Resistant"],
  },
]

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))
  }

  const currentProduct = products[currentIndex]

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-card p-6 shadow-lg">
      <div className="absolute right-4 top-4 z-10">
        <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
          {currentProduct.category}
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative h-64 w-64 md:h-80 md:w-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-arista-orange/10 via-arista-gold/5 to-arista-silver/10 blur-xl" />
            <motion.img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="relative h-full w-full object-contain"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevProduct}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextProduct}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col justify-center">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-2 text-2xl font-bold">{currentProduct.name}</h3>
            <p className="mb-4 text-muted-foreground">{currentProduct.description}</p>

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Smart Features:</h4>
              <ul className="space-y-1">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-arista-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 flex items-baseline">
              <span className="text-3xl font-bold">${currentProduct.price}</span>
              <span className="ml-2 text-sm text-muted-foreground">USD</span>
            </div>

            <Button className="bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-arista-orange" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

