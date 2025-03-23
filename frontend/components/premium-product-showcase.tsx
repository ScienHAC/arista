"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedProduct from "@/components/featured-product"

const featuredProduct = {
  id: 1,
  name: "Smart Luggage with GPS Tracking",
  description:
    "Our advanced smart luggage helps you track your belongings in real-time. The AI provides instant notifications and location updates to ensure your luggage is always secure and within reach.",
  price: 29999,
  rating: 4.9,
  reviewCount: 128,
  image: "/placeholder.svg?height=600&width=600&text=Smart+Luggage",
}

export default function PremiumProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.div ref={containerRef} style={{ opacity, y }}>
      {/* Pass the entire product object as a prop */}
      <FeaturedProduct product={featuredProduct} />

      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/products">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
            View All Products
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}