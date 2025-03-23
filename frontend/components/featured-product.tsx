"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating: number
  reviewCount: number
}

interface FeaturedProductProps {
  product: Product
  reversed?: boolean
}

export default function FeaturedProduct({ product, reversed = false }: FeaturedProductProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Card className="border-0 shadow-none bg-muted/30">
      <CardContent className="p-0">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Content Column */}
            <div className={reversed ? "lg:order-2" : "lg:order-1"}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold border border-gold/30">
                    FEATURED
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="flex items-center mb-6">
                  <div className="flex text-amber-500 mr-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-amber-500" : ""}`} />
                      ))}
                  </div>
                  <span className="text-muted-foreground">{product.reviewCount} reviews</span>
                </div>

                <div className="text-3xl font-bold mb-6 text-gold">₹{product.price.toLocaleString()}</div>

                <Button size="lg" className="bg-gold text-black hover:bg-gold/90" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to cart
                </Button>
              </motion.div>
            </div>

            {/* Image Column */}
            <div className={reversed ? "lg:order-1" : "lg:order-2"}>
              <motion.div
                initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

